import NavBar from '../components/NavBar.jsx'
import {Outlet} from "react-router-dom"
import NavBar from "../components/NavBar"

const Layout = () => {
    return (
        <div>
            <nav>
<<<<<<< HEAD
            <NavBar /> 
=======
                <NavBar />
>>>>>>> 618c12b2180b4ad29a675b8c8b12e761e71f2d46
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout