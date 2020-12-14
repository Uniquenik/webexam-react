import React from 'react';
import { Navbar, Dropdown, Nav } from "react-bootstrap";
import classes from './css-modules/Navmobile.module.css';
import logomb from './../pictures/drupal-coder.svg'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href="/sas"
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


const Navmobile = () => {
    return (
        <Navbar fluid="true" fixed="bottom" variant="dark" expand="lg" className={classes.navbarmobile}>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <div className={classes.menu}>
                        <ul>
                            <li className={classes.dropmobile_item}><div >
                                <a href="#features" className={classes.items}> Поддержка Drupal</a>
                            </div>
                            </li>
                            <li ><Dropdown className={classes.dropmobile}>
                                <div className={classes.dropmobile_item}>
                                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                        Администрирование 
                                    </Dropdown.Toggle>
                                </div>
                                <div className={classes.dropchoice}>
                                    <Dropdown.Menu className={classes.dropdown_menu} show="true">
                                        <Dropdown.Item className={classes.dropmobile_item1} href="#action/1.1">Миграция</Dropdown.Item>
                                        <Dropdown.Item className={classes.dropmobile_item1} href="#action/1.2">Бэкапы</Dropdown.Item>
                                        <Dropdown.Item className={classes.dropmobile_item1} href="#action/1.3">Аудит безопасности</Dropdown.Item>
                                        <Dropdown.Item className={classes.dropmobile_item1} href="#action/1.4">Оптимизация скорости</Dropdown.Item>
                                        <Dropdown.Item className={classes.dropmobile_item1} href="#action/1.5">Переезд на HTTPS</Dropdown.Item>
                                    </Dropdown.Menu>
                                </div>
                            </Dropdown>
                            </li>
                            <li>
                                <div className={classes.dropmobile_item}>
                                    <a href="#features" className={classes.items}> Продвижение</a>
                                </div>
                            </li>
                            <li>
                                <div className={classes.dropmobile_item}>
                                    <a href="#features" className={classes.items}> Реклама</a>
                                </div>

                            </li>
                            <li>
                                <Dropdown className={classes.dropdown}>
                                    <div className={classes.dropmobile_item}>
                                        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                            О нас
                                        </Dropdown.Toggle>
                                    </div>
                                    <Dropdown.Menu className={classes.dropdown_menu} show="true">
                                        <Dropdown.Item className={classes.dropmobile_item1} href="#action/2.1">Команда</Dropdown.Item>
                                        <Dropdown.Item className={classes.dropmobile_item1} href="#action/2.2">DRUPALGIVE</Dropdown.Item>
                                        <Dropdown.Item className={classes.dropmobile_item1} href="#action/2.3">Блог</Dropdown.Item>
                                        <Dropdown.Item className={classes.dropmobile_item1} href="#action/2.4">Курсы DRUPAL</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li>
                                <div className={classes.dropmobile_item}>
                                    <a href="#features" className={classes.items}> Проекты</a>
                                </div>
                            </li>
                            <li>
                                <div className={classes.dropmobile_item}>
                                    <a href="#features" className={classes.items}> Контакты</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="#home"><img className={classes.icon} src={logomb} alt="" /></Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>


    )



}

export default Navmobile;
