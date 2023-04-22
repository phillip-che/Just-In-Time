import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './routes/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Layout /> }>
        <Route index={true} element={<App />} />
      </Route>
  </Routes>
  </BrowserRouter>
)
