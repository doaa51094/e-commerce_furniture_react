import Carousel from "react-bootstrap/Carousel";
import React from "react";
import img1 from "../../Images/slider/slide1.jpg";
import img2 from "../../Images/slider/slide2.jpg";
import img3 from "../../Images/slider/slide3.jpg";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <>
      <div className="Carousel">
        <Carousel controls={false}>
          <Carousel.Item className="Carousel__Item">
            <img className="d-block w-100" src={img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item className="Carousel__Item">
            <img className="d-block w-100" src={img2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item className="Carousel__Item">
            <img className="d-block w-100" src={img3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <div className="Carousel__layer">
          <div className="container">
            <h1>VONICANNA</h1>
            <h3 className="pt-5">The Comfortable Home</h3>
            <div className=" d-flex justify-content-center mt-4">
            <Link className="" to="cat"><button>See More</button></Link>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
