import NavBar from '../components/NavBar.jsx'
import {Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <nav>
            <NavBar /> 
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout