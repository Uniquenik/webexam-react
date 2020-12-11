import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import classes from './css-modules/Fourth-screen.module.css';
import laptop from './../pictures/laptop.png'



const Fourth_screen = () => {
  return (
    <div>
      <Container fluid="true"  className={classes.fourth_screen} >
        <Container className={classes.fourth_screen_wrapper}>
          <Row>
            <Col xs="12" lg="6" lg={{span: 6, offset: 6}}>
              <h2 className={classes.title}>Экспертиза в Drupal, опыт 14 лет!</h2>
              <Container className={classes.components_wrapper}>
                <Row>
                  <Col xs="12" sm="6" className={classes.component_wrapper}>
                    <div className={classes.component}>
                      Только системный подход - контроль версий, резервирование и тестирование!
                    </div>
                  </Col>
                  <Col xs="12" sm="6"className={classes.component_wrapper}>
                    <div className={classes.component}>
                      Только Drupal сайты, не берем на поддержку сайты на других CMS!
                    </div>
                  </Col>
                  <Col xs="12" sm="6" className={classes.component_wrapper}>
                    <div className={classes.component}>
                      Учавствуем в разработке ядра Drupal и модулей на Drupal.org,
                      разрабатываем <span className={classes.color_text}>свои модули на Drupal</span>
                    </div>
                  </Col>
                  <Col xs="12" sm="6" className={classes.component_wrapper}>
                    <div className={classes.component}>
                      Поддерживаем сайты на Drupal 5, 6, 7 и 8
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <div className={classes.img_container}>
          <img alt="" src={laptop} />
        </div>
      </Container>
    </div>
  )
}

export default Fourth_screen;
