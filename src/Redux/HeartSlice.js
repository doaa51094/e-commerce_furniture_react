import { createSlice } from "@reduxjs/toolkit";
import "react-toastify/dist/ReactToastify.css";

const localStorageData = localStorage.getItem("heartitems");
const items = localStorage.getItem("heartitems")
  ? JSON.parse(localStorage.getItem("heartitems"))
  : [];

export const heartSlice = createSlice({
  name: "heartSlice",
  initialState: items,
  reducers: {
    addProduct: (state, action) => {
      const findProduct = state.find(
        (product) => product.id == action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
      localStorage.setItem("heartitems", JSON.stringify(state));
    },
    remove: (state, action) => {
      const nextCartItems = state.filter(
        (product) => product.id != action.payload.id
      );
      localStorage.setItem("heartitems", JSON.stringify(nextCartItems));
      return nextCartItems;
    },
    clear: (state, action) => {
      localStorage.clear();
      return [];
    },
  },
});

export const { addProduct, remove, clear } = heartSlice.actions;
export default heartSlice.reducer;
