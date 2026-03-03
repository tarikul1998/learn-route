import { NavLink } from "react-router";

const Nav = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/team">Team</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

// Navbar ekta shared layout, Jeita sob page e dekhaite hobe
// So ei layout ta share korar jonno Outlet diye
// Tokhon Home,About,Team page er moddhe Navbar alada kore call kora lagbe nah
