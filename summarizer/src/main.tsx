import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Summarizer from './Summarizer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Summarizer />
  </StrictMode>,
)
