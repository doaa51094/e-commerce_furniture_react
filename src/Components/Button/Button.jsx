import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const Button = () => {
  return (
    <>
      {" "}
      <button className="FeaturedProduct__btn hover_btn">
       <Link to='cat' className="styleLink"> View All <BsArrowRight className="fs-3 px-1 styleLink" />{" "}</Link>
      </button>
    </>
  );
};

export default Button;
