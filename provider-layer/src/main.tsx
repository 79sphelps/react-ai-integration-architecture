import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { initAI } from './ai/init'
import { AIPlayground } from './components/AIPlayground.tsx'

initAI()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AIPlayground />
  </StrictMode>,
)
