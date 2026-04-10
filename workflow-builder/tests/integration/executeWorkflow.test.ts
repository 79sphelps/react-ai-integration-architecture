import { executeWorkflow } from '../../src/workflow/core/executor'

test('executes workflow', async () => {
  const nodes = [
    { id: '1', type: 'input', data: { value: 1 } },
  ]
  const edges: any[] = []

  const result = await executeWorkflow(nodes, edges)

  expect(result['1']).toBe(1)
})