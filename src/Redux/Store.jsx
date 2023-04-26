import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./CounterSlice";






let store=configureStore(
    {
        reducer:{
           cart:productsSlice.reducer
         }
    }
)

export default store;