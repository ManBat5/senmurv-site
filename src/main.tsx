import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SenmurvLaunch from './SenmurvLaunch'

const container = document.getElementById('root')!
createRoot(container).render(
  <React.StrictMode>
    <SenmurvLaunch />
  </React.StrictMode>
)
