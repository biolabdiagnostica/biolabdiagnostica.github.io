import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/LogoBiolabBlanco.png';

function OffcanvasExample() {
  const logoStyle = {
    marginRight: '13px', // Ajusta este valor según tus preferencias
  };

  return (
    <>
      <Navbar expand="sm" bg="primary" data-bs-theme="dark">
        <Container>
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            style={logoStyle} // Aplica el estilo en línea aquí
            alt="React Bootstrap logo"
          />
          {' '}
          <Navbar.Brand href="#home">Biolab Diagnostica </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
