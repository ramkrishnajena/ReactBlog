import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { signOutUser } from "../utils/store/userSlice";

const Header = () => {
  const [login, setLogin] = useState(false);
  const subscribe = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    setLogin(false);
    dispatch(signOutUser());
  };
  useEffect(() => {
    subscribe?.userData?.name && setLogin(true);
  }, [subscribe]);
  return (
    <div className='flex items-center justify-between flex-wrap px-10 py-5 bg-primary text-white sm:justify-center lg:justify-between'>
      <div className='text-2xl font-roboto font-bold tracking-wide sm:text-xl sm:pb-2'>
        Ramkrishna Jena
      </div>
      <nav className='flex flex-wrap sm:justify-center items-center'>
        <ul className='flex gap-4 items-center font-poppins font-semibold uppercase'>
          <Link to='/'>
            <li className='cursor-pointer hover:border-b-2 border-b-third'>
              Home
            </li>
          </Link>
          <Link to='/blog'>
            <li className='cursor-pointer hover:border-b-2 border-b-third'>
              Blog
            </li>
          </Link>
        </ul>
        <div className=' flex items-center lg:ml-5 sm:ml-0 sm:mt-2 lg:mt-0'>
          {!login ? (
            <Link to='login'>
              <button className='border rounded-l-lg py-1 px-4 font-medium (hover:bg-secondary font-white) '>
                Login
              </button>
            </Link>
          ) : (
            <Link to='admin'>
              <button className='border rounded-l-lg py-1 px-4 font-medium hover:bg-secondary font-white'>
                Dashboard
              </button>
            </Link>
          )}
          {!login ? (
            <Link to='signup'>
              <button className=' border rounded-r-lg py-1 px-4 font-medium hover:bg-secondary font-white'>
                Signup
              </button>
            </Link>
          ) : (
            <Link to='login'>
              <button
                className=' border rounded-r-lg py-1 px-4 font-medium hover:bg-secondary font-white'
                onClick={handleLogout}
              >
                Logout
              </button>
            </Link>
          )}

          {login && (
            <p className='px-4 py-2 ml-5 border rounded-full'>
              {subscribe?.userData?.name.slice(0, 1)}
            </p>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
