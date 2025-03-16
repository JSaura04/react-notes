import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ColorPicker from './pages/ColoPicker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <userGreeting isLoggedIn={true} username= {"Joan"}/>

  </StrictMode>,
)
