import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import product1 from "../../Images/products/product1.jpg";
import { BsArrowRight } from "react-icons/bs";

const Section1 = () => {
  return (
    <>
      <Row className="section1">
        <Col
          lg={3}
          className="brdr__right d-flex align-items-center justify-content-center position-relative p-5"
        >
          <div className=" text-center">
            <h3>Discover Sanders Collection</h3>
          </div>
          <div className="footer__product p-2">
            <p className=" pt-3 pe-5 ">Our Friday date night spot</p>{" "}
            <BsArrowRight className="fs-3 px-1" />{" "}
          </div>
        </Col>
        <Col lg={9}>
          <div className=" p-5">
            <img src={product1} className="w-100" alt="" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Section1;
