import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrprPage from "./Components/ErrorPage/ErrprPage";
import Home from "./Pages/Home";
import Orders from "./Pages/Orders";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import About from "./Pages/About";


const Route = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrprPage></ErrprPage>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/orders',
                element: <Orders></Orders>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default Route;