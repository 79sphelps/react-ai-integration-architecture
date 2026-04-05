import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GeneratorPanel } from './components/GeneratorPanel'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GeneratorPanel />
  </StrictMode>,
)
