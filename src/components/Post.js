import React from "react";
import { useSelector } from "react-redux";
import { deletePost } from "../services/createPost.service";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Post = ({
  title,
  description,
  image,
  content,
  author,
  publishDate,
  published,
  id,
}) => {
  const isLoggedIn = useSelector((store) => store.users);

  const removePost = async (id) => {
    try {
      const del = await deletePost(id);
    } catch (err) {
      console.log(err);
    }
  };

  if (!published && !isLoggedIn.user.log) {
    return null;
  }
  return (
    <div className='flex flex-col w-96 border p-2 shadow-sm mx-5 mb-5 rounded-lg'>
      <img
        src={image}
        alt={image}
        className='w-full  border border-b-secondary'
      />
      <h3 className='text-2xl text-center pt-3'>
        {title?.substring(0, 60)}
        {title?.length > 60 && "..."}
      </h3>
      <p className='text-sm text-center py-3'>
        {description?.substring(0, 150)}....
      </p>
      <div className='flex flex-wrap justify-between pb-2'>
        <p className='text-sm font-poppins text-right text-slate-500'>
          {publishDate.slice(0, 10)}
        </p>
        <p className=' text-sm font-poppins text-right text-slate-500'>
          {author}
        </p>
      </div>

      <Link
        to={"/" + id}
        className='bg-third p-3 text-lg text-center font-bold'
      >
        <button className='font-poppins'>Read More</button>
      </Link>
      {isLoggedIn?.user?.userData?.access === "admin" ||
        (isLoggedIn?.user?.userData?.access === "editor" && (
          <div className='flex justify-between'>
            <Link to={"edit/" + id}>
              <p className='cursor-pointer pt-1'>Edit</p>
            </Link>
            <p className='cursor-pointer pt-1' onClick={() => removePost(id)}>
              Delete
            </p>
          </div>
        ))}
      {!published && (
        <p className='text-center text-sm bg-fourth absolute p-2 rounded-e-full'>
          Draft
        </p>
      )}
    </div>
  );
};

export default Post;
