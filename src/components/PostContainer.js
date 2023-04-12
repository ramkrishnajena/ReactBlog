import React, { useEffect, useState } from "react";
import { allPosts, getPost } from "../services/createPost.service";
import Post from "./Post";
import { Store } from "@reduxjs/toolkit";
import { addAllPost, addPost } from "../utils/store/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/utils";

const PostContainer = () => {
  const [postList, setPostList] = useState([]);
  const [searchPost, setSearchPost] = useState([]);
  const dispatch = useDispatch();
  const select = useSelector((data) => data);

  const handleSearch = (e) => {
    setSearchPost(filterData(e.target.value, postList));
  };
  async function getAllPosts() {
    try {
      const posts = await allPosts();
      const postData = posts.map((doc) => ({ ...doc.data(), id: doc.id }));
      setPostList(postData);
      setSearchPost(postData);
      dispatch(addAllPost(postData));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return !postList.length ? (
    <div className='w-full h-full'>
      <div className='flex flex-wrap justify-center'>
        {Array(6)
          .fill("")
          .map((i) => (
            <Shimmer key={i} />
          ))}
      </div>
    </div>
  ) : (
    <div className='w-full flex flex-col justify-center items-center'>
      <input
        type='text'
        name='search'
        placeholder='Search'
        className='h-10 w-96 border border-secondary rounded-lg font-roboto px-3 mb-4'
        onChange={handleSearch}
      />

      <div className='flex flex-wrap justify-center'>
        {searchPost.map((data) => (
          <Post key={data.id} {...data} />
        ))}
        {!searchPost.length && (
          <p className='text-xl font-poppins'>No Results Found</p>
        )}
      </div>
    </div>
  );
};

export default PostContainer;
