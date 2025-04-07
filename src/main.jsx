import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './Counter.jsx'

createRoot(document.getElementById('Counter')).render(
  <StrictMode>
    <Counter />
  </StrictMode>,
)