import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import classes from './css-modules/Second-screen.module.css';
import icon_1 from './../pictures/competency-1.svg';
import icon_2 from './../pictures/competency-2.svg';
import icon_3 from './../pictures/competency-3.svg';
import icon_4 from './../pictures/competency-4.svg';
import icon_5 from './../pictures/competency-5.svg';
import icon_6 from './../pictures/competency-6.svg';
import icon_7 from './../pictures/competency-7.svg';
import icon_8 from './../pictures/competency-8.svg';
import drupal from './../pictures/drupal-coder-icon.svg';


const Second_screen = () => {
  return (
    <Container fluid="true" className={classes.second_screen}>
      <Container className={classes.second_screen_wrapper}>
        <Row>
          <Col xs="12">
            <h2 className={classes.title}> 13 лет совершенствуем
              <br />компетенции в Друпал
              <br />поддержке!
            </h2>
            <div className={classes.description}>
              Разрабатываем и оптимизируем модули, расширяем
              <br /> функциональность сайтов, обновляем дизайн
            </div>
          </Col>
          <Col xs="12">
            <Row>
              <Col md="3" xs="6" className={classes.icons_wrapper}>
                <div className={classes.icon_wrapper}>
                  <img alt="" src={drupal} className={classes.back_icon}/>
                  <img alt ="" src={icon_1} className={classes.front_icon}/>
                </div>
                <div className={classes.icon_description}>Добавление информации на сайт,
                   создание новых разделов</div>
              </Col>
              <Col md="3" xs="6" className={classes.icons_wrapper}>
                <div className={classes.icon_wrapper}>
                  <img alt="" src={drupal} className={classes.back_icon}/>
                  <img alt ="" src={icon_2} className={classes.front_icon}/>
                </div>
                <div className={classes.icon_description}>Разработка и оптимизация модулей сайта</div>
              </Col>
              <Col md="3" xs="6" className={classes.icons_wrapper}>
                <div className={classes.icon_wrapper}>
                  <img alt="" src={drupal} className={classes.back_icon}/>
                  <img alt ="" src={icon_3} className={classes.front_icon}/>
                </div>
                <div className={classes.icon_description}>Интеграция с CRM, 1C, платежными
                системами, любыми веб-сервисами</div>
              </Col>
              <Col md="3" xs="6" className={classes.icons_wrapper}>
                <div className={classes.icon_wrapper}>
                  <img alt="" src={drupal} className={classes.back_icon}/>
                  <img alt ="" src={icon_4} className={classes.front_icon}/>
                </div>
                <div className={classes.icon_description}>Любые доработки функционала и дизайна</div>
              </Col>
              <Col md="3" xs="6" className={classes.icons_wrapper}>
                <div className={classes.icon_wrapper}>
                  <img alt="" src={drupal} className={classes.back_icon}/>

                  <img alt ="" src={icon_5} className={classes.front_icon}/>
                </div>
                <div className={classes.icon_description}>Аудит и мониторинг безопасности Drupal сайтов</div>
              </Col>
              <Col md="3" xs="6" className={classes.icons_wrapper}>
                <div className={classes.icon_wrapper}>
                  <img alt="" src={drupal} className={classes.back_icon}/>
                  <img alt ="" src={icon_6} className={classes.front_icon}/>
                </div>
                <div className={classes.icon_description}>Миграция, импорт контента и апгрейд Drupal</div>
              </Col>
              <Col md="3" xs="6" className={classes.icons_wrapper}>
                <div className={classes.icon_wrapper}>
                  <img alt="" src={drupal} className={classes.back_icon}/>
                  <img alt ="" src={icon_7} className={classes.front_icon}/>
                </div>
                <div className={classes.icon_description}>Оптимизация и ускорение Drupal-сайтов</div>
              </Col>
              <Col md="3" xs="6" className={classes.icons_wrapper}>
                <div className={classes.icon_wrapper}>
                  <img alt="" src={drupal} className={classes.back_icon}/>
                  <img alt ="" src={icon_8} className={classes.front_icon}/>
                </div>
                <div className={classes.icon_description}>Веб-маркетинг, консультации и работы по SEO</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Second_screen;
