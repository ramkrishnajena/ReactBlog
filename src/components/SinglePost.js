import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const blogs = useSelector((store) => store.blogs.posts);
  const param = useParams();

  const post = blogs.filter((data) => data.id === param.id);
  return (
    <>
      {post.map((data) => (
        <div className='w-full flex justify-center items-center flex-col'>
          <h2 className='text-xl font-bold font-roboto'>{data.title}</h2>
          <img src={data.image} alt={data.title} className='w-2/3' />
          <p className='lg:w-2/3'>{data.content}</p>
          <p>{typeof data.content}</p>
        </div>
      ))}
    </>
  );
};

export default SinglePost;
