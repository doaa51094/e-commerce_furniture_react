import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import product2 from '../../Images/products/product2.jpg'
import product3 from '../../Images/products/product3.png'
import { BsArrowRight } from "react-icons/bs";

const Section2 = () => {
  return (
    <>
      <Row className='section2 text-center'>
            <Col
              lg={6}
                className='brdr__right p-5 position-relative'
            >
             <div>
                <img src={product2} className='sec__img w-100' alt="" />
                <h3 className='py-4'>Lounge-Commode</h3>
             </div>
             <div className='footer__product footer__lg'>
               <p className=" pt-3 pe-5">Equal parts cozy , functional & heavily loved</p>
               <BsArrowRight className="fs-3 px-1" />{" "}

             </div>
              
            </Col>
            <Col lg={6} className='p-5 position-relative'>
            <div >
                <img src={product3} className='sec__img w-100' alt="" />
                <h3 className='py-4 '>Gather around the table</h3>
             </div>
             <div className='footer__product footer__lg'>
               <p className=" pt-3 pe-5 ">For eating , playing and negotiating ,etc</p>
               <BsArrowRight className="fs-3 px-1" />{" "}
             </div>
            </Col>
          </Row>
    </>
  )
}

export default Section2