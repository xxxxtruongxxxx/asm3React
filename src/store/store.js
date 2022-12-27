import { configureStore } from "@reduxjs/toolkit";

import popupReducer from "./popupRedux";
import categoryRedux from "./categoryRedux";
import userRedux from "./userRedux";
import isLogedRedux from "./isLoged";
import cartRedux from "./cartState";
import LiveChatPopupRedux from "./liveChatPopupState";
const store = configureStore({
  reducer: {
    popup: popupReducer,
    category: categoryRedux,
    user: userRedux,
    isLoged: isLogedRedux,
    cart: cartRedux,
    LiveChatPopup: LiveChatPopupRedux,
  },
});

export default store;
