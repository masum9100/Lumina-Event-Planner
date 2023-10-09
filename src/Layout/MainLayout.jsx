import { Outlet } from "react-router-dom";
import NavBar from "../Component/Home/NavBar";
import Footer from "../Component/Home/Footer";
import { ToastContainer } from 'react-toastify';


const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto text-center items-center">
            <ToastContainer></ToastContainer>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;