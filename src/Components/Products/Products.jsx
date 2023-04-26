import React from "react";
import Container from "react-bootstrap/Container";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Products = () => {
  return (
    <>
      <section id="Products">
        <Container className="products__container">
          <Section1/>
        </Container>
        <Container className="products__container border-top-0">
          <Section2/>
        </Container>
        <Container className="products__container border-top-0">
          <Section3/>
        </Container>
      </section>
    </>
  );
};

export default Products;
