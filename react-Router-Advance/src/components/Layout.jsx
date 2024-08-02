// components/Layout.jsx 
import Header from "./Header"
import Footer from "./Footer"
import {Outlet} from 'react-router-dom';
const Layout = () =>{
    return(
        <>
            <Header />
            <Outlet />                {/* it will change the component on user request  */}
            <Footer />
        </>
    )
}
export default Layout