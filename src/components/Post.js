import React from "react";
import { useSelector } from "react-redux";
import { deletePost } from "../services/createPost.service";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import rightArrow from "../assets/right_arrow.svg";

const Post = ({
  title,
  description,
  image,
  author,
  publishDate,
  published,
  id,
}) => {
  const isLoggedIn = useSelector((store) => store.users);
  const accessLevel = isLoggedIn?.user?.userData;
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
    <div className='flex flex-col border p-2 shadow-lg mx-5 mb-5 rounded-lg sm:w-74 sm:min-h-96  lg:h-3/3 lg:w-96'>
      <img
        src={image}
        alt={image}
        className='w-full h-2/5 border border-b-secondary rounded-lg cursor-pointer transition hover:scale-110  hover:delay-200'
      />
      <Link to={"/" + id}>
        <h3 className='h-2/5 text-2xl text-center pt-3 font-lato hover:underline cursor-pointer transition'>
          {title?.substring(0, 60)}
          {title?.length > 60 && "..."}
        </h3>
      </Link>
      <p className='h-2/5 text-sm text-center pb-3 font-poppins text-gray-500'>
        {description?.substring(0, 150)}....
      </p>
      <div className='flex flex-wrap justify-between pb-2'>
        <p className='text-sm font-poppins text-right text-primary'>
          {publishDate.slice(0, 10)}
        </p>
        <p className='text-sm font-poppins text-right text-primary'>{author}</p>
      </div>

      <Link
        to={"/" + id}
        className='bg-secondary rounded-full text-center mt-5 ml-[87%] transition hover:scale-110'
      >
        <button className='font-poppins p-2 w-10'>
          <img src={rightArrow} alt='arrow' />
        </button>
      </Link>
      {accessLevel?.access === "admin" && (
        <div className='flex justify-between'>
          <Link to={"edit/" + id}>
            <p className='cursor-pointer pt-1'>Edit</p>
          </Link>
          <p className='cursor-pointer pt-1' onClick={() => removePost(id)}>
            Delete
          </p>
        </div>
      )}
      {accessLevel?.access === "editor" && accessLevel?.name === author && (
        <div className='flex justify-between'>
          <Link to={"edit/" + id}>
            <p className='cursor-pointer pt-1'>Edit</p>
          </Link>
          <p className='cursor-pointer pt-1' onClick={() => removePost(id)}>
            Delete
          </p>
        </div>
      )}
      {!published && (
        <p className='text-center text-sm bg-fourth absolute p-2 rounded-e-full'>
          Draft
        </p>
      )}
    </div>
  );
};

export default Post;
