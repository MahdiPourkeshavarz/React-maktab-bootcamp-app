import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { AppRout } from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRout />
  </StrictMode>,
)
