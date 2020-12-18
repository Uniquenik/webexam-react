import React from 'react';
import {Row, Col, Container, Card} from "react-bootstrap";
import classes from './css-modules/Five-screen.module.css';
import drupal from './../pictures/drupal-back.svg';
import {Link} from 'react-router-dom';

const Five_screen = () => {
  return (
  <Container fluid="true" className={classes.screen}>
    <div className={classes.back}>
      <img alt="" src={drupal} />
    </div>
    <Container>
      <h1 id="tarif" className={classes.title}>Тарифы</h1>
      <Row>
        <Col lg="4" xs="12" className={classes.card_wrapper}>
          <Card className={classes.card}>
            <Card.Body className={classes.card_body}>
              <Card.Title className={classes.card_title}>Стартовый</Card.Title>
              <div className={classes.card_text}>
                <ul className={classes.list}>
                  <li className={classes.list_item}>Консультации и работы по SEO</li>
                  <li className={classes.list_item}>Услуги дизайнера</li>
                  <li className={classes.list_item}>Неиспользованные оплаченные часы переводятся на следующий месяц</li>
                  <li className={classes.list_item}>Предоплата от 6 000 рублей в месяц</li>
                </ul>
              </div>
            </Card.Body>
            <div className={classes.btn_wrapper}>
            <Link to='/form' className={classes.butt}>Свяжитесь с нами!</Link>
            </div>
          </Card>
        </Col>
        <Col lg="4" xs="12" className={classes.card_wrapper}>
          <Card className={classes.card}>
            <Card.Body className={classes.card_body}>
              <Card.Title className={classes.card_title}>Бизнес</Card.Title>
              <div className={classes.card_text}>
                <ul className={classes.list}>
                  <li className={classes.list_item}>Консультации и работы по SEO</li>
                  <li className={classes.list_item}>Услуги дизайнера</li>
                  <li className={classes.list_item}>Высокое время реакции - до 2 рабочих дней</li>
                  <li className={classes.list_item}>Неиспользованные оплаченные часы не переносятся</li>
                  <li className={classes.list_item}>Предоплата от 30 000 рублей в месяц</li>
                </ul>
              </div>
            </Card.Body>
            <div className={classes.btn_wrapper}>
              <Link to='/form' className={classes.butt_main}>Свяжитесь с нами!</Link>
            </div>
          </Card>
        </Col>
        <Col lg="4" xs="12" className={classes.card_wrapper}>
          <Card className={classes.card}>
            <Card.Body className={classes.card_body}>
              <Card.Title className={classes.card_title}>VIP</Card.Title>
              <div className={classes.card_text}>
                <ul className={classes.list}>
                  <li className={classes.list_item}>Консультации и работы по SEO</li>
                  <li className={classes.list_item}>Услуги дизайнера</li>
                  <li className={classes.list_item}>Максимальное время реакции - в день обращения</li>
                  <li className={classes.list_item}>Неиспользованные оплаченные часы не переносятся</li>
                  <li className={classes.list_item}>Предоплата от 270 000 рублей в месяц</li>
                </ul>
              </div>
            </Card.Body>
            <div className={classes.btn_wrapper}>
            <Link to='/form' className={classes.butt}>Свяжитесь с нами!</Link>
            </div>
          </Card>
        </Col>
      </Row>
      <div className={classes.bottom_text1}>
        <span>Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам индивидульные условия!</span>
      </div>
      <div className={classes.bottom_text2}>
        <span>Получить индивидульный тариф</span>
      </div>
    </Container>
  </Container>
)
}

export default Five_screen;
