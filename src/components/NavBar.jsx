import {Link} from "react-router-dom"
import logo from '../assets/JIT_long_logo.png'
import SearchBar from './SearchBar'
import '../styles/NavBar.css'

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="hamburger">
                {/* <img/> */}
            </div>
            <div className="island">
                <Link to="/">
                    <img className="nav-bar-logo" src={logo} alt="Just in time logo"/>
                </Link>
            </div>
            <SearchBar/>
        </div>  
    )
}

export default NavBar;