import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    menu: false,
  },
  reducers: {
    addAllPost: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state, action) => {},
    updatePost: (state, action) => {},
    menuState: (state, action) => {
      state.menu = action.payload;
    },
  },
});

export const { addAllPost, deletePost, updatePost, menuState } =
  blogSlice.actions;
export default blogSlice.reducer;
