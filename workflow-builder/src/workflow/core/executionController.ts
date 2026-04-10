let executionId = 0

export function createExecution() {
  executionId += 1
  const id = executionId

  return {
    id,
    isActive: () => id === executionId,
  }
}