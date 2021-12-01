import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineCoffee,
  AiOutlineUser,
  AiOutlineUserAdd,
} from "react-icons/ai";

const Header = () => {
  return (
    <Navbar bg="dark" expand="md" variant="dark">
      <Container>
        <Navbar.Brand>Software Engineering</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto"></Nav>
          <Nav>
            <Nav.Link>
              <p1>GRENOVIE</p1>
            </Nav.Link>
            {/* <Nav.Link>Elumir Grenovie C</Nav.Link> */}
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">
                <AiOutlineHome size="30" />
                Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item href="/product">
                <AiOutlineCoffee size="30" />
                Product
              </NavDropdown.Item>
              <NavDropdown.Item href="/register">
                <AiOutlineUserAdd size="30" />
                Register
              </NavDropdown.Item>
              <NavDropdown.Item href="/login">
                <AiOutlineUser size="30" />
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="/setting">
                <AiOutlineSetting size="30" />
                Setting
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;