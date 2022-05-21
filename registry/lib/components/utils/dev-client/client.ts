import type { ItemStopPayload, Payload } from 'dev-tools/dev-server/payload'
import { OptionsOfMetadata } from '@/components/define'
import { getComponentSettings } from '@/core/settings'
import { useScopedConsole } from '@/core/utils/log'
import { ComponentMetadata, componentsMap } from '@/components/component'
import { loadInstantStyle, removeStyle } from '@/core/style'
import { autoUpdateOptions, devClientOptionsMetadata } from './options'
import { CoreUpdateMethod, RegistryUpdateMethod } from './update-method'
import { monkey } from '@/core/ajax'
import { plugins } from '@/plugins/plugin'

const { options } = getComponentSettings<OptionsOfMetadata<typeof devClientOptionsMetadata>>('devClient')
const console = useScopedConsole('DevClient')
const handleSocketMessage = (event: MessageEvent, callback: (payload: Payload) => void) => {
  const { data } = event
  try {
    const payload: Payload = JSON.parse(data)
    console.log('接收信息', payload)
    callback(payload)
  } catch (error) {
    console.error('无效信息', data)
  }
}
export enum DevClientEvents {
  CoreUpdate = 'coreUpdate',
  ItemUpdate = 'itemUpdate',
  SessionsUpdate = 'sessionsUpdate',
  ServerChange = 'serverChange',
  ServerConnected = 'serverConnected',
  ServerDisconnected = 'serverDisconnected',
}

export class DevClient extends EventTarget {
  socket: WebSocket
  sessions: string[] = []

  addEventListener(
    type: DevClientEvents,
    callback: EventListenerOrEventListenerObject,
    eventOptions?: boolean | AddEventListenerOptions,
  ) {
    super.addEventListener(type, callback, eventOptions)
  }
  removeEventListener(
    type: DevClientEvents,
    callback: EventListenerOrEventListenerObject,
    eventOptions?: boolean | EventListenerOptions,
  ) {
    super.removeEventListener(type, callback, eventOptions)
  }

  createSocket() {
    return new Promise<boolean>(resolve => {
      this.closeSocket()

      const unloadHandler = () => {
        this.closeSocket()
      }
      this.socket = new WebSocket(`ws://localhost:${options.port}`)
      this.socket.addEventListener('error', () => {
        console.warn('未能连接到 DevServer')
        this.closeSocket()
        resolve(false)
      })
      this.socket.addEventListener('close', () => {
        console.log('已断开 DevServer 连接')
        window.removeEventListener('unload', unloadHandler)
      })
      this.socket.addEventListener('open', () => {
        console.log('已连接到 DevServer')
        this.dispatchEvent(new CustomEvent(DevClientEvents.ServerChange, { detail: true }))
        this.dispatchEvent(new CustomEvent(DevClientEvents.ServerConnected))
        resolve(true)
      })
      this.socket.addEventListener('message', e => {
        handleSocketMessage(e, payload => {
          switch (payload.type) {
            default: {
              break
            }
            case 'start': {
              this.sessions = payload.sessions
              break
            }
            case 'stop': {
              this.closeSocket()
              break
            }
            case 'coreUpdate': {
              this.handleCoreUpdate()
              break
            }
            case 'itemUpdate': {
              const { path } = payload
              this.handleItemUpdate(path)
              break
            }
          }
        })
      })
      window.addEventListener('unload', unloadHandler)
    })
  }

  closeSocket() {
    if (!this.socket) {
      return
    }
    this.socket.close()
    this.socket = null
    this.sessions = []
    this.dispatchEvent(new CustomEvent(DevClientEvents.ServerChange, { detail: false }))
    this.dispatchEvent(new CustomEvent(DevClientEvents.ServerDisconnected))
  }

  get isConnected() {
    return this.socket?.readyState === WebSocket.OPEN
  }

  private handleCoreUpdate() {
    this.dispatchEvent(new CustomEvent(DevClientEvents.CoreUpdate))
    if (options.coreUpdateMethod === CoreUpdateMethod.AlwaysReload) {
      console.log('本体已更新, 刷新页面...')
      location.reload()
    }
  }

