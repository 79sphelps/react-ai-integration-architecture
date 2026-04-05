import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { GeneratedImage } from '../types/image'

interface ImageState {
  images: GeneratedImage[]
  addImage: (img: GeneratedImage) => void
  clear: () => void
}

export const useImageStore = create<ImageState>()(
  persist(
    (set) => ({
      images: [],
      addImage: (img) =>
        set((s) => ({ images: [img, ...s.images] })),
      clear: () => set({ images: [] }),
    }),
    { name: 'image-store' }
  )
)