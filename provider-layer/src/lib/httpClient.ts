import { log } from './logger'

export async function httpPost<T>(
  url: string,
  body: unknown,
  signal?: AbortSignal
): Promise<T> {
  const start = performance.now()

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    signal,
  })

  const duration = performance.now() - start

  const data = await res.json().catch(() => ({}))

  log('info', `POST ${url} (${duration.toFixed(0)}ms)`, data)

  if (!res.ok) {
    log('error', `Request failed: ${url}`, data)
    throw new Error(data?.error || 'Request failed')
  }

  return data
}