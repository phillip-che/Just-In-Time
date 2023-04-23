import NavBar from '../components/NavBar.jsx'
import {Outlet} from "react-router-dom"
import StickyFooter from '../components/footer'


const Layout = () => {
    return (
        <div>
            <nav>
                <NavBar />
            </nav>
                <Outlet />
                <StickyFooter/>
        </div>
    )
}

export default Layout