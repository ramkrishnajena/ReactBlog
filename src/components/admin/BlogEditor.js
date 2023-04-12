import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  createPost,
  getPost,
  updatePost,
} from "../../services/createPost.service";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const BlogEditor = () => {
  const user = useSelector((data) => data.users.user);
  const [post, setPost] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    author: user.userData.name,
    publishDate: new Date().toISOString(),
    published: true,
  });
  const [message, setMessage] = useState();
  const url = useParams();
  console.log(post);

  const editPost = async (url) => {
    const postData = (await getPost(url)).data();
    const { title, description, content, image } = postData;
    setPost({ ...post, title, description, content, image });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPost({
      ...post,
      [name]: value,
    });
    setMessage();
  };
  const publishPost = async (e) => {
    e.preventDefault();
    try {
      if (url.id) {
        await updatePost(url.id, post);
        setMessage("Post Updated");
      } else {
        await createPost(post);
        setMessage("Published");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const draftPost = async (e) => {
    e.preventDefault();
    try {
      if (url.id) {
        await updatePost(url.id, { ...post, published: false });
        setMessage("Draft");
      } else {
        await createPost({ post, published: false });
        setMessage("Draft Sucessfully");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    url.id && editPost(url.id);
  }, []);

  return (
    <div className='w-full h-4/5 flex flex-col items-center'>
      <p className='text-xl animate-pulse bold text-primary'>{message}</p>
      <form className='w-2/3'>
        <input
          type='text'
          name='title'
          value={post.title}
          onChange={handleChange}
          className='w-full h-8 my-2 bg-transparent text-sm pl-2 border border-slate-300 rounded-md focus:outline-none'
        />
        <input
          type='text'
          name='description'
          value={post.description}
          onChange={handleChange}
          className='w-full h-8 my-2 bg-transparent text-sm pl-2 border border-slate-300 rounded-md focus:outline-none '
        />
        <input
          type='text'
          name='image'
          value={post.image}
          onChange={handleChange}
          className='w-full h-8 my-2 bg-transparent text-sm pl-2 border border-slate-300 rounded-md focus:outline-none '
        />
        <textarea
          type='text'
          name='content'
          value={post.content}
          onChange={handleChange}
          className='w-full h-60 my-2 bg-transparent text-sm pl-2 border border-slate-300 rounded-md focus:outline-none '
        />

        <button
          className='w-40 h-10 mt-3 font-roboto text-white bg-primary border rounded-md'
          onClick={publishPost}
        >
          {!url.id ? "Publish" : "Update"}
        </button>
        <button
          className='w-40 h-10 mt-3 font-roboto text-white bg-primary border rounded-md'
          onClick={draftPost}
        >
          Draft
        </button>
      </form>
    </div>
  );
};

export default BlogEditor;
