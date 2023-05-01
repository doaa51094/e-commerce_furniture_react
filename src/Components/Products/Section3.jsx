import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsArrowRight } from "react-icons/bs";
import product4 from '../../Images/products/product4.jpg';

const Section3 = () => {
  return (
    <>
      <Row className='section1'>
            <Col
              lg={4}
              className="brdr__right d-flex align-items-center justify-content-center position-relative p-5"
            >
              <div className=" text-center">
                <h3>Your bedroom sanctuary</h3>
              </div>
              <div className="footer__product p-2">
                <p className=" pt-3 pe-2">Pieces for the place we spend the most time</p>{" "}
                <BsArrowRight className="fs-3 px-1" />{" "}
              </div>
            </Col>
            <Col lg={8}>
              <div className=" p-5">
                <img src={product4} className="w-100" alt="" />
              </div>
            </Col>
          </Row>
    </>
  )
}

export default Section3