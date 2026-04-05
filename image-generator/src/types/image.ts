export interface GeneratedImage {
  id: string
  url: string
  prompt: string
  createdAt: number
}

export interface GenerateImageRequest {
  prompt: string
}

export interface GenerateImageResponse {
  url: string
}