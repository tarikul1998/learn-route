import { Outlet } from "react-router";
import Nav from "../components/Nav";

const RootLayout = () => {
    return (
        <>
            <div id="sidebar">
                <Nav />
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
};

export default RootLayout;


// RootLayout er ki aage theke jana sombhob User kon path e ase ?
// Mane ei Layout (Nav) sharing badeo, Kokhon take Home/about dekhaite hobe, Inside this component
// Tai React er special component Outlet use korbo

// Outlet is a placeholder component (parameter)

// function add(a, b) {
//     return a + b;
// }

// add(10, 20);
// add(30, 50);

