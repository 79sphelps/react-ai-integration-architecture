import { initProviders } from './core/registerProviders'

let initialized = false

export function initAI() {
  if (initialized) return
  initProviders()
  initialized = true
}