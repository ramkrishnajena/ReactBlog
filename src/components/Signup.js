import React, { useEffect, useState } from "react";
import { addUser, allUsers } from "../services/createUser.service";
import { checkUniqueEmail } from "../utils/utils";
import { Navigate, Link } from "react-router-dom";

const Signup = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    access: "visitor",
  });
  const [errMsg, setErrMsg] = useState("");
  const [users, setUsers] = useState([]);
  const [signUp, setSignUp] = useState(false);
  const checkEmail = checkUniqueEmail(users, signUpDetails);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(signUpDetails);
    setSignUpDetails((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const getAllUsers = async () => {
    const data = await allUsers();
    setUsers(data.map((user) => user.data()));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await addUser(signUpDetails);
      setSignUp(true);
      console.log(signUpDetails);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  useEffect(() => {
    checkEmail ? setErrMsg("Email Already Used") : setErrMsg("");
  }, [signUpDetails.email]);

  if (signUp) {
    return <Navigate to='/login' replace={true} />;
  }

  return (
    <div className='w-full h-96 flex flex-col items-center justify-center'>
      <div className='sm:w-4/5 lg:w-1/3 flex flex-col items-center bg-white shadow-md py-10'>
        <h2 className='font-poppins text-2xl'>Sign Up</h2>
        <form
          className='w-1/2 flex flex-col items-center'
          onSubmit={submitForm}
        >
          <input
            type='text'
            name='name'
            placeholder='Name'
            required={true}
            value={signUpDetails.name}
            onChange={handleChange}
            className='w-4/5 h-8 my-2 bg-transparent text-sm pl-2 border border-slate-300 rounded-md focus:outline-none focus:border-primary focus:border-2'
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={signUpDetails.email}
            onChange={handleChange}
            required={true}
            className='w-4/5 h-8 my-2 bg-transparent text-sm pl-2 border border-slate-300 rounded-md focus:outline-none focus:border-primary focus:border-2 '
          />
          {errMsg}
          <input
            type='password'
            name='password'
            placeholder='password'
            value={signUpDetails.password}
            onChange={handleChange}
            required={true}
            className='w-4/5 h-8 my-2 bg-transparent text-sm pl-2 border border-slate-300 rounded-md focus:outline-none focus:border-primary focus:border-2 '
          />
          <select
            name='access'
            onChange={handleChange}
            value={signUpDetails.access}
          >
            <option value='visitor'>Visitor</option>
            <option value='editor'>Editor</option>
          </select>
          <button
            className={
              "w-40 h-10 mt-3 font-roboto text-white bg-primary border rounded-md " +
              (errMsg.length > 0 && "bg-red-500")
            }
            disabled={errMsg.length > 0 && true}
          >
            Sign up
          </button>
        </form>
      </div>
      <p className='font-sans mt-5'>
        If you Already have an Account?
        <Link to='/login' className=' pl-5 underline text-gray-700'>
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
