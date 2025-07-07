import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route } from 'react-router'
import UserLogin from './components/User/UserLogin.jsx'
import Layout from './components/Layout.jsx'
import { Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}/>
        // WITHOUT TOKEN
          <Route path="/login" element={<UserLogin/>}/>
      </Routes>
      <Routes>
        // WITH TOKEN
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
