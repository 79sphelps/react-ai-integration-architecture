import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ImageGeneratorPanel } from './components/ImageGeneratorPanel'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ImageGeneratorPanel />
  </StrictMode>,
)
