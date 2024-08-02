import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/">Home page</Link>
                </li>
                <li>
                    <Link to="/about">About page</Link>
                </li>
                <li>
                    <Link to="/contact">Contact page</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
