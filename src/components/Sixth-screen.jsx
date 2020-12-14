import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import classes from './css-modules/Sixth-screen.module.css';
import icon_1 from './../pictures/competency-20.svg';
import icon_2 from './../pictures/competency-21.svg';
import icon_3 from './../pictures/competency-22.svg';
import drupal from './../pictures/drupal-coder-icon.svg';


const Sixth_screen = () => {
  return (
    <Container fluid="true" className={classes.screen}>
      <Container>
        <h2 className={classes.title}>Наши профессиональные разработчики выполняют быстро любые задачи</h2>
        <Row>
          <Col className={classes.component_wrapper} xs={{span: 8, offset: 2}} sm={{span: 4, offset: 0}}>
            <div className={classes.icons_wrapper}>
              <img alt="" src={drupal} className={classes.back_icon}/>
              <img alt ="" src={icon_1} className={classes.front_icon}/>
            </div>
            <h2 className={classes.icon_title}>от 1ч</h2>
            <div className={classes.icon_description}>
              Настройка события GA в интернет-магазине
            </div>
          </Col>
          <Col className={classes.component_wrapper} xs={{span: 8, offset: 2}} sm={{span: 4, offset: 0}}>
            <div className={classes.icons_wrapper}>
              <img alt="" src={drupal} className={classes.back_icon}/>
              <img alt ="" src={icon_2} className={classes.front_icon}/>
            </div>
            <h2 className={classes.icon_title}>от 20ч</h2>
            <div className={classes.icon_description}>
              Разработка мобильной версии сайта
            </div>
          </Col>
          <Col className={classes.component_wrapper} xs={{span: 8, offset: 2}} sm={{span: 4, offset: 0}}>
            <div className={classes.icons_wrapper}>
              <img alt="" src={drupal} className={classes.back_icon}/>
              <img alt ="" src={icon_3} className={classes.front_icon}/>
            </div>
            <h2 className={classes.icon_title}>от 8ч</h2>
            <div className={classes.icon_description}>
              Интеграция модуля оплаты
            </div>
          </Col>
        </Row>

      </Container>
    </Container>

  )
}

export default Sixth_screen;
