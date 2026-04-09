import { publish, subscribe } from '../src/observability/core/eventBus'
import { vi } from 'vitest'

test('event bus publishes events', () => {
  const mock = vi.fn()

  const unsub = subscribe(mock)

  publish({
    id: '1',
    type: 'request_success',
    provider: 'test',
    timestamp: Date.now(),
  })

  expect(mock).toHaveBeenCalledTimes(1)

  unsub()
})