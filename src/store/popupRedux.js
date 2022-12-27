import { createSlice } from "@reduxjs/toolkit";

const initialPopupState = { showPopup: false, data: {} };

const popupSlice = createSlice({
  name: "popup",
  initialState: initialPopupState,
  reducers: {
    SHOW_POPUP(state, action) {
      state.showPopup = true;
      state.data = action.payload;
      // console.log("đây là dữ liệu sản phẩm đã click:", state.data);
    },
    HIDE_POPUP(state) {
      state.showPopup = !state.showPopup;
    },
  },
});

export const popupActions = popupSlice.actions;

export default popupSlice.reducer;
