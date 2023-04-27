import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice";
import userSlice from "./userSlice";

const isDevelopment = process.env.NODE_ENV === "development";
const store = configureStore({
  reducer: {
    blogs: blogSlice,
    users: userSlice,
  },
  //this one is to hide the redux in production
  devTools: isDevelopment,
});

export default store;
