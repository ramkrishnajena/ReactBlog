import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PostContainer from "./PostContainer";
import "../utils/firebase-config.js";
import { useSelector } from "react-redux";

const Body = () => {
  console.log(process);
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
