import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 pt-5">
              <h5 className="fw-bold">CONNECT</h5>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 pt-5">
              <h5 className="fw-bold">SERVICES</h5>
              <ul>
                <li>
                  <a href="">best seller</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 pt-5">
              <h5 className="fw-bold">NEWLETTER</h5>
              <p>Sign up for newsletter and get 10% cash back over</p>
              <div className="pt-3">
                <input
                  type="text"
                  placeholder="your email address....."
                  className="p-1"
                />
                <button className="ms-3">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
