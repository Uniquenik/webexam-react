import React from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";
import classes from './css-modules/Third-screen.module.css';

const Third_screen = () => {
  return (
    <Container fluid="true" className={classes.third_screen}>
      <Container className={classes.third_screen_wrapper}>
        <h2 className={classes.title} style={{paddingBottom: '50px'}}>Поддержка <br /> от Drupal-coder</h2>
        <Row className={classes.cards_wrapper}>
          <Col lg="3" sm="6" xs="12">
            <Card className={classes.card}>
              <Card.Body>
                <Card.Text className={classes.card_number}>01.</Card.Text>
                  <Card.Title className={classes.card_title}>Постановка задачи по Email</Card.Title>
                <Card.Text className={classes.card_text}>Удобная и привычная модель постановки задач, при
                которой задачи фиксируются и никогда не теряются.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6" xs="12">
            <Card className={classes.card}>
              <Card.Body>
                <Card.Text className={classes.card_number}>02.</Card.Text>
                  <Card.Title className={classes.card_title}>Система Helpdesk - отчетность, прозрачность</Card.Title>
                <Card.Text className={classes.card_text}>Возможность посмотреть все заявки в работе и отработанные часы
                  в личном кабинете через браузер.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6" xs="12">
            <Card className={classes.card}>
              <Card.Body>
                <Card.Text className={classes.card_number}>03.</Card.Text>
                  <Card.Title className={classes.card_title}>Расширенная техническая поддержка</Card.Title>
                <Card.Text className={classes.card_text}>Возможность организации расширенной техподдержки с 6:00
                  до 22:00 без выходных.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6" xs="12">
            <Card className={classes.card}>
              <Card.Body>
                <Card.Text className={classes.card_number}>04.</Card.Text>
                  <Card.Title className={classes.card_title}>Персональный менеджер проекта</Card.Title>
                <Card.Text className={classes.card_text}>Ваш менеджер проекта всегда в курсе текущего состояния проекта и
                  в любой момент готов ответить на любые вопросы.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6" xs="12">
            <Card className={classes.card}>
              <Card.Body>
                <Card.Text className={classes.card_number}>05.</Card.Text>
                  <Card.Title className={classes.card_title}>Удобные способы оплаты</Card.Title>
                <Card.Text className={classes.card_text}>Безналичный расчет по договору или электронные деньги:
                  WebMoney, Яндекс.Деньги, Paypal.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6" xs="12">
            <Card className={classes.card}>
              <Card.Body>
                <Card.Text className={classes.card_number}>06.</Card.Text>
                  <Card.Title className={classes.card_title}>Работаем с SLA и NDA</Card.Title>
                <Card.Text className={classes.card_text}>Работа в рамках соглашения о конфиденциальности и об
                  уровне качества работ.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6" xs="12">
            <Card className={classes.card}>
              <Card.Body>
                <Card.Text className={classes.card_number}>07.</Card.Text>
                  <Card.Title className={classes.card_title}>Штатные специалисты</Card.Title>
                <Card.Text className={classes.card_text}>Надежные штатные специалисты, никаких фрилансеров.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6" xs="12">
            <Card className={classes.card}>
              <Card.Body>
                <Card.Text className={classes.card_number}>08.</Card.Text>
                  <Card.Title className={classes.card_title}>Удобные каналы связи</Card.Title>
                <Card.Text className={classes.card_text}>Консультации по телефону, по скайпу, в месенджерах.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Third_screen;