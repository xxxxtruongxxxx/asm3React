import { createSlice } from "@reduxjs/toolkit";
import getItemFromLocalStorage from "../hook/getItemFromLocalStorage";

const userLoged = getItemFromLocalStorage("currentUser") || null;
const initialUserState = { user: userLoged };

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    ON_LOGIN(state, action) {
      state.user = action.payload;
      // console.log("đây là user đang đăng nhập:", state.user);
    },
    ON_LOGOUT(state) {
      state.user = userLoged || {};
      // console.log("đây là user đang đăng nhập:", state.user);
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
