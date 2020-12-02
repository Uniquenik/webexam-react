import React from 'react';
import { Navbar, NavDropdown, Row, Col, Container, Dropdown, Nav } from "react-bootstrap";
import classes from './css-modules/Navpccss.module.css';
import logopc from './../pictures/drupal-coder.svg'

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
        <Navbar className={classes.navbarpc} collapseOnSelect expand="md">
            <Row>
                <Col xs="2">
                    <Navbar.Brand href="#home"> <img className={classes.icon} src={logopc} /></Navbar.Brand>
                </Col>
                <Col md="16" lg="12" xl="10">

                    <div className={classes.navbar}>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <div className={classes.menu}>
                                    <ul>
                                        <li><div className={classes.downchoice}>
                                            <a href="#features"> Поддержка Drupal</a>
                                        </div>
                                        </li>
                                        <li><Dropdown className={classes.dropdown}>
                                            <div className={classes.downchoice}>
                                                <Dropdown.Toggle as={CustomToggle} classItem={classes.toggle} id="dropdown-custom-components">
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
                                        </li>
                                        <li>
                                            <div className={classes.downchoice}>
                                                <a href="#features"> Продвижение</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={classes.downchoice}>
                                                <a href="#features"> Реклама</a>
                                            </div>


                                        </li>
                                        <li>
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
                                        </li>
                                        <li>
                                            <div className={classes.downchoice}>
                                                <a href="#features"> Проекты</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={classes.downchoice}>
                                                <a href="#features"> Контакты</a>
                                            </div>


                                        </li>
                                    </ul>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Col>
            </Row >
        </Navbar >
    )
}

export default Navpc;
