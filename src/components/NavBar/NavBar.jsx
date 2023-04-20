import { Link, NavLink } from 'react-router-dom';
import React from 'react'
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

  return (
    <div>
        <Navbar bg="ligth" expand="lg">
            <Container fluid className=''>
                <Link to='/' className='name_logo'>
                Pipe's Destilados
                </Link>
                <Link to='/cart' href="#">
                    <CartWidget/>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-5 my-lg-0"
                    style={{ maxHeight: '200px' }}
                    navbarScroll
                >
                    <Link to='/' className='nav_title'>Inicio</Link>
                    <NavLink to='/categoria/licor'className=" my-15 d-flex justify-content-center nav_title">Licor</NavLink>
                    <NavLink to='/categoria/destilado'className=" my-15 d-flex justify-content-center nav_title">Destilado</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar