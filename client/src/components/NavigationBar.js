import React from "react";
import { Link } from "react-router-dom";

// Import bootstrap
import { Nav, Navbar, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>CRUD API</Navbar.Brand>
          </Link>

          <Nav className="ml-auto">
            <Nav.Link>
              <Link
                to="/submit"
                style={{ textDecoration: "none", color: "#9b9b9b" }}
              >
                Submit a post
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
