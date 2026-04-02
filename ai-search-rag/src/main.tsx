import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RAGSearch from './RAGSearch'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RAGSearch />
  </StrictMode>,
)
