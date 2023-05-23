import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Remarkable } from "remarkable";
const md = new Remarkable();

const SinglePost = () => {
  const blogs = useSelector((store) => store.blogs.posts);
  const param = useParams();
  const post = blogs.filter((data) => data.id === param.id);
  useEffect(() => {
    if (post.length) {
      document.title = post[0].title;
      document.head.innerHTML += `<meta name="description" content=${JSON.stringify(
        post[0].description
      )}>`;
    }

    return () => {
      document.title;
      document.head;
    };
  }, [post]);

  return (
    <>
      {post.map((data) => (
        <div
          key={data.id}
          className='w-full flex justify-center items-center flex-col mb-5'
        >
          <article className='lg:w-8/12 sm:w-full p-5 grid justify-items-center bg-zinc-50 shadow-lg border rounded-lg'>
            <h2 className='text-2xl pb-5 font-bold font-roboto'>
              {data.title}
            </h2>
            <img
              src={data.image}
              alt={data.title}
              className='w-2/3'
              loading='lazy'
            />
            <div
              className='lg:w-2/3 pt-5 flex flex-col gap-y-2'
              dangerouslySetInnerHTML={{ __html: md.render(data.content) }}
            ></div>
          </article>
        </div>
      ))}
    </>
  );
};

export default SinglePost;
