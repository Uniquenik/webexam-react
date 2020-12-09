import React from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";
import classes from './css-modules/Third-screen.module.css';
import support1 from './../pictures/support1.svg';
import support2 from './../pictures/support2.svg';
import support3 from './../pictures/support3.svg';
import support4 from './../pictures/support4.svg';
import support5 from './../pictures/support5.svg';
import support6 from './../pictures/support6.svg';
import support7 from './../pictures/support7.svg';
import support8 from './../pictures/support8.svg';
import Fourth_screen from './Fourth-screen.jsx';

const Third_screen = () => {
  return (
    <Container fluid="true" className={classes.third_screen}>
      <Container className={classes.third_screen_wrapper} >
        <h2 className={classes.title}>Поддержка <br /> от Drupal-coder</h2>
        <Row className={classes.cards_wrapper}>
          <Col lg="3" sm="6" xs="12" className={classes.card_wrapper}>
            <Card className={classes.card}>
              <Card.Body>
                <Card.Text className={classes.card_number}>01.</Card.Text>
                  <Card.Title className={classes.card_title}>Постановка задачи по Email</Card.Title>
                <Card.Text className={classes.card_text}>Удобная и привычная модель постановки задач, при
                которой задачи фиксируются и никогда не теряются.</Card.Text>
              <div  className={classes.card_icon}>
                <img alt="" src={support1}></img>
              </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6" xs="12" className={classes.card_wrapper}>
            <Card className={classes.card}>
              <Card.Body>
                <Card.Text className={classes.card_number}>02.</Card.Text>
                  <Card.Title className={classes.card_title}>Система Helpdesk - отчетность, прозрачность</Card.Title>
                <Card.Text className={classes.card_text}>Возможность посмотреть все заявки в работе и отработанные часы
                  в личном кабинете через браузер.</Card.Text>
                  <div  className={classes.card_icon}>
                    <img alt="" src={support2}></img>
                  </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6" xs="12" className={classes.card_wrapper}>
            <Card className={classes.card}>
              <Card.Body>
                <Card.Text className={classes.card_number}>03.</Card.Text>
                  <Card.Title className={classes.card_title}>Расширенная техническая поддержка</Card.Title>
                <Card.Text className={classes.card_text}>Возможность организации расширенной техподдержки с 6:00
                  до 22:00 без выходных.</Card.Text>
                  <div  className={classes.card_icon}>
                    <img alt="" src={support3}></img>
                  </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6" xs="12" className={classes.card_wrapper}>
            <Card className={classes.card}>
              <Card.Body>
                <Card.Text className={classes.card_number}>04.</Card.Text>
                  <Card.Title className={classes.card_title}>Персональный менеджер проекта</Card.Title>
                <Card.Text className={classes.card_text}>Ваш менеджер проекта всегда в курсе текущего состояния проекта и
                  в любой момент готов ответить на любые вопросы.</Card.Text>
                  <div  className={classes.card_icon}>
                    <img alt="" src={support4}></img>
                  </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6" xs="12" className={classes.card_wrapper}>
            <Card className={classes.card}>
              <Card.Body>
                <Card.Text className={classes.card_number}>05.</Card.Text>
                  <Card.Title className={classes.card_title}>Удобные способы оплаты</Card.Title>
                <Card.Text className={classes.card_text}>Безналичный расчет по договору или электронные деньги:
                  WebMoney, Яндекс.Деньги, Paypal.</Card.Text>
                  <div  className={classes.card_icon}>
                    <img alt="" src={support5}></img>
                  </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6" xs="12" className={classes.card_wrapper}>
            <Card className={classes.card}>
              <Card.Body>
                <Card.Text className={classes.card_number}>06.</Card.Text>
                  <Card.Title className={classes.card_title}>Работаем с SLA и NDA</Card.Title>
                <Card.Text className={classes.card_text}>Работа в рамках соглашения о конфиденциальности и об
                  уровне качества работ.</Card.Text>
                  <div  className={classes.card_icon}>
                    <img alt="" src={support6}></img>
                  </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6" xs="12" className={classes.card_wrapper}>
            <Card className={classes.card}>
              <Card.Body>
                <Card.Text className={classes.card_number}>07.</Card.Text>
                  <Card.Title className={classes.card_title}>Штатные специалисты</Card.Title>
                <Card.Text className={classes.card_text}>Надежные штатные специалисты, никаких фрилансеров.</Card.Text>
                  <div  className={classes.card_icon}>
                    <img alt="" src={support7}></img>
                  </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6" xs="12" className={classes.card_wrapper}>
            <Card className={classes.card}>
              <Card.Body>
                <Card.Text className={classes.card_number}>08.</Card.Text>
                  <Card.Title className={classes.card_title}>Удобные каналы связи</Card.Title>
                <Card.Text className={classes.card_text}>Консультации по телефону, по скайпу, в месенджерах.</Card.Text>
                  <div  className={classes.card_icon}>
                    <img alt="" src={support8}></img>
                  </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Third_screen;
