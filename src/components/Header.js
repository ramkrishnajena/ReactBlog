import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { signOutUser } from "../utils/store/userSlice";
import MobileMenu from "./MobileMenu";
import { menuState } from "../utils/store/blogSlice";
import menuOpen from "../assets/menu_open.svg";
import logo from "../assets/logo.png";

const Header = () => {
  const [login, setLogin] = useState(false);
  const subscribe = useSelector((state) => state.users.user);
  const menu = useSelector((store) => store.blogs.menu);
  console.log(menu);
  const dispatch = useDispatch();

  const handleLogout = () => {
    setLogin(false);
    dispatch(signOutUser());
  };
  useEffect(() => {
    subscribe?.userData?.name && setLogin(true);
  }, [subscribe]);
  return (
    <div className='flex items-center justify-between flex-wrap px-10 py-5 bg-primary text-white  sm:justify-between lg:justify-between '>
      <Link to='/'>
        <img src={logo} alt='logo' className='w-52' />
      </Link>
      <nav className='flex flex-wrap sm:justify-center items-center min-[320px]:hidden max-[720px]:hidden min-[721px]:flex'>
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

      <div className='flex flex-row min-[721px]:hidden'>
        <img
          src={menuOpen}
          alt='menu'
          onClick={() => dispatch(menuState(true))}
        />
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
