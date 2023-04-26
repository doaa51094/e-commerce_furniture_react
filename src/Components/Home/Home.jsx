import React from 'react'
import Button from 'react-bootstrap/Button';
import Articles from '../Articles/Articles';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import Products from '../Products/Products';
import Slider from './Slider';


export default function Home() {
  return (
    <>
  <header >  
  <Slider/>
  </header>
  <Products/>
    <FeaturedProduct/>
    <Articles/> 
    </>
  )
}
