import React, { use, useState } from 'react';
import { AuthContext } from '../../ContextProvider/Context/AuthContext';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Register = () => {
  const { createUserEmailPass, handleUpdateProfile } = use(AuthContext);
  const [ toggleEye, setToggleEye ] = useState(false);
  const navigate = useNavigate();

  const handleCreateUser = (event)=>{
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    const validate = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if(!validate.test(userData.password)){
      Swal.fire({
        title: "Password must contain one uppercase, one lowercase letters, and be at least 6 characters long",
        icon: "error",
      })
      return
    }

    createUserEmailPass(userData.email, userData.password)
      .then(() => {
        handleUpdateProfile({
          displayName: userData.name,
          photoURL: userData.imageUrl,
        })
          .then(() => {
            Swal.fire({
              title: "Account Created Successfully",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="min-h-screen pb-20 lg:px-0 px-3">
      <h2 className="text-center text-3xl mb-7 mt-10 font-semibold text-greenPrimary dark:text-lightGreen">
        New to here?
      </h2>
      <div className="xl:w-[68rem] lg:w-[63rem] mx-auto flex items-center bg-white dark:glass rounded-2xl">
        <img
          className="xl:w-2xl lg:w-[31rem] hidden lg:block h-[800px] rounded-l-2xl"
          src="https://images.unsplash.com/photo-1585664428450-1665a336eb19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="plant"
        />
        <form onSubmit={handleCreateUser} className="w-full p-10">
          <h3 className="text-center text-2xl mb-20 font-semibold text-greenPrimary dark:text-lightGreen">
            Register
          </h3>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg dark:text-lightGreen">
              Your Name
            </legend>
            <input
              type="text"
              name="name"
              className="input w-full dark:focus:outline-lightGreen dark:focus:border-lightGreen dark:glass dark:placeholder:text-lightGreen"
              placeholder="Type here"
              required
            />
            <p className="label"></p>
          </fieldset>
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
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg dark:text-lightGreen">
              Image Url
            </legend>
            <input
              type="url"
              name="imageUrl"
              className="input w-full dark:focus:outline-lightGreen dark:focus:border-lightGreen dark:glass dark:placeholder:text-lightGreen"
              placeholder="Image url"
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
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-greenPrimary font-semibold dark:text-lightGreen"
            >
              Login
            </Link>
          </p>
          <div className="flex items-center justify-center mt-5">
            <button
              type="submit"
              className="py-2 px-6 outline-2 font-semibold outline-greenPrimary text-greenPrimary hover:bg-greenPrimary hover:text-lightGreen transition-colors rounded-lg text-center dark:outline-lightGreen hover:dark:bg-lightGreen hover:dark:text-greenPrimary dark:text-lightGreen cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;