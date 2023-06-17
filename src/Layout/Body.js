import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { fetchApiThunk } from "../utils/store/blogSlice";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiThunk());
  }, []);
  return (
    <>
      <Header />
      <div className='flex items-center h-5/6 max-h-fit w-full my-6'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Body;
