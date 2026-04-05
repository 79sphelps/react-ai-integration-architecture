
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
// import { generateImageFromHF } from './hfClient'
import fetch from 'node-fetch'

dotenv.config()

export const app = express()

app.use(cors())
app.use(express.json())


const HF_API_KEY = process.env.HF_API_KEY!

const CREATE_URL =
  'https://router.huggingface.co/wavespeed/api/v3/wavespeed-ai/flux-dev'

export async function generateImageFromHF(prompt: string) {
  // 1. Create job
  const createRes = await fetch(CREATE_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${HF_API_KEY}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ prompt }),
  })

  if (!createRes.ok) {
    const text = await createRes.text()
    throw new Error(`HF create failed: ${text}`)
  }

  const createData: any = await createRes.json()

  const resultUrl = createData?.data?.urls?.get

  if (!resultUrl) {
    throw new Error('No result URL returned from HF')
  }

  // 2. Poll for result
  let attempts = 0

  while (attempts < 50) {
    await new Promise((r) => setTimeout(r, 2000))

    const pollRes = await fetch(resultUrl, {
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
      },
    })

    if (!pollRes.ok) {
      attempts++
      continue
    }

    const pollData: any = await pollRes.json()

    if (pollData.status === 'succeeded') {
      const imageUrl = pollData.output?.[0]

      if (!imageUrl) {
        throw new Error('No image returned')
      }

      return imageUrl
    }

    if (pollData.status === 'failed') {
      throw new Error('HF job failed')
    }

    attempts++
  }

  throw new Error('Timed out waiting for image')
}

app.post('/api/generate-image', async (req, res) => {
  try {
    const { prompt } = req.body

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt required' })
    }

    const imageUrl = await generateImageFromHF(prompt)

    res.json({ url: imageUrl })
  } catch (err: any) {
    console.error(err)
    res.status(500).json({ error: err.message })
  }
})

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001')
})