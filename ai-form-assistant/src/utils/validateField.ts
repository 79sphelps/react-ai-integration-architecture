import type { FieldName, ValidationResult } from '../types'

export function validateField(name: FieldName, value: string): ValidationResult {
  if (!value.trim()) {
    return { valid: false, error: 'Required field' }
  }

  if (name === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      return { valid: false, error: 'Invalid email format' }
    }
  }

  return { valid: true }
}