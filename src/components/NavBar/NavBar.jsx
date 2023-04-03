import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <div>
        <Navbar bg="ligth" expand="lg">
            <Container fluid className=''>
                <Navbar.Brand href="#">Pipe's Destilados</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-5 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Inicio</Nav.Link>
                    <NavDropdown title="Productos" id="navbarScrollingDropdown">
                    <NavDropdown.Item className="m-auto my-15 d-flex justify-content-center" href="#action3">Cervezas</NavDropdown.Item>
                    <NavDropdown.Item className="m-auto my-15 d-flex justify-content-center" href="#action4">Licores</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav.Link href="#">
                    <CartWidget/>
                </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar