import { createSlice } from "@reduxjs/toolkit";
import getItemFromLocalStorage from "../hook/getItemFromLocalStorage";
import setItemToLocalStorage from "../hook/setItemToLocalStorage";

const cartListItem = getItemFromLocalStorage("listItemInCart") || [];
const initialcartState = { listItem: cartListItem || [], value: 0 };

const cartSlice = createSlice(
  {
    name: "cart",
    initialState: initialcartState,
    reducers: {
      ADD_CART(state, action) {
        const updateItemQuantity = () => {
          //Nếu sản phẩm đã có trong giỏ hàng thì chỉ update lại số lượng chứ ko cần thêm mới.
          for (let i = 0; i < state.listItem.length; i++) {
            if (state.listItem[i].id === action.payload.id) {
              state.listItem[i].quantity += action.payload.quantity;
              setItemToLocalStorage("listItemInCart", state.listItem); // lưu lại vào localStorage
              return true;
            }
          }
          return false;
        };
        if (!updateItemQuantity()) {
          // Kiểm tra nếu ko có sản phẩm trong giỏ hàng thì thêm mới
          // console.log("payload", action.payload);
          state.listItem.push(action.payload);
          setItemToLocalStorage("listItemInCart", state.listItem);
          // console.log(state.listItem);
        }
        // console.log("đây là dữ liệu của cart:", state.listItem);
      },
      UPDATE_CART(state, action) {
        // console.log("Action: ", action);

        if (action.payload.type === "increase") {
          for (let i = 0; i < state.listItem.length; i++) {
            if (state.listItem[i].id === action.payload.id) {
              state.listItem[i].quantity++;
            }
          }
        }
        if (action.payload.type === "decrease") {
          for (let i = 0; i < state.listItem.length; i++) {
            if (state.listItem[i].id === action.payload.id) {
              state.listItem[i].quantity--;
            }
          }
        }
        // console.log("đây là dữ liệu của cart:", state.listItem);
      },
      DELETE_CART(state, action) {
        const deleteItemInArrByIdValue = (arr, idValue) => {
          //Hàm này dùng tạo mảng mới loại bỏ phần tử có giá trị ID truyền vào (hàm mới = hàm cũ - 1 phần tử có giá trị ID muốn loại bỏ)
          const newArr = arr.filter((item) => item.id !== idValue);
          return newArr;
        };
        // console.log(action);
        state.listItem = deleteItemInArrByIdValue(
          state.listItem,
          action.payload
        );
        setItemToLocalStorage("listItemInCart", state.listItem);
      },
    },
  },
  []
);

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
