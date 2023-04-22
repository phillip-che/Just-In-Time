import { useState } from 'react'
import StoreList from './components/StoreList'
import './App.css'

function App() {

  return (
    <>
      <div className="home-page">
          <StoreList/>
          <div className="mission-statement"> 
            <h1> Mission Statement </h1>
            <p> bullshit</p>
          </div>
          <div className="footer">
          </div>
      </div>
    </>
  )
}

export default App
