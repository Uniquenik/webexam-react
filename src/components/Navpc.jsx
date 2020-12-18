import React from 'react';
import { Navbar, Row, Col, Dropdown, Nav } from "react-bootstrap";
import classes from './css-modules/Navpccss.module.css';
import logopc from './../pictures/drupal-coder.svg'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href="/sas"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}>
        {children}
        <span>&nbsp;&nbsp;</span>
      &#x25bc;
    </a>
));


const Navpc = () => {
    return (
        <Navbar className={classes.navbarpc} collapseOnSelect expand="md">
            <Row>
                <Col xs="2">
                    <Navbar.Brand href="#home"> <img className={classes.icon} src={logopc} alt="" /></Navbar.Brand>
                </Col>
                <Col lg="12" xl="10">
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
                                        <li><Dropdown className={classes.dropdown} >
                                            <div className={classes.downchoice}>
                                                <Dropdown.Toggle as={CustomToggle} classItem={classes.toggle} id="dropdown-custom-components" >
                                                    Администрирование
                                                </Dropdown.Toggle>
                                            </div>
                                            <div className={classes.dropchoice}>
                                                <Dropdown.Menu className={classes.dropdown_menu}>
                                                    <Dropdown.Item className={classes.dropdown_item} href="#action/1.1">Миграция</Dropdown.Item>
                                                    <Dropdown.Item className={classes.dropdown_item} href="#action/1.2">Бэкапы</Dropdown.Item>
                                                    <Dropdown.Item className={classes.dropdown_item} href="#action/1.3">Аудит безопасности</Dropdown.Item>
                                                    <Dropdown.Item className={classes.dropdown_item} href="#action/1.4">Оптимизация скорости</Dropdown.Item>
                                                    <Dropdown.Item className={classes.dropdown_item} href="#action/1.5">Переезд на HTTPS</Dropdown.Item>
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
                                                <div className={classes.dropchoice}>
                                                    <Dropdown.Menu className={classes.dropdown_menu1}>
                                                        <Dropdown.Item className={classes.dropdown_item1} href="#action/2.1">Команда</Dropdown.Item>
                                                        <Dropdown.Item className={classes.dropdown_item1} href="#action/2.2">DRUPALGIVE</Dropdown.Item>
                                                        <Dropdown.Item className={classes.dropdown_item1} href="#action/2.3">Блог</Dropdown.Item>
                                                        <Dropdown.Item className={classes.dropdown_item1} href="#action/2.4">Курсы DRUPAL</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </div>
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
