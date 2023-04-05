import React, { useEffect } from "react";
import Body from "./components/Body";
import "./app.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PostContainer from "./components/PostContainer";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import Dashboard from "./components/admin/Dashboard";
import { addAllPost } from "./utils/store/blogSlice";
import BlogEditor from "./components/admin/BlogEditor";
import Header from "./components/Header";
import SinglePost from "./components/SinglePost";
import ErrorPage from "./components/ErrorPage";

const BodyRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PostContainer />,
      },
      {
        path: "/:id",
        element: <SinglePost />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "blog",
        element: <PostContainer />,
      },
      {
        path: "admin",
        element: <Dashboard />,
        children: [
          {
            path: "/admin",
            element: <PostContainer />,
          },
          {
            path: "edit",
            element: <BlogEditor />,
          },
          {
            path: "edit/:id",
            element: <BlogEditor />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <div className='max-h-screen h-full w-full'>
      <Provider store={store}>
        <RouterProvider router={BodyRouter} />
      </Provider>
    </div>
  );
};

export default App;
