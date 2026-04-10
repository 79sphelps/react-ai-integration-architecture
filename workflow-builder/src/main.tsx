import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { WorkflowBuilder } from './workflow/ui/WorkflowBuilder.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WorkflowBuilder />
  </StrictMode>,
)
