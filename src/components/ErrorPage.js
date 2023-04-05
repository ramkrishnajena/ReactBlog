import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { status, statusText } = useRouteError();

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <div className='w-1/3 h-60 shadow-xl rounded-lg border-2 border-primary flex flex-col items-center justify-center'>
        <p className='text-6xl text-secondary text-bold'>{status}</p>
        <p className='text-3xl pt-2 font-poppins text-bold text'>
          {statusText}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
