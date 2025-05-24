import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../ContextProvider/Context/AuthContext';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';
const Login = () => {
  const { loginEmailPassword, loginWithGoogle } = use(AuthContext);
  const [ toggleEye, setToggleEye ] = useState(false);
  const navigate = useNavigate();


  const handleEmailPassLogin = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginEmailPassword(email, password)
      .then(() =>{
        Swal.fire({
          title: "Login successful",
          icon: "success"
        })
        navigate("/")
      }).catch(err =>
      {
        Swal.fire({
          title: err.message,
          icon: "error"
        })
      })
  }

  const handleGoogleLogin = (event)=>{
    event.preventDefault();
    loginWithGoogle()
      .then(() =>{
        Swal.fire({
          title: "Login successful",
          icon: "success",
        });
        navigate("/")
      }).catch(err => console.log(err));
  }
  return (
    <div className="min-h-screen pb-20 lg:px-0 px-3">
      <h2 className="text-center text-3xl mb-7 mt-10 font-semibold text-greenPrimary dark:text-lightGreen">
        Welcome back here
      </h2>
      <div className="xl:w-[68rem] lg:w-[63rem] mx-auto flex items-center bg-white dark:glass rounded-2xl">
        <img
          className="xl:w-[35rem] lg:w-[31rem] hidden lg:block h-[800px] rounded-l-2xl object-cover"
          src="https://images.unsplash.com/photo-1551999158-75d41e4860a5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="plant"
        />
        <form onSubmit={handleEmailPassLogin} className="w-full p-10">
          <h3 className="text-center text-2xl mb-20 font-semibold text-greenPrimary dark:text-lightGreen">
            Log in
          </h3>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg dark:text-lightGreen">
              Your Email
            </legend>
            <input
              type="email"
              name="email"
              className="input w-full dark:focus:outline-lightGreen dark:focus:border-lightGreen dark:glass dark:placeholder:text-lightGreen"
              placeholder="Type here"
              required
            />
            <p className="label"></p>
          </fieldset>

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend text-lg dark:text-lightGreen">
              Your Password
            </legend>
            <input
              type={toggleEye ? "text" : "password"}
              name="password"
              className="input w-full dark:focus:outline-lightGreen dark:focus:border-lightGreen dark:glass dark:placeholder:text-lightGreen"
              placeholder="Type here"
              required
            />
            <div
              className="absolute right-2.5 top-3.5 cursor-pointer dark:text-lightGreen z-50"
              onClick={() => setToggleEye(!toggleEye)}
            >
              {toggleEye ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
            <p className="label"></p>
          </fieldset>
          <p className="text-greenSecondary dark:text-lightGreen">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-greenPrimary font-semibold dark:text-lightGreen"
            >
              Register
            </Link>
          </p>
          <div className="flex items-center justify-center mt-5">
            <button
              type="submit"
              className="py-2 px-6 w-full outline-2 font-semibold outline-greenPrimary text-greenPrimary hover:bg-greenPrimary hover:text-lightGreen transition-colors rounded-lg text-center dark:outline-lightGreen hover:dark:bg-lightGreen hover:dark:text-greenPrimary dark:text-lightGreen cursor-pointer"
            >
              Submit
            </button>
          </div>
          <p className="text-center my-5 text-greenSecondary dark:text-lightGreen">
            or sign in with
          </p>
          <div className="flex items-center justify-center mt-5">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center w-full gap-2 py-2 px-6 outline-2 font-semibold outline-greenPrimary text-greenPrimary hover:bg-greenPrimary hover:text-lightGreen transition-colors rounded-lg text-center dark:outline-lightGreen hover:dark:bg-lightGreen hover:dark:text-greenPrimary dark:text-lightGreen cursor-pointer"
            >
              <FaGoogle />
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;