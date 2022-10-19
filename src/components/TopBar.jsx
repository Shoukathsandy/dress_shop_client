import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalOffer } from "react-icons/md";

const TopBar = () => {
  return (
    <>
      <Navbar
        style={{ backgroundColor: "#607D8B", color: "white" }}
        expand="lg"
      >
        <Container fluid>
          <h6 className="text-light">
            <MdLocalOffer className="text-warning" /> &nbsp;&nbsp; Free Home
            Delivery For All Products
          </h6>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto text-light">
              <LinkContainer to="/" activeClassName="">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about" activeClassName="">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact" activeClassName="">
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/policy" activeClassName="">
                <Nav.Link>terms and policy</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
