import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const handleLogout = () => {
        logOut().then()

    }



    return (
        <div className="navbar bg-base-100 mt-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about-us">About Us</NavLink></li>
                        <li><NavLink to="/gallery">Gallery</NavLink></li>

                    </ul>
                </div>
                <a href="/"><img src="../logo.png" alt="" className="h-24" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about-us">About Us</NavLink></li>
                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <img src={user?.photoURL} alt="" />
                <p className="mr-1">{user?.email}</p>
                {user && <button onClick={handleLogout} className="bg-[#A0410C] rounded-md px-4 py-2 text-white mr-1">Sign Out</button>}
                {!user && <NavLink to="/sign-in"><button className="bg-[#A0410C] rounded-md px-4 py-2 text-white">Sign In</button></NavLink>}
            </div>
        </div>
    );
};

export default NavBar;