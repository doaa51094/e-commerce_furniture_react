import React from 'react'
import Articles from '../Articles/Articles'
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct'
import NavBar from '../NavBar/NavBar'
import Products from '../Products/Products'
import {Outlet} from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
  <>
    <NavBar/>
    <Outlet/>
    <Footer/>
   
  </>
  )
}
