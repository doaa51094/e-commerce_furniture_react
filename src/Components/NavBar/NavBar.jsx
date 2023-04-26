import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { TiUserOutline } from "react-icons/ti";
import { TiShoppingCart } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { useSelector} from 'react-redux'

 const NavBar = () => {
  const cart=useSelector((state)=> state.cart);
  return (
    <>
     <Navbar expand="lg" className="fixed-top " id='Navbar'>
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse
            id="basic-navbar-nav "
            className="justify-content-between "
          >
            <Nav>
              <Nav.Link className="Nav--light"><GiEarthAfricaEurope className="fs-4" /> United Kingdom | en_GB</Nav.Link>
              <Nav.Link className="Nav--light" href=" ">
              Home
                
                
              </Nav.Link>
            </Nav>

            <Navbar.Brand  className=" Nav--light">
              Free standard shipping over $75
            </Navbar.Brand>

            <Nav>
              <Nav.Link>
                <TiUserOutline className="fs-4 Nav--light" />
              </Nav.Link >
              <Nav.Link   className=" Nav--light" href="/#/login">Login</Nav.Link>
              <Nav.Link  className="d-none d-lg-block Nav--light">
              </Nav.Link>
              <Nav.Link  className=" Nav--light" href="/#/register">Register</Nav.Link>
              <Nav.Link>
                <TiHeartOutline className="fs-4 Nav--light" />
              </Nav.Link>
              <Nav.Link href="/#/bag" className="position-relative">
              <div className="cart-icon text-center">{cart.length}</div>
                <TiShoppingCart className="fs-4 Nav--light"/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;



