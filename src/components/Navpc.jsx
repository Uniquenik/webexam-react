import React from 'react';
import { Navbar, NavDropdown, Row, Col, Container, Dropdown, Nav } from "react-bootstrap";
import classes from './Navpccss.module.css';
import logopc from './drupal-coder.svg'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
      &#x25bc;
    </a>
));

const Navpc = () => {
    return (
        <Container fluid className={classes.main_screen}>
            <Container>
                <Navbar className={classes.navbarpc} collapseOnSelect expand="md">
                    <Row>
                        <Col xs="2">
                            <Navbar.Brand href="#home"> <img className={classes.icon} src={logopc} /></Navbar.Brand>
                        </Col>
                        <Col lg="12" xl="10">
                            <Container>
                                <div className={classes.navbar}>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="mr-auto">
                                            <div className={classes.downchoice}>
                                                <a href="#features"> Поддержка Drupal</a>
                                            </div>
                                            <Dropdown className={classes.dropdown}>
                                                <div className={classes.downchoice}>
                                                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                                        Администрирование
                                                </Dropdown.Toggle>
                                                </div>
                                                <div className={classes.dropchoice}>
                                                    <Dropdown.Menu className={classes.dropdown_menu}>
                                                        <Dropdown.Item className={classes.dropdown_item} href="#action/3.1">Оптимизация скорости</Dropdown.Item>
                                                        <Dropdown.Item className={classes.dropdown_item} href="#action/3.2">Another action</Dropdown.Item>
                                                        <Dropdown.Item className={classes.dropdown_item} href="#action/3.3">Something</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </div>
                                            </Dropdown>
                                            <div className={classes.downchoice}>
                                                <a href="#features"> Продвижение</a>
                                                <a href="#features"> Реклама</a>
                                            </div>
                                            <Dropdown className={classes.dropdown}>
                                                <div className={classes.downchoice}>
                                                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                                        О нас
                                                </Dropdown.Toggle>
                                                </div>
                                                <Dropdown.Menu className={classes.dropdown_menu}>
                                                    <Dropdown.Item className={classes.dropdown_item} href="#action/3.1">Action</Dropdown.Item>
                                                    <Dropdown.Item className={classes.dropdown_item} href="#action/3.2">Another action</Dropdown.Item>
                                                    <Dropdown.Item className={classes.dropdown_item} href="#action/3.3">Something</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <div className={classes.downchoice}>
                                                <a href="#features"> Проекты</a>
                                                <a href="#features"> Контакты</a>
                                            </div>
                                        </Nav>
                                    </Navbar.Collapse>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Navbar>
            </Container>
        </Container>
    )
}

export default Navpc;