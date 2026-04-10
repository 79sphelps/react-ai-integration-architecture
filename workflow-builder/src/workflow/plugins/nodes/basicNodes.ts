import { registerNode } from '../registry'

registerNode('input', async (data) => data.value)

registerNode('transform', async (data, inputs) => {
  return inputs[0] + data.increment
})

registerNode('log', async (_, inputs) => {
  console.log('LOG:', inputs[0])
  return inputs[0]
})