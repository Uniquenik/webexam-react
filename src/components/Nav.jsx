import React from 'react';
import { Navbar, Dropdown, Row, Col, Container } from "react-bootstrap";
import classes from './Navcss.module.css';
import logopc from '../pictures/drupal-coder.svg'

const Nav = () => {
    return (
        <Container fluid className={classes.main_screen}>
            <div className={classes.navbarpc}>
                <Navbar className="navbar-black">
                    <Row>
                        <Col xs="2">
                            <Navbar.Brand href="#home">
                                <img
                                    alt=""
                                    src={logopc}
                                    className={classes.icon}
                                />{' '}

                        </Navbar.Brand>
                        </Col>
                        <Col lg="10" md="12">
                            <div className={classes.navbar}>
                                <a href="https://example.com">Поддержка Drupal</a>
                                <Dropdown className={classes.dropdown}>
                                    <Dropdown.Toggle aria-labelledby="dLabel" id="dropdown-basic"> Администрирование</Dropdown.Toggle>
                                    <Dropdown.Menu className={classes.dropdown_menu}>
                                        <Dropdown.Item className={classes.dropdown_item} href="#action-1"> Action</Dropdown.Item>
                                        <Dropdown.Item className={classes.dropdown_item} href="#action-2"> Action</Dropdown.Item>
                                        <Dropdown.Item className={classes.dropdown_item} href="#action-3"> Fuck</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <a href="https://example.com">Продвижение</a>
                                <a href="https://example.com">Реклама</a>
                                <div className="dropdown dropdown1">
                                    <a id="drop2" class="dropdown-toggle" data-toggle="dropdown" href="#">О нас</a>
                                    <ul className="dropdown-menu dropdown-menu1" role="menu" aria-labelledby="dLabel">
                                        <a className="dropdown-item" href="https://example.com">Первое действие</a>
                                        <a className="dropdown-item" href="https://example.com">Второе действие</a>
                                        <a className="dropdown-item" href="https://example.com">Безысходность</a>
                                    </ul>
                                </div>
                                <a href="https://example.com">Продвижение</a>
                                <a href="https://example.com">Контакты</a>
                            </div>
                        </Col>
                    </Row>
                </Navbar>
            </div>
        </Container>
    )
}

export default Nav;
