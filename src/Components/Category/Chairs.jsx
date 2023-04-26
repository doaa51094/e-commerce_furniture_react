import React from 'react'
import { TiHeartOutline } from "react-icons/ti";
import Nav from "react-bootstrap/Nav";
import { TiShoppingCart } from "react-icons/ti";
import { useState } from "react";
import { chairs } from "../../Data";
import { useSelector,useDispatch } from 'react-redux'
import { addToCart } from "../../Redux/CounterSlice";

export default function Chairs() {
  const [isLike, setisLike] = useState(false);
  let cart=   useSelector((state)=> state.cart);
  let dispatch=useDispatch();
  function clicked(id) {
    setisLike(!isLike);
    let x = chairs.find((product) => {
      if (product.id == id) {
        if (isLike) {
          document.getElementById(`${id}`).style.color = "red";
        } else {
          document.getElementById(`${id}`).style.color = "";
        }
      }
    });
  }
  return (
    <>  {chairs.map((item,i)=>
        <div className="col-md-4" key={i}>
         <div className='box-shadow pb-3 px-2'>
         <img src={item.image} className='img-style w-100 pb-3' alt="" />
          <h6>{item.Title}</h6>
          <div className=' d-flex justify-content-between'>
            <div className=''><h6>${item.price}</h6></div>
            <div className='d-flex'>
               <Nav.Link>
              <TiHeartOutline className="fs-4" id={item.id}
                    onClick={() => clicked(item.id)}/>
            </Nav.Link>
            <Nav.Link>
              <TiShoppingCart className="fs-4" onClick={()=> dispatch(addToCart(item))}/>
            </Nav.Link>
            </div>

          </div>
          
         </div>
        </div>
      )}</>
  )
}