// import { FiPhone, FiTruck } from "react-icons/fi";
import "./Navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CollapsibleExample() {
  return (
    <Navbar className="navigation" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className="navbarlogo" href="/home">
          Dealerz.
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navitems" href="/shop">
              Shop
            </Nav.Link>
            <Nav.Link className="navitems" href="promo">
              Promo
            </Nav.Link>
            <Nav.Link className="navitems" href="about">
              About
            </Nav.Link>
            <Nav.Link className="navitems" href="blog">
              Blog
            </Nav.Link>
            <Form className="d-flex ">
              <Form.Control
                type="search"
                placeholder="Search what you need"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>

          <Nav>
            <Nav.Link className="navitems" href="/wishlist">
              Wishlist
            </Nav.Link>
            <Nav.Link className="navitems" href="/cart">
              Cart
            </Nav.Link>
            <Nav.Link className="navitems" href="/login">
              Login
            </Nav.Link>
            <Nav.Link className="navitems" href="/notifications">
              Notifications
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
