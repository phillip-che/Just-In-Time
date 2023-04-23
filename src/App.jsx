import StoreList from './components/StoreList'
import { BsChevronDoubleDown } from 'react-icons/bs'
import './App.css'

function App() {

  return (
    <div className="home-page">
      <div className="mission-statement">
        <h1 className="ms-body"> SUSTAINABLE. <br /> AFFORDABLE. <br /> RELIABLE. <br /> </h1>
      </div>
      <div className="title-stores">
        <h2 id="our-stores"> Our Stores </h2>
        <a href='#our-stores' className="smooth">
          <button className="scroll-button"> {<BsChevronDoubleDown />} </button>
        </a>
      </div>
      <div className="store-list">
        <StoreList />
      </div>
      <div className="footer">
      </div>
    </div>
  )
}

export default App
