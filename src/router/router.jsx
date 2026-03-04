import { createBrowserRouter } from "react-router";
import About from "../pages/About";
import Team from "../pages/Team";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import PostList from "../pages/PostList";
import PostDetails from "../pages/PostDetails";

export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "/", index: true, element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/team", element: <Team /> },
            { path: '/post-list', element: <PostList /> },
            { path: '/posts/:postId', element: <PostDetails /> }
        ]
    },
]);


