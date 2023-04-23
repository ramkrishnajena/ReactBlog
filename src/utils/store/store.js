import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice";
import userSlice from "./userSlice";

const isDevelopment = process.env.NODE_ENV === "development";
const store = configureStore({
  reducer: {
    blogs: blogSlice,
    users: userSlice,
  },
  devTools: isDevelopment,
});

export default store;
