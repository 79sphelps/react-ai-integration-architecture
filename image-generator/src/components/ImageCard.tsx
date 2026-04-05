import type { GeneratedImage } from '../types/image'
import { ImageActions } from './ImageActions'

export function ImageCard({ image }: { image: GeneratedImage }) {
  return (
    <div className="rounded shadow group overflow-hidden">
      <img
        src={image.url}
        alt={image.prompt}
        className="w-full h-40 object-cover"
      />
      <div className="p-2">
        <div className="text-xs text-gray-600 truncate">
          {image.prompt}
        </div>
        <ImageActions url={image.url} prompt={image.prompt} />
      </div>
    </div>
  )
}