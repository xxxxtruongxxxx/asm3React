import { createSlice } from "@reduxjs/toolkit";

const initialLiveChatPopupState = { show: false };

const liveChatPopupSlice = createSlice({
  name: "liveChatPopupState",
  initialState: initialLiveChatPopupState,
  reducers: {
    TOGGLE_SHOW(state) {
      state.show = !state.show;
    },
  },
});

export const liveChatPopupAction = liveChatPopupSlice.actions;
export default liveChatPopupSlice.reducer;
