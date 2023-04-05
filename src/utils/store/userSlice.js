import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: { log: false },
  },
  reducers: {
    loggedInUser: (state, action) => {
      state.user = action.payload;
    },
    signOutUser: (state) => {
      state.user = { log: false };
    },
  },
});

export default userSlice.reducer;
export const { addUser, deleteUser, loggedInUser, signOutUser } =
  userSlice.actions;
