import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "../components/Shimmer";
import { filterData } from "../utils/utils";

const PostContainer = () => {
  const [postList, setPostList] = useState([]);
  const [searchPost, setSearchPost] = useState([]);
  const select = useSelector((data) => data);

  const handleSearch = (e) => {
    setSearchPost(filterData(e.target.value, postList));
  };

  useEffect(() => {
    setPostList(select.blogs.posts);
    setSearchPost(select.blogs.posts);
  }, [select]);

  return !postList.length ? (
    <div className='w-full h-full'>
      <div className='flex flex-wrap justify-center'>
        {Array(6)
          .fill("")
          .map((_, i) => (
            <Shimmer key={i} />
          ))}
      </div>
    </div>
  ) : (
    <div className='w-full flex flex-col justify-center items-center '>
      <input
        type='text'
        name='search'
        placeholder='Search'
        className='h-10 sm:w-72 lg:w-96 border border-secondary rounded-lg font-roboto px-3 mb-4'
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
