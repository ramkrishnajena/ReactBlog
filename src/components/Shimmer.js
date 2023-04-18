import React from "react";

const Shimmer = () => {
  return (
    <div className='flex flex-col items-center lg:w-3/12 sm:w-full border p-2 shadow-sm mx-5 rounded-lg animate-pulse m-5'>
      <p className='w-full h-60 bg-slate-200 rounded'></p>
      <h3 className='w-full h-8 my-5 bg-slate-200 rounded'></h3>
      <p className='w-full h-5 bg-slate-200 rounded mb-4'></p>
      <button className='bg-slate-200 w-full h-1/5'></button>
    </div>
  );
};

export default Shimmer;
