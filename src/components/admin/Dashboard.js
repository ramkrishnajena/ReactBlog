import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate, Link } from "react-router-dom";

const Dashboard = () => {
  const selector = useSelector((store) => store.users);
  const loginStatus = selector.user.log;

  if (!loginStatus) {
    return <Navigate to='/' replace={true} />;
  }
  return (
    <div className='flex flex-wrap w-full'>
      <Link
        to='edit'
        className='bg-primary h-10 flex items-center p-3 rounded-r-full text-white font-roboto'
      >
        Add
      </Link>
      <Outlet />
    </div>
  );
};

export default Dashboard;
