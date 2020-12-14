import React from "react";
import { Container, InputGroup, FormControl, Col, Row } from "react-bootstrap";
import classes from './css-modules/Twelve-screen.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import dfly from './../pictures/Dfly.svg';
import phone from './../pictures/phone.svg';
import mail from './../pictures/Mail.svg';

const Twelve_screen = () => {
    return (

        <Container fluid className={classes.maincontainer}>
            <div className={classes.ddiv}><img className={classes.dimg} src={dfly} alt="" /></div>
            <Container className={classes.cont}>
                <Row>
                    <Col xs="12" md="5">

                        <div><h2 className={classes.h2}>Оставить заявку на поддержку сайта</h2>
                            <div className={classes.h21}>
                                Срочно нужна поддержка сайта? Ваша команда не успевает справиться самостоятельно или предыдущий подрядчик не справился с работой? Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с вами свяжется!
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" md={{ span: 5, offset: 2 }}>
                        <div>
                            <InputGroup className="mb-3">
                                <FormControl className={classes.formback}
                                    placeholder="Ваше имя"
                                    aria-label="Username"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <FormControl className={classes.formback}
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <FormControl className={classes.formback} id="basic-url" />
                            </InputGroup>

                            <InputGroup>
                                <FormControl className={classes.formback} as="textarea" aria-label="With textarea" />
    </InputGroup> 
                        </div>
                    </Col>
                    <Col xs="12" md="5">
                        <div className={classes.contacts}><img src={phone} className={classes.contactsimg} alt="" />8 800 222-26-73</div>
                        <div className={classes.contactsmail}><img src={mail} className={classes.contactsimg} alt=""/>info@drupal-coder.ru</div>
                    </Col>
                </Row>
            </Container>
        </Container>




    )



}
export default Twelve_screen;