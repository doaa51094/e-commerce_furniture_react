import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const localStorageData = localStorage.getItem("cartitems");
const items = localStorage.getItem("cartitems")
  ? JSON.parse(localStorage.getItem("cartitems"))
  : [];
// alert when add new product
const notify = () => {
  toast.success("A new product has been added to your cart", {
    position: "bottom-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState: items,
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id == action.payload.id
      );
      notify();
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
      localStorage.setItem("cartitems", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const nextCartItems = state.filter(
        (product) => product.id != action.payload.id
      );
      localStorage.setItem("cartitems", JSON.stringify(nextCartItems));
      return nextCartItems;
    },
    clear: (state, action) => {
      localStorage.clear();
      return [];
    },
    increase: (state, action) => {
      state = state.map((product) => {
        if (product.id === action.payload.id) {
          localStorage.setItem("cartitems", JSON.stringify(state));
          return (product.quantity += 1);
        } else {
          return product.quantity;
        }
      });
    },
    decrease: (state, action) => {
      state = state.map((product) => {
        if (product.quantity == 0) {
          return;
        }
        if (product.id === action.payload.id) {
          localStorage.setItem("cartitems", JSON.stringify(state));
          return (product.quantity -= 1);
        } else {
          return product.quantity;
        }
      });
    },
  },
});

export const { addToCart, removeFromCart, clear, increase, decrease } =
  productsSlice.actions;
export default productsSlice.reducer;
