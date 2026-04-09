import { useObservabilityStore } from '../state/observabilityStore'

test('adds event to store', () => {
  const event = {
    id: '1',
    type: 'request_success',
    provider: 'test',
    timestamp: Date.now(),
  } as any

  useObservabilityStore.getState().addEvent(event)

  const state = useObservabilityStore.getState()

  expect(state.events.length).toBe(1)
})