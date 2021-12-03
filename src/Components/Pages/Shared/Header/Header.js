import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-main py-2" variant="light">
            <Container>
            <Navbar.Brand className="text-white fs-4 fw-bold"> ashadul.me </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#features" className="fs-5 text-white text-uppercase">Protfolio</Nav.Link>
                    <Nav.Link href="#pricing" className="fs-5 text-white text-uppercase">Service</Nav.Link>
                    <Nav.Link href="#pricing" className="fs-5 text-white text-uppercase">Pricing</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;