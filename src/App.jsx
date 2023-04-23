import { useState } from 'react'
import StoreList from './components/StoreList'
import './App.css'

function App() {

  return (
      <div className="home-page">
        <div className="mission-statement"> 
            <h1 className="ms-body"> SUBSTAINABLE. <br/> AFFORDABLE. <br/> RELIABLE. <br/> </h1>
        </div>
        <div className="title-stores">
          <h2> Our Stores </h2>
        </div>
        <div className="store-list">
          <StoreList/>
        </div>
          <div className="footer">
          </div>
      </div>
  )
}

export default App
