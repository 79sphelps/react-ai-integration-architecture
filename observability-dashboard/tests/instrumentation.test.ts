import { instrumentedCall } from '../observability/instrumentation'

test('tracks success', async () => {
  const result = await instrumentedCall('test', async () => {
    return 'ok'
  })

  expect(result).toBe('ok')
})