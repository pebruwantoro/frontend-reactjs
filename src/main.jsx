import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route } from 'react-router'
import UserLogin from './components/User/UserLogin.jsx'
import Layout from './components/Layout.jsx'
import { Routes } from 'react-router'
import UserNewAccount from './components/User/UserSellerRegister.jsx'
import UserBuyerRegister from './components/User/UserBuyerRegister.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}/>
        // WITHOUT TOKEN
          <Route path="" element={<UserBuyerRegister/>}/>
          <Route path="/login" element={<UserLogin/>}/>
      
        // WITH TOKEN
        <Route path="users">
          <Route path="seller" element={<UserNewAccount/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
