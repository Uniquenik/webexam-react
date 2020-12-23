import React from "react";
import { Container,  Col, Row } from "react-bootstrap";
import classes from './css-modules/Twelve-screen.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import dfly from './../pictures/Dfly.svg';
import D from './../pictures/D.svg';
import phone from './../pictures/phone.svg';
import mail from './../pictures/Mail.svg';
import Form from './Form.js';

const Twelve_screen = () => {
    return (
        <Container fluid className={classes.maincontainer}>
            <div className={classes.ddiv}><img className={classes.dimg} src={dfly} alt="" /></div>
            <Container className={classes.cont}>
                <Row>
                    <Col xs="12" lg="5">
                        <div><h2 className={classes.h2}>Оставить заявку на поддержку сайта</h2>
                            <div className={classes.h21}>
                                Срочно нужна поддержка сайта? Ваша команда не успевает справиться самостоятельно или предыдущий подрядчик не справился с работой? Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с вами свяжется!
                            </div>
                        </div>
                        <div className={classes.address}>
                            <div className={classes.contacts}><img src={phone} className={classes.contactsimgphone} alt="" />8 800 222-26-73</div>
                            <div className={classes.contactsmail}><img src={mail} className={classes.contactsimg} alt="" />info@drupal-coder.ru</div>
                        </div>
                    </Col>
                    <Col className={classes.forms} xs="12" lg={{ span: 5, offset: 2 }}>
                        <div>
                            <Form/>  
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className={classes.footer}>
            <div className={classes.ddivd}><img className={classes.dimg} src={D} alt="" /></div>
                <Container>
                <div className={classes.firstend}>Проект ООО "Инитлаб", Краснодар, Россия</div>
                <div className={classes.secondend}>Drupal является зарегистрированной торговой маркой Dries Buytaert</div>
                </Container>
            </Container>
        </Container>
    )



}
export default Twelve_screen;
