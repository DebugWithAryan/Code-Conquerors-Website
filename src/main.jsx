import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// Console message for developer credit
console.log(
  '%c╔═══════════════════════════════════════╗\n║  Website Developed by Shashank Dev  ║\n╚═══════════════════════════════════════╝',
  'color: #2FF7ED; font-family: "Mazius", serif; font-style: italic; font-size: 14px; font-weight: bold; line-height: 1.2;'
);
console.log(
  '%cBuilt with React | GSAP | Tailwind CSS',
  'color: #2FF7ED; font-family: "Mazius", serif; font-style: italic; font-size: 11px;'
);

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
)
