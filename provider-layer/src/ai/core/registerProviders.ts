import { registerProvider } from './providerRegistry'
import { mockProvider } from '../providers/mockProvider'
import { openrouterProvider } from '../providers/openrouterProvider'
import { huggingfaceProvider } from '../providers/huggingfaceProvider'

export function initProviders() {
  registerProvider(mockProvider)
  registerProvider(openrouterProvider)
  registerProvider(huggingfaceProvider)
}