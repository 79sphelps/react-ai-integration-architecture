import { topologicalSort } from '../../src/workflow/core/graph'

test('sorts nodes correctly', () => {
  const nodes = [{ id: '1' }, { id: '2' }] as any
  const edges = [{ from: '1', to: '2' }]

  const result = topologicalSort(nodes, edges)

  expect(result[0].id).toBe('1')
})