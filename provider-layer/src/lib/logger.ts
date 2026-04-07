type LogLevel = 'info' | 'warn' | 'error'

export function log(level: LogLevel, message: string, data?: unknown) {
  if (import.meta.env.DEV) {
    console[level](`[AI-${level.toUpperCase()}] ${message}`, data || '')
  }
}