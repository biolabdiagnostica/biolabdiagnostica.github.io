import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/LogoBiolab.png';

function OffcanvasExample() {
  const logoStyle = {
    marginRight: '13px', // Ajusta este valor según tus preferencias
  };
  const margin = {
    marginBottom: '25px'
  };

  return (
    <>
      <Navbar expand="sm" bg="light" data-bs-theme="light">
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
              <Nav variant="pills" defaultActiveKey="/home" style={margin}>
                <Nav.Item>
                  <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Active 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1" >
                    Active 3
                  </Nav.Link>
                </Nav.Item>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
