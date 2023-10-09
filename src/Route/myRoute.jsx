
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Component/Home/Home';
import AboutUs from '../Component/AboutUs';
import Gallery from '../Component/Gallery';
import SignIn from '../Component/SignIn';
import SignUp from '../Component/SignUp';
import ServiceDetails from '../Component/ServiceDetails';
import PrivateRoute from '../Hook/PrivateRoute';


const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: "/about-us",
                element: <PrivateRoute>
                    <AboutUs></AboutUs>
                </PrivateRoute>,
            },
            {
                path: "/gallery",
                element: <PrivateRoute>
                    <Gallery></Gallery>
                </PrivateRoute>
            },
            {
                path: "/sign-in",
                element: <SignIn></SignIn>
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>
            },
            {
                path: "/:id",
                element: <PrivateRoute>
                    <ServiceDetails></ServiceDetails>
                </PrivateRoute>,
                loader: () => fetch('/data.json')
            },


        ]
    }
])

export default route;