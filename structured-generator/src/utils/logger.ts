export function logEvent(event: string, payload?: any) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[AI LOG]: ${event}`, payload)
  }
}