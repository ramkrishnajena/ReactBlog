import React, { useEffect, useState } from "react";
import { allPosts, getPost } from "../services/createPost.service";
import Post from "./Post";
import { Store } from "@reduxjs/toolkit";
import { addAllPost, addPost } from "../utils/store/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const PostContainer = () => {
  const [postList, setPostList] = useState([]);
  const dispatch = useDispatch();
  const select = useSelector((data) => data);
  async function getAllPosts() {
    try {
      const posts = await allPosts();
      setPostList(posts.map((doc) => ({ ...doc.data(), id: doc.id })));
      dispatch(addAllPost(posts.map((doc) => ({ ...doc.data(), id: doc.id }))));
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getAllPosts();
  }, []);

  return !postList.length ? (
    <div className='w-full items-center flex flex-row flex-wrap'>
      {Array(9)
        .fill("")
        .map(() => (
          <Shimmer />
        ))}
    </div>
  ) : (
    <>
      <div className='w-full flex flex-row flex-wrap justify-evenly'>
        {postList.map((data) => (
          <Post key={data.id} {...data} />
        ))}
      </div>
    </>
  );
};

export default PostContainer;
