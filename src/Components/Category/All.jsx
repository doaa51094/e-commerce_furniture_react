import React from "react";
import { AllProducts } from "../../Data";
import { TiShoppingCart } from "react-icons/ti";
import Nav from "react-bootstrap/Nav";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CounterSlice";
import { addProduct, remove } from "../../Redux/HeartSlice";

export default function All() {
  let dispatch = useDispatch();
  const [isLike, setisLike] = useState(false);
  function clicked(id) {
    setisLike(!isLike);
    let x = AllProducts.find((product) => {
      if (product.id == id) {
        if (isLike) {
          document.getElementById(`${id}`).style.color = "red";
          dispatch(addProduct(product));
        } else {
          document.getElementById(`${id}`).style.color = "";
          dispatch(remove(product));
        }
      }
    });
  }

  return (
    <>
      {" "}
      {AllProducts.map((item, i) => (
        <div className="col-md-4" key={i}>
          <div className="box-shadow pb-3 px-2">
            <img src={item.image} className="img-style w-100 pb-3" alt="" />
            <h6>{item.Title}</h6>
            <div className=" d-flex justify-content-between">
              <div className="">
                <h6>${item.price}</h6>
              </div>
              <div className="d-flex">
                <Nav.Link onClick={() => clicked(item.id)}>
                  <AiFillHeart id={item.id} className="fs-4" />
                </Nav.Link>
                <Nav.Link>
                  <TiShoppingCart
                    className="fs-4"
                    onClick={() => dispatch(addToCart(item))}
                  />
                </Nav.Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
