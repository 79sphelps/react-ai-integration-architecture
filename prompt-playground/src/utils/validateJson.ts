export function validateJson(output: string, schema?: any) {
  try {
    const parsed = JSON.parse(output)

    if (!schema) return { valid: true, parsed }

    // Simple shape validation
    for (const key of Object.keys(schema)) {
      if (!(key in parsed)) {
        return { valid: false, error: `Missing key: ${key}` }
      }
    }

    return { valid: true, parsed }
  } catch (err) {
    return { valid: false, error: 'Invalid JSON format' }
  }
}