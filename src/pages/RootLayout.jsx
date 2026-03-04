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