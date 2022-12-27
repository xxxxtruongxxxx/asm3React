import { createSlice } from "@reduxjs/toolkit";

const initialCategoryState = { value: "all" };

const categorySlice = createSlice({
  name: "category",
  initialState: initialCategoryState,
  reducers: {
    UPDATE_CATEGORY(state, action) {
      state.value = action.payload;
      // console.log("đây là giá trị Category đã click:", state.value);
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice.reducer;
