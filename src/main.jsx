import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/Home.jsx'
import './index.css'
// import '../cleverChat.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  
  <React.StrictMode>
    <BrowserRouter>
    <Index />
    </BrowserRouter>
  </React.StrictMode>,
)
