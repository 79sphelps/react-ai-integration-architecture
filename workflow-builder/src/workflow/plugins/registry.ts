type Executor = (data: any, inputs: any[]) => Promise<any>

const registry: Record<string, Executor> = {}

export function registerNode(
  type: string,
  executor: Executor
) {
  registry[type] = executor
}

export function getNodeExecutor(type: string) {
  if (!registry[type]) {
    throw new Error(`No executor for ${type}`)
  }
  return registry[type]
}