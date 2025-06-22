import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/Layout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import AdminLayout from './components/admin/Admin-Layout'
import Dashboard from './pages/admin/Dashboard'
import Features from './pages/admin/Features'
import Orders from './pages/admin/Orders'
import Products from './pages/admin/Products'
import ShopLayout from './components/shop/Shop-Layout'
import NoFound from './components/shop/NoFound'
import Home from './pages/shop/Home'
import Account from './pages/shop/Account'
import Checkout from './pages/shop/Checkout'
import Listings from './pages/shop/Listings'

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>

        <Route path='/auth' element={<AuthLayout></AuthLayout>}>
        <Route path='login' element={<Login></Login>} />
        <Route path='register' element={<Register></Register>} />
        </Route>
        
        <Route path='/admin' element={<AdminLayout></AdminLayout>}>
        <Route path='dashboard' element={<Dashboard></Dashboard>} />
        <Route path='features' element={<Features></Features>} />
        <Route path='orders' element={<Orders></Orders>} />
        <Route path='products' element={<Products></Products>} />
        </Route>

        <Route path='/shop' element={<ShopLayout></ShopLayout>}>
        <Route path='home' element={<Home></Home>} />
        <Route path='account' element={<Account></Account>} />
        <Route path='checkout' element={<Checkout></Checkout>} />
        <Route path='listing' element={<Listings></Listings>} />
        </Route>
        <Route path='*' element={<NoFound></NoFound>}></Route>

      </Routes>
    </div>
  )
}

export default App
