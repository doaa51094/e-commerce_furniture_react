import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "../Button/Button";
import article4 from "../../Images/Articles/article4.jpg";
import Room from "./Room";

const Articles = () => {
  return (
    <>
      <section id="Articles" className="py-5">
        <Container>
          <div className="text-center">
            <h2 className="py-3">Enjoy Our Articles</h2>
            <Button />
          </div>
          <Row className="mt-4">
            <Col lg={6} className="d-flex align-items-center">
              <div className="Articles__contant p-5">
                <p>FEATURED ARTICLE</p>
                <div className="brdr"></div>
                <h2>Manhattan Pied-a-terre for a new Chicago apartment</h2>
                <div className="brdr"></div>
                <p>
                  Articles goal is to create furniture with a strong expression
                  that crosses the boundaries between home interiors and
                  contract spaces. A vibrant combination of sustainable
                  materials and design that we hope with live through many
                  generations.
                </p>
                <p>
                  “Things that you have a personal relationship with, will
                  simply last longer. This makes design a great tool to help
                  extend product life cycles. So in the end, we feel that the
                  level of personal expression and creativity built into an
                  object is directly linked to sustainability”. As Articles now
                  is making its rollout, it will act as a launch pad for an
                  array of exciting furniture projects designed by Björn
                  Dahlström and others.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="Articles__img p-5">
                <img src={article4} className="w-100" alt="" />
              </div>
            </Col>
          </Row>
          <Room/>
        </Container>
      </section>
    </>
  );
};

export default Articles;
