import { useState } from 'react'
import StoreList from './components/StoreList'
import './App.css'

function App() {

  return (
    <>
      <div className="home-page">
        <div className="mission-statement"> 
            <h1 className="ms-title"> THREE WORDS.</h1>
            <h2 className="ms-body"> AFFORDABLE. SUBSTAINABLE. RELIABLE. </h2>
        </div>
        <div className="store-list">
          <StoreList/>
        </div>
          <div className="footer">
          </div>
      </div>
    </>
  )
}

export default App
