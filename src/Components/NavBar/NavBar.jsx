import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { TiUserOutline } from "react-icons/ti";
import { TiShoppingCart } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const cart = useSelector((state) => state.cart);
  const heartIcon = useSelector((state) => state.heart);
  return (
    <>
      <Navbar expand="lg" className="fixed-top " id="Navbar">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse
            id="basic-navbar-nav "
            className="justify-content-between "
          >
            <Nav>
              <Nav.Link className="Nav--light text-lg-right text-center">
                <GiEarthAfricaEurope className="fs-4 text-lg-right text-center" />{" "}
                United Kingdom | en_GB
              </Nav.Link>
              <Nav.Link
                className="Nav--light text-lg-right text-center"
                as={Link}
                to=""
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="Nav--light text-lg-right text-center"
                as={Link}
                to="cat"
              >
                Store
              </Nav.Link>
            </Nav>

            <Navbar.Brand className=" Nav--light d-none d-lg-block text-lg-right text-center">
              Free standard shipping over $75
            </Navbar.Brand>

            <Nav>
              <Nav.Link className="d-none d-lg-block">
                <TiUserOutline className="fs-4 Nav--light" />
              </Nav.Link>
              <Nav.Link
                className=" Nav--light text-lg-right text-center"
                as={Link}
                to="login"
              >
                Login
              </Nav.Link>
              <Nav.Link className="d-none d-lg-block Nav--light"></Nav.Link>
              <Nav.Link
                className=" Nav--light text-lg-right text-center"
                as={Link}
                to="register"
              >
                Register
              </Nav.Link>
              <Nav.Link
                className="position-relative text-lg-right text-center"
                as={Link}
                to="heartbag"
              >
                <div className="cart-icon text-center">{heartIcon.length}</div>
                <TiHeartOutline className="fs-4 Nav--light" />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="bag"
                className="position-relative text-lg-right text-center"
              >
                <div className="cart-icon text-center">{cart.length}</div>
                <TiShoppingCart className="fs-4 Nav--light" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
