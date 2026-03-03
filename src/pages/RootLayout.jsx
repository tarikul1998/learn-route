import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
    return (
        <>
            <div id="sidebar">
                <Navbar />
            </div>
            <div id="detail">
                <Outlet />
                {/* <Home /> */}
                {/* <About /> */}
            </div>
        </>
    );
};

export default RootLayout;

/*
Outlet is a placeholder in React

function add(a, b) {
    return a + b;
}

add(10, 20);
add(30, 50);
*/