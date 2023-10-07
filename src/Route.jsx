import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrprPage from "./Components/ErrorPage/ErrprPage";
import Home from "./Pages/Home";
import Orders from "./Pages/Booking";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import About from "./Pages/About";
import EventDetails from "./Pages/EventDetails";
import Booking from "./Pages/Booking";
import PrivetRouter from "./Provider/PrivetRouter";


const Route = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrprPage></ErrprPage>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('/events.json')
            },
            {
                path:'/booking',
                element: <PrivetRouter><Booking></Booking></PrivetRouter>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<PrivetRouter><Contact></Contact></PrivetRouter>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/event-details/:id',
                element:<PrivetRouter><EventDetails></EventDetails></PrivetRouter>,
                loader: () => fetch('/events.json')
            }
        ]
    }
])

export default Route;