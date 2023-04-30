import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./CounterSlice";
import { heartSlice } from "./HeartSlice";

let store = configureStore({
  reducer: {
    cart: productsSlice.reducer,
    heart: heartSlice.reducer,
  },
});

export default store;
