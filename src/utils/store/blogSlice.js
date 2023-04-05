import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    addAllPost: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state, action) => {},
    updatePost: (state, action) => {},
  },
});

export const { addAllPost, deletePost, updatePost } = blogSlice.actions;
export default blogSlice.reducer;
