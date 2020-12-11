import React from 'react';
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import classes from './css-modules/Five-screen.module.css';

const Five_screen = () => {
  return (
    <Container fluid="true" className={classes.screen}>
      <Container>
        <h1 className={classes.title}>Тарифы</h1>
        <Row>
          <Col md="4" xs="12">
            <Card className={classes.card}>
              <Card.Body>
                <Card.Title className={classes.card_title}>Стартовый</Card.Title>
                <Card.Text className={classes.card_text}>
                  <ol>
                    <li>Консультации и работы по SEO</li>
                    <li>Услуги дизайнера</li>
                    <li>Неиспользованные оплаченные часы переводятся на следующий месяц</li>
                    <li>Предоплата от 6 000 рублей в месяц</li>
                  </ol>

                </Card.Text>
                <Button className={classes.btn} block>Свяжитесь с нами!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" xs="12">
            <Card className={classes.main_card}>
              <Card.Body>
                <Card.Title className={classes.card_title}>Бизнес</Card.Title>
                <Card.Text className={classes.card_text}>
                </Card.Text>
                <Button className={classes.btn} block>Свяжитесь с нами!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" xs="12">
            <Card className={classes.card}>
              <Card.Body>
                <Card.Title className={classes.card_title}>VIP</Card.Title>
                <Card.Text className={classes.card_text}>
                </Card.Text>
                <Button className={classes.btn} block>Свяжитесь с нами!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Five_screen;
