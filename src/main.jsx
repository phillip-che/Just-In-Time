import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './routes/Layout'
import LoginPage from './routes/LoginPage'
import CartPage from './routes/CartPage'
import ProfilePage from './routes/ProfilePage'
import ProductPage from './routes/ProductPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Layout /> }>
        <Route index={true} element={<App />} />
        <Route path="/login" element={<LoginPage /> } />
        <Route path="/profile" element={<ProfilePage /> } />
        <Route path="/cart" element={<CartPage /> } />
        <Route path="/product/:productID" element={<ProductPage />} />
        <Route path="/:storeName/products" element={<ItemList />} />
      </Route>
  </Routes>
  </BrowserRouter>
)
