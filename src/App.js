import React from 'react'
import { createHashRouter,RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Category from './Components/Category/Category'
import Home from './Components/Home/Home';
import  Login from './Components/Login/Login'
import Register from './Components/Register/Register';
import { Bag } from './Components/Bag/Bag';
import { Provider } from 'react-redux';
import store from './Redux/Store';

const routers=createHashRouter([
  {
path:'/',element:<Layout/>,children:[
  {path:'cat',element:<Category></Category>},
  {index:true ,element:<Home/>},
  {path:'login' ,element:<Login/>},
  {path:'register' ,element:<Register/>},
  {path:'bag' ,element:<Bag/>}
]
}])

export default function App() {
  return (
    <>
   <Provider store={store}>
   <RouterProvider router={routers}></RouterProvider>
   </Provider>
   
  
    </>
  )
}