  private async handleItemUpdate(path: string) {
    this.dispatchEvent(new CustomEvent(DevClientEvents.ItemUpdate, { detail: path }))
    const url = `http://localhost:${options.port}${path}`
    const componentRecord = Object.entries(autoUpdateOptions.urls.components)
      .find(([, { url: itemUrl }]) => itemUrl.endsWith(path))
    if (componentRecord) {
      const [name] = componentRecord
      const oldComponent = componentsMap[name]
      if (!oldComponent) {
        return
      }
      const code: string = await coreApis.ajax.monkey({ url })
      const { installFeatureFromCode } = await import(
        '@/core/install-feature'
      )
      const { metadata } = await installFeatureFromCode(code, url)
      const newComponent = metadata as ComponentMetadata
      const oldInstantStyles = oldComponent.instantStyles ?? []
      const newInstantStyles = newComponent.instantStyles ?? []
      const isEntryEmpty = oldComponent.entry === none && newComponent.entry === none
      console.log({ oldInstantStyles, newInstantStyles, isEntryEmpty })

      const doNotReload = () => {
        console.log(`组件 [${newComponent.displayName}] 已更新`)
      }
      const reloadInstantStyles = () => {
        if (oldInstantStyles.length > 0 || newInstantStyles.length > 0) {
          loadInstantStyle(newComponent)
          oldInstantStyles.forEach(style => {
            removeStyle(style.name)
          })
          // 修改旧的引用, 否则之前设的事件监听还是用旧样式
          oldComponent.instantStyles = newInstantStyles
          return true
        }
        return false
      }
      const reload = () => {
        console.log(`组件 [${newComponent.displayName}] 已更新, 刷新页面...`)
        location.reload()
      }
      switch (options.registryUpdateMethod) {
        case RegistryUpdateMethod.AlwaysReload: {
          reload()
          break
        }
        case RegistryUpdateMethod.PreferInstantStyles: {
          if (reloadInstantStyles()) {
            doNotReload()
          } else {
            reload()
          }
          break
        }
        case RegistryUpdateMethod.PreferEntry: {
          if (isEntryEmpty && reloadInstantStyles()) {
            doNotReload()
          } else {
            reload()
          }
          break
        }
        default:
        case RegistryUpdateMethod.DoNotReload: {
          doNotReload()
          break
        }
      }
      return
    }

    const pluginRecord = Object.entries(autoUpdateOptions.urls.plugins)
      .find(([, { url: itemUrl }]) => itemUrl.endsWith(path))
    if (pluginRecord) {
      const [name] = pluginRecord
      const plugin = plugins.find(p => p.name === name)
      if (!plugin) {
        return
      }
      const { displayName } = plugin
      if (options.registryUpdateMethod !== RegistryUpdateMethod.DoNotReload) {
        console.log(`插件 [${displayName}] 已更新, 刷新页面...`)
        location.reload()
      } else {
        console.log(`插件 [${displayName}] 已更新`)
      }
    }
  }

  private async querySessions() {
    return new Promise<string[]>(resolve => {
      this.socket?.addEventListener('message', e => {
        handleSocketMessage(e, payload => {
          if (payload.type === 'querySessionsResponse') {
            this.sessions = payload.sessions
            this.dispatchEvent(
              new CustomEvent(DevClientEvents.SessionsUpdate, { detail: payload.sessions }),
            )
            resolve(payload.sessions)
          }
        })
      }, { once: true })
      this.socket?.send(JSON.stringify({ type: 'querySessions' }))
    })
  }

  async startDebug(url: string) {
    await monkey({ url })
    return this.querySessions()
  }

  async stopDebug(path: string) {
    const stopPayload: ItemStopPayload = {
      type: 'itemStop',
      path,
    }
    this.socket?.send(JSON.stringify(stopPayload))
    return this.querySessions()
  }
}
export const devClient = new DevClient()
