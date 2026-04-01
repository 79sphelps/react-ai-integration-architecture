import { useState } from 'react'
import { interpolate } from '../utils/interpolate'
import { validateJson } from '../utils/validateJson'
import { generateMock } from '../api/mockGenerator'

export function usePromptPlayground() {
  const [template, setTemplate] = useState('Write a {tone} summary about {topic}')
  const [variables, setVariables] = useState({ tone: 'funny', topic: 'React' })
  const [temperature, setTemperature] = useState(0.5)
  const [schema, setSchema] = useState('{"response": "", "confidence": 0}')
  const [output, setOutput] = useState('')
  const [validation, setValidation] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const run = async () => {
    setLoading(true)

    const prompt = interpolate(template, variables)
    const result = await generateMock(prompt, temperature)

    setOutput(result)

    try {
      const parsedSchema = JSON.parse(schema)
      const validationResult = validateJson(result, parsedSchema)
      setValidation(validationResult)
    } catch {
      setValidation({ valid: false, error: 'Invalid schema JSON' })
    }

    setLoading(false)
  }

  return {
    template,
    setTemplate,
    variables,
    setVariables,
    temperature,
    setTemperature,
    schema,
    setSchema,
    output,
    validation,
    run,
    loading,
  }
}