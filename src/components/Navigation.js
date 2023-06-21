import React from "react";
import { Card, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import myPhoto from "../assets/img/myPhoto.jpeg";
const Navigation = () => {
  return (
    <header>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3"
          variant="light"
        >
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href="#">Post placeholder</Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Post placeholder
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <LinkContainer to="/">
                    <Nav.Link to="/">Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <Nav.Link to="/about">About</Nav.Link>
                  </LinkContainer>

                  <Card
                    style={{
                      width: "200px",
                      margin: "10px auto",
                      borderRadius: "15px",
                    }}
                  >
                    <Card.Img variant="top" src={myPhoto} />
                    <Card.Body>
                      <Card.Title>Нефёдов Сергей</Card.Title>
                      <Card.Text>
                        <a href="mailto: nefedov38@gmail.com">
                          nefedov38@gmail.com
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </header>
  );
};

export default Navigation;
