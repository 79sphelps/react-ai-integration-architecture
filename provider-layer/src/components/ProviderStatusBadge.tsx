import { providerMeta } from '../ai/core/providerMeta'

export function ProviderStatusBadge({ provider }: { provider: string }) {
  const meta = providerMeta[provider]

  const color =
    meta?.status === 'active'
      ? 'bg-green-100 text-green-700'
      : meta?.status === 'degraded'
      ? 'bg-yellow-100 text-yellow-700'
      : 'bg-red-100 text-red-700'

  return (
    <span className={`text-xs px-2 py-1 rounded ${color}`}>
      {meta?.status || 'unknown'}
    </span>
  )
}