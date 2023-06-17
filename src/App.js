import React, { lazy, Suspense } from "react";
import Body from "./Layout/Body";
import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PostContainer from "./Layout/PostContainer";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import SinglePost from "./components/SinglePost";
import ErrorPage from "./Layout/ErrorPage";
import Shimmer from "./components/Shimmer";

const Dashboard = lazy(() => import("./components/admin/Dashboard"));
const BlogEditor = lazy(() => import("./components/admin/BlogEditor"));
console.log(process.env.apiKey);
const BodyRouter = createBrowserRouter(
  [
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
  ],
  {
    basename: "/blog",
  }
);

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
