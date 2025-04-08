import './global.css'

import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

import { Router } from './Router'

export function App() {
  return (
    <BrowserRouter>
      <Toaster richColors />
      <Router />
    </BrowserRouter>
  )
}
