
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Component/Home/Home';
import AboutUs from '../Component/AboutUs';
import Gallery from '../Component/Gallery';
import SignIn from '../Component/SignIn';
import SignUp from '../Component/SignUp';


const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>,
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>
            },
            {
                path: "/sign-in",
                element: <SignIn></SignIn>
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>
            },
            
        ]
    }
])

export default route;