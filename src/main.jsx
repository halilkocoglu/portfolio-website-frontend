import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ScrollProvider } from './Contexts/scrollContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <BrowserRouter>
      <ScrollProvider>
          <App />
      </ScrollProvider>
    </BrowserRouter>
  </React.Fragment>,
)
