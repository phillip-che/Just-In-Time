import {Link} from "react-router-dom"
import logo from '../assets/JIT_long_logo.png'
import '../styles/NavBar.css'
import {HiShoppingCart} from 'react-icons/hi'

const NavBar = () => {
    return (
    <nav className="navbar">
    <div className="navbar-container">
      <Link to='/'>
        <div className="island">
            <img className="nav-bar-logo" src={logo} alt="Just in time logo"/>
        </div>
      </Link>
      <div class="navbar-buttons">
      <Link to='/cart'>
        <div className="btn-cart">
            <HiShoppingCart/> CART
        </div>
      </Link>
      <Link to='/login'>
        <div className="btn-login">
            LOGIN
        </div>
      </Link>
      </div>
    </div>
  </nav>
    )
}

export default NavBar;