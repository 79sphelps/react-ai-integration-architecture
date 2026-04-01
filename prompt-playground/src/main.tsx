import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PromptPlayground from './PromptPlayground'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PromptPlayground />
  </StrictMode>,
)
