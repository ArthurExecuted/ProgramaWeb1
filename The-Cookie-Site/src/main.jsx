import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import LogIn from './Pages/logInRegister.jsx'
import Cookie from './Pages/CookieSite.jsx'

import '../src/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<LogIn />}/>
          <Route path='/Cookie' element={<Cookie />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
