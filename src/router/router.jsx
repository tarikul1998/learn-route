import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../pages/RootLayout";
import About from "../pages/About";
import Team from "../pages/Team";

export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "team", element: <Team /> },
        ]
    },
]);