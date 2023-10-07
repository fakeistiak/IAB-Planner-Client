import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ContactUs from "../pages/ContactUs/ContactUs";
import Team from "../pages/Team/Team";
import Register from "../pages/Register/Register";
import Demo from "../pages/Demo/Demo";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>,
            },
            {
                path: "/team",
                element: <Team></Team>,
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/demo",
                element: <Demo></Demo>
            }
        ]
    }
]);
export default router;