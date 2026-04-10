import { executeWorkflow } from '../../src/workflow/core/executor'

test('handles node failure', async () => {
  const nodes = [{ id: '1', type: 'unknown', data: {} }]
  const edges: any[] = []

  await expect(executeWorkflow(nodes as any, edges)).rejects.toThrow()
})