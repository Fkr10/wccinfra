import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Vendor initialization: import and bundle legacy vendor scripts via ESM so Vite doesn't warn
import './vendor-init';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
