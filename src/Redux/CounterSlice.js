
import {createSlice} from '@reduxjs/toolkit';




export const productsSlice=createSlice({
 name:'productsSlice',
 initialState:[],
 reducers:{
  addToCart:(state ,action)=>{
    const findProduct=state.find((product)=> product.id==action.payload.id);
    console.log(findProduct);
    if (findProduct) {
      findProduct.quantity+=1;
    }else{
   const productClone={...action.payload,quantity:1};
   state.push(productClone) ;
    }
   
  },
   removeFromCart:(state ,action)=>{
    return state.filter((product)=> product.id !=action.payload.id )
   },
   clear:(state ,action)=>{
    return [];
   }
 }

})

export const {addToCart,removeFromCart,clear}=productsSlice.actions;
export default productsSlice.reducer; 
