import React from "react";
import img from "../../Images/deleteIcon/delete.png";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove, clear } from "../../Redux/HeartSlice";

function HeartBag() {
  let cart = useSelector((state) => state.heart);
  let dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += Number(product.price * product.quantity);
    return acc;
  }, 0);

  return (
    <>
      {" "}
      <section id="Bag">
        <div className="container text-center pt-4">
          <h1 className="fw-bolder">My Favorites</h1>
          <div>
            <Link to="/cat" className="text-decoration-none text-muted">
              store /{" "}
            </Link>
            <Link to="/bag" className="text-decoration-none text-muted">
              Favorites
            </Link>
          </div>
          {cart.length == 0 ? (
            <>
              <p className="text-muted mt-5 fs-4">
                You haven’t favorited any items yet
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
                      <th scope="col">Name</th>
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
                        <th>{product.Title}</th>
                        <th className="pt-4"> ${product.price} </th>
                        <th className="pt-4">
                          <button
                            className="border-0 bg-transparent"
                            onClick={() => dispatch(remove(product))}
                          >
                            <img src={img} className="bag_img" />
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
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default HeartBag;
