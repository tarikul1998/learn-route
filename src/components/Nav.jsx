import { NavLink } from "react-router";

const Nav = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/team">Team</NavLink>
                </li>
                <li>
                    <NavLink to="/post-list">PostList</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

