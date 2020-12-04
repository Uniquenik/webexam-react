import React from 'react';
import { Navbar, NavDropdown, Row, Col, Container, Dropdown, Nav } from "react-bootstrap";
import classes from './css-modules/Navmobile.module.css';

const Navmobile = () => {
    return (
        <Navbar inverse fluid fixed="bottom" bg="light" expand="lg" className={classes.navbarmobile}>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle inverse aria-controls="basic-navbar-nav" />
        </Navbar>


    )



}

export default Navmobile;