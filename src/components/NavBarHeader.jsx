import React from "react"
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "./files/images/cropped-webdirekt_logo_vector-Konvertiert.png"


function NavbarHeader() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand>
            <img
              alt="logo"
              src={logo}
              width="300"
              height="40"
              className="d-inline-block align-top"
            />{" "}
           India
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHeader;
