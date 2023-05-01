import React from "react";
import img from "../../Images/deleteIcon/delete.png";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  clear,
  removeFromCart,
  increase,
  decrease,
} from "../../Redux/CounterSlice";

export const Bag = () => {
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += Number(product.price * product.quantity);
    return acc;
  }, 0);

  return (
    <>
      <section id="Bag">
        <div className="container text-center pt-4">
          <h1 className="fw-bolder">Shopping cart</h1>
          <div>
            <Link to="/cat" className="text-decoration-none text-muted">
              store /{" "}
            </Link>
            <Link to="/bag" className="text-decoration-none text-muted">
              {" "}
              Shopping cart
            </Link>
          </div>
          {cart.length === 0 ? (
            <>
              <p className="text-muted mt-5 fs-4">
                Your shopping cart is empty
              </p>
              <div className="mb-3">
                <button className="clear_btn me-4">
                  {" "}
                  <Link to="/cat" className=" text-decoration-none text-muted">
                    Browse Store
                  </Link>{" "}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="row">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Image</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col">Remove Item</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product, i) => (
                      <tr key={i}>
                        <th>
                          <img
                            src={product.image}
                            className="bag-img"
                            alt={product.Title}
                          />
                          <br /> {product.Title}
                        </th>
                        <th className="pt-4">
                          {" "}
                          <span
                            onClick={() => dispatch(decrease(product))}
                            disabled={product.quantity <= 1}
                          >
                            -
                          </span>{" "}
                          {product.quantity}{" "}
                          <span onClick={() => dispatch(increase(product))}>
                            +
                          </span>
                        </th>
                        <th className="pt-4">
                          ${product.price * product.quantity}
                        </th>
                        <th className="pt-4">
                          <button
                            className="border-0 bg-transparent"
                            onClick={() => dispatch(removeFromCart(product))}
                          >
                            <img src={img} className="bag_img" alt=''/>
                          </button>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="clear_box pe-5">
                <div>
                  <button
                    className="clear_btn me-4"
                    onClick={() => dispatch(clear())}
                  >
                    Clear
                  </button>
                </div>
                <div>
                  {" "}
                  <h2 className="fw-bolder mb-5">
                    Total: $ {totalPrice.toFixed(2)}
                  </h2>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};
