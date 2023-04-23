import { Link } from "react-router-dom"
import { supabase } from "../client.js";
import logo from '../assets/JIT_long_logo.png'
import '../styles/NavBar.css'
import { useState, useEffect } from "react";
import ShoppingCartIcon from './ShoppingCartIcon'

const NavBar = () => {

  let [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setLoggedIn(true);
      }
    })
  }, []);


  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to='/'>
          <div className="island">
            <img className="nav-bar-logo" src={logo} alt="Just in time logo" />
          </div>
        </Link>
        <div class="navbar-buttons">
          {!loggedIn ? (<Link to='/login'>
            <div className="btn-login">
              Login
            </div>
          </Link>
          ) : <Link to="/profile">
            <div className="btn-login">
              Profile
            </div>
          </Link>}
          <Link to='/cart'>
            <ShoppingCartIcon/>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;