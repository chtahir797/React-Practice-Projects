// components/Header.jsx 
import { Link, NavLink } from "react-router-dom"
import '../index.css'
const Header = () => {
    return (
      <nav>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
        <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
      </nav>
    );
  }
  
  export default Header;