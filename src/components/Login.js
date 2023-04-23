import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { allUsers } from "../services/createUser.service";
import { loggedInUser } from "../utils/store/userSlice";
import { isValidDetails } from "../utils/utils";
import { Navigate, Link } from "react-router-dom";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const subscribe = useSelector((state) => state.users.user);
  const handleChange = (e) => {
    setUserDetails((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await allUsers();
      const user = isValidDetails(data, userDetails);
      dispatch(loggedInUser(user));
      setUser(subscribe);
    } catch (err) {
      console.log(err);
    }
  };

  if (user) {
    return <Navigate to='/admin' replace={true} />;
  }
  return (
    <div className='flex flex-col items-center justify-center w-screen'>
      <div className='flex justify-center items-center flex-col h-80 lg:w-2/5 sm:w-4/5 my-5 bg-white drop-shadow-xl'>
        <h2 className='font-poppins text-2xl'>Login</h2>
        <form
          className='flex flex-col items-center w-56'
          onSubmit={handleSubmit}
        >
          <input
            type='email'
            name='email'
            placeholder='Enter Your Registered Email id'
            className='w-full h-8 my-2 bg-transparent text-sm pl-2 border border-slate-300 rounded-md focus:outline-none '
            onChange={handleChange}
            value={userDetails.email}
          />
          <input
            type='password'
            name='password'
            placeholder='Enter Your Password'
            className='w-full h-8 my-2 bg-transparent pl-2  text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-sky-500 '
            onChange={handleChange}
            value={userDetails.password}
          />
          <button className='w-40 h-10 mt-3 font-roboto text-white bg-primary border rounded-md'>
            Login
          </button>
        </form>
      </div>
      <p className='font-sans mt-5'>
        Don't have an Account?
        <Link to='/signup' className=' pl-5 underline text-gray-700'>
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;
