import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Hook/AuthProvider";

const SignUp = () => {
    const { signUp } = useContext(AuthContext);
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            setError("Password should be 8 characters, at least one letter & number");
        } else {
            setError("");
            if (email, password) {
                signUp(email, password).then((result) => {
                    console.log(result.user);
                }).catch((error) => {
                    console.error(error);
                });
            }
        }
    };

    return (
        <div className="bg-[#EEFFEF] w-full md:w-3/4 lg:w-1/3 mx-auto p-10 mt-10">
            <h1 className="text-3xl font-extrabold mb-5">Create New Account</h1>
            <form >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" name="password" className="input input-bordered" required />
                </div>
                <p className="text-red-500">{error}</p>
                <div onClick={handleRegister} className="form-control mt-6">
                    <button type="submit" className="py-2 rounded-md bg-[#A1400B] text-white">Sign Up</button>
                </div>
            </form>
            <p className="text-xl mt-10">Already have an account? <NavLink to={"/sign-in"}><span className="text-[#A1400B] font-extrabold">Sign In here</span></NavLink></p>
        </div>
    );
};

export default SignUp;
