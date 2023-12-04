import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import * as Everything  from 'react-router-dom'
import { BrowserRouter}  from 'react-router-dom'

console.log(BrowserRouter)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
