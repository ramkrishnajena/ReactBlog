import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import menuClose from "../assets/menu_close.svg";
import { menuState } from "../utils/store/blogSlice";
import { signOutUser } from "../utils/store/userSlice";

const MobileMenu = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(signOutUser());
  };

  return (
    store.blogs.menu && (
      <div className='flex justify-center text-center absolute pt-3 left-0 top-0 bg-white h-full w-screen text-black font-roboto z-10'>
        <img
          src={menuClose}
          alt='menu'
          className='absolute right-4 w-10'
          onClick={() => dispatch(menuState(false))}
        />
        <ul className='font-roboto text-xl font-bold uppercase pt-20'>
          <Link to='/'>
            <li
              className='pb-5 hover:underline'
              onClick={() => dispatch(menuState(false))}
            >
              Home
            </li>
          </Link>
          <Link to='/posts'>
            <li
              className='pb-5 hover:underline'
              onClick={() => dispatch(menuState(false))}
            >
              Blog
            </li>
          </Link>
          {store.users.user.log ? (
            <>
              <Link to='dashboard'>
                <li
                  className='hover:underline'
                  onClick={() => dispatch(menuState(false))}
                >
                  Dashboard
                </li>
              </Link>
              <Link to='login'>
                <button
                  className='hover:underline mt-5 uppercase'
                  onClick={() => {
                    dispatch(menuState(false));
                    handleLogout;
                  }}
                >
                  Logout
                </button>
              </Link>
            </>
          ) : (
            <Link to='login'>
              <li
                className='hover:underline'
                onClick={() => dispatch(menuState(false))}
              >
                Login
              </li>
            </Link>
          )}
        </ul>
      </div>
    )
  );
};

export default MobileMenu;
