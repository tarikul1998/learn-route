import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

// Navbar.jsx is a shared layout, Sob page e dekhaite hobe
// So ei layout ta share korar jonno ekta process lagbe
// Outlet Process
// Finally Home and About page er moddhe Navbar alada kore call kora lagche nah
// layout niye vaba lagche nah








































