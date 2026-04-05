import { useImageStore } from '../state/imageStore'
import { ImageCard } from './ImageCard'
import { ImageSkeleton } from './ImageSkeleton'

export function ImageGrid({ loading }: { loading: boolean }) {
  const images = useImageStore((s) => s.images)

  if (!images.length && !loading) {
    return (
      <div className="text-center text-gray-500 mt-4">
        No images yet. Try generating one.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      {loading &&
        Array.from({ length: 2 }).map((_, i) => (
          <ImageSkeleton key={i} />
        ))}

      {images.map((img) => (
        <ImageCard key={img.id} image={img} />
      ))}
    </div>
  )
}