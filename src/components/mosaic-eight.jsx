import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import classes from './css-modules/mosaic-eight.module.css';
import icon1 from './../pictures/mosaic_1.svg';
import icon5 from './../pictures/mosaic_5.svg';

const Eight_screen = () => {
  return (
    <Container fluid="true" className={classes.screen}>
      <Container>
        <h2 className={classes.title} id="team">Последние кейсы</h2>
        <Row>
          <Col xs="12" md="4" className={classes.wrapper}>
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
          <Col xs="12" md="8" className={classes.wrapper}>
            <div className={classes.second_component}>
              <div className={classes.second_title_wrapper_special}>
                <h3 className={classes.component_title}>
                  Использование отчетов Ecommerce в Яндекс.Метрике
                </h3>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="4" className={classes.wrapper}>
            <div className={classes.third_component}>
              <div className={classes.second_title_wrapper}>
                <h3 className={classes.component_title}>
                  Повышение конверсии страницы с формой заявки  с применением
                  AB-тестирования
                </h3>
                <h6 className={classes.date}>24.01.2020</h6>
              </div>
            </div>
          </Col>
          <Col xs="12" md="4" className={classes.wrapper}>
            <div className={classes.fourth_component}>
              <div className={classes.second_title_wrapper}>
                <h3 className={classes.component_title}>
                  Drupal 7: ускорение времени генерации страниц
                  интернет-магазина на 32%
                </h3>
                <h6 className={classes.date}>23.09.2019</h6>
              </div>
            </div>
          </Col>
          <Col xs="12" md="4" className={classes.wrapper}>
            <img alt="" src={icon5} className={classes.icon}/>
            <div className={classes.text_wrapper}>
              <h3 className={classes.component_title}>
                Обмен товарами и заказами интернет-магазинов на <br /> Drupal 7 c 1C:
                Предприятие, МойСклад, Класс365
              </h3>
              <h6 className={classes.date}>22.08.2019</h6>
              <h4 className={classes.component_description}>
                Опубликован <span style={{color: 'blue'}}>релиз модуля...</span>
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Eight_screen;
