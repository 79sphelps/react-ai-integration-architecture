import { listProviders } from '../ai/core/providerRegistry'
import { useProviderStore } from '../state/providerStore'
import { providerMeta } from '../ai/core/providerMeta'

export function ProviderSelector() {
  const providers = listProviders()
  const selected = useProviderStore((s) => s.selected)
  const setProvider = useProviderStore((s) => s.setProvider)

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Provider</label>

      <select
        value={selected}
        onChange={(e) => setProvider(e.target.value)}
        className="border p-2 rounded w-full"
      >
        {providers.map((p) => (
          <option key={p} value={p}>
            {providerMeta[p]?.label || p}
          </option>
        ))}
      </select>

      <div className="text-xs text-gray-500">
        {providerMeta[selected]?.description}
      </div>
    </div>
  )
}