import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormAssistant from "./FormAssistant";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormAssistant />
  </StrictMode>,
)
