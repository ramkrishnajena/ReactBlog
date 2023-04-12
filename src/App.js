import React, { lazy, Suspense } from "react";
import Body from "./components/Body";
import "./app.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PostContainer from "./components/PostContainer";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import SinglePost from "./components/SinglePost";
import ErrorPage from "./components/ErrorPage";
import Shimmer from "./components/Shimmer";

const Dashboard = lazy(() => import("./components/admin/Dashboard"));
const BlogEditor = lazy(() => import("./components/admin/BlogEditor"));

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
        element: (
          <Suspense fallback={<Shimmer />}>
            <Dashboard />
          </Suspense>
        ),
        children: [
          {
            path: "/admin",
            element: <PostContainer />,
          },
          {
            path: "edit",
            element: (
              <Suspense fallback={<Shimmer />}>
                <BlogEditor />
              </Suspense>
            ),
          },
          {
            path: "edit/:id",
            element: (
              <Suspense fallback={<Shimmer />}>
                <BlogEditor />
              </Suspense>
            ),
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
