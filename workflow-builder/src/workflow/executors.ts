export type ExecutorFn = (inputs: any) => Promise<any>

export const executors: Record<string, ExecutorFn> = {
  input: async (inputs) => {
    // Input node just returns its own value
    return inputs?.value ?? 1
  },

  add: async (inputs) => {
    return inputs.a + inputs.b
  },

  multiply: async (inputs) => {
    return inputs.a * inputs.b
  },
}