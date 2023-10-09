import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ContactUs from "../pages/ContactUs/ContactUs";
import Team from "../pages/Team/Team";
import Register from "../pages/Register/Register";
import Demo from "../pages/Demo/Demo";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Home/Details/Details";
import ErrorPage from "../ErrorPage/ErrrorPage";
import Services from "../pages/Shared/Services/Services";





const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
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
                element: <PrivateRoute><Team></Team></PrivateRoute>,
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/demo",
                element: <PrivateRoute><Demo></Demo></PrivateRoute>,
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ()=>fetch("/services.json")
            },
           
           
        ]
    }
]);
export default router;