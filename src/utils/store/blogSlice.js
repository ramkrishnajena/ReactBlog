import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { allPosts } from "../../services/createPost.service";
import { useDispatch } from "react-redux";

export const fetchApiThunk = createAsyncThunk("blogs/posts", async () => {
  const data = await allPosts();
  const postData = await data.map((doc) => ({ ...doc.data(), id: doc.id }));
  return postData;
});

const blogSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    menu: false,
    status: "idle",
  },
  reducers: {
    addAllPost: (state, action) => {
     fetchApiThunk()
    },
    deleteAPost: (state, action) => {
      state.posts.splice(action.payload,1)
    },
    updatePost: (state, action) => {},
    menuState: (state, action) => {
      state.menu = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiThunk.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchApiThunk.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchApiThunk.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export const { addAllPost, deleteAPost, updatePost, menuState } =
  blogSlice.actions;
export default blogSlice.reducer;
