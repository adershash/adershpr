import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ScrollProvider } from './components/Scrollcomponent/ScrollProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScrollProvider>
    <App />
    </ScrollProvider>
  </StrictMode>,
)
