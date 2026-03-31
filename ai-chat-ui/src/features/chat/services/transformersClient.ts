import { pipeline } from '@xenova/transformers'
import { env } from '@xenova/transformers'

env.backends.onnx.wasm.numThreads = 1
env.backends.onnx.wasm.simd = true
let generator: any = null

async function getGenerator() {
  if (generator) return generator

  try {
    generator = await pipeline(
      'text-generation',
      'Xenova/distilgpt2',
      {
        progress_callback: (progress) => {
          console.log('Loading model...', progress)
        },
      }
    )

    return generator
  } catch (err) {
    console.error('❌ Model load failed:', err)
    throw new Error('Model initialization failed')
  }
}

export async function generateResponse(prompt: string) {
  try {
    const gen = await getGenerator()

    const result = await gen(prompt, {
      max_new_tokens: 100,
      temperature: 0.7,
    })

    return result[0]?.generated_text || 'No response'
  } catch (err) {
    console.error('❌ Generation failed:', err)
    throw new Error('AI response failed')
  }
}