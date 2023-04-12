import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import PostContainer from "./PostContainer";
import "../utils/firebase-config.js";
import { useSelector } from "react-redux";

const Body = () => {
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
