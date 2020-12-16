import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import classes from './css-modules/mosaic-eight.module.css';
import icon1 from './../pictures/mosaic_1.svg';

const Eight_screen = () => {
  return (
    <Container fluid="true" className={classes.screen}>
      <Container>
        <Row>
          <Col xs="12" md="4">
            <img alt="" src={icon1} className={classes.icon}/>
            <div className={classes.text_wrapper}>
              <h3 className={classes.component_title}>
                Настройка кэширования данных. Апгрейд сервера.
                Ускорение работы сайта в 30 раз!
              </h3>
              <h6 className={classes.date}>04.05.2020</h6>
              <h4 className={classes.component_description}>
                Влияние скорости загрузки страниц сайта на отказы и конверсии.
                Кейс ускорения...
              </h4>
            </div>
          </Col>
          <Col xs="12" md="8">
            <div className={classes.second_component}>
              <h3 className={classes.component_title}>
                Использование отчетов Ecommerce в Яндекс.Метрике
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Eight_screen;
