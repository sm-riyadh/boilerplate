import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Scaffold from "./pages/Scaffold.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Scaffold />
  </StrictMode>,
)
