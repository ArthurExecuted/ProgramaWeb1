import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import LogIn from './Pages/logInRegister.jsx'
import Cookie from './Pages/CookieSite.jsx'

import '../src/main.css'
import ProtectedRoutes from './ProtectedRoutes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<LogIn />}/>
          <Route element={<ProtectedRoutes/>}>
          <Route path='/Cookie' element={<Cookie />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
