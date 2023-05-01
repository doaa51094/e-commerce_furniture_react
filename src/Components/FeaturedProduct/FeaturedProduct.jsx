import React from "react";
import Slider from "react-slick";
import { FeaturedProducts } from "../../Data";
import Container from "react-bootstrap/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '../Button/Button';

const FeaturedProduct = () => {
  console.log(FeaturedProducts[0].image);
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 922,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <>
      <section id="FeaturedProduct" className="mb-0">
        <Container>
          <div className="text-center">
            <h2 className="py-3">Enjoy Our Featured Products</h2>
          <Button/>
            <Slider {...settings}>
              {FeaturedProducts?.map((item, i) => (
                <div
                  className="FeaturedProduct__item p-3  m-3 text-center"
                  key={i}
                >
                  <div>
                    <img src={item.image} className=" m-auto" alt="" />
                    <h6>{item.Title}</h6>
                    <h6>${item.price}</h6>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FeaturedProduct;
