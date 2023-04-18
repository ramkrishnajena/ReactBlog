import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const blogs = useSelector((store) => store.blogs.posts);
  const param = useParams();
  const post = blogs.filter((data) => data.id === param.id);
  return (
    <>
      {post.map((data) => (
        <div
          key={data.id}
          className='w-full flex justify-center items-center flex-col px-5'
        >
          <h2 className='text-2xl pb-5 font-bold font-roboto'>{data.title}</h2>
          <img src={data.image} alt={data.title} className='w-2/3' />
          <p className='lg:w-2/3 pt-5'>{data.content}</p>
        </div>
      ))}
    </>
  );
};

export default SinglePost;
