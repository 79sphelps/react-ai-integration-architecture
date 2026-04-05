import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CopilotPanel } from './components/CopilotPanel'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CopilotPanel />
  </StrictMode>,
)
