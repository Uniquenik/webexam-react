import React from 'react';
import { Row, Col, Container, Button } from "react-bootstrap";
import classes from './css-modules/Seventh-screen.module.css';
import icon_1 from './../pictures/IMG_2472_0.jpg';
import icon_2 from './../pictures/IMG_2474_1.jpg';
import icon_3 from './../pictures/IMG_2522_0.jpg';
import icon_4 from './../pictures/IMG_2539_0.jpg';
import icon_5 from './../pictures/IMG_9971_16.jpg';


const Seventh_screen = () => {
  return (
    <Container fluid="true" className={classes.screen}>
      <Container>
        <h2 className={classes.title}>Команда</h2>
        <Row>
          <Col md="4" xs="6" sm="6" className={classes.component_wrapper} >
            <img alt="" src={icon_1} className={classes.icon}/>
            <h3 className={classes.component_title}>Сергей Синица</h3>
            <div className={classes.component_description}>
              Руководитель отдела веб-разработки, канд. техн. наук, заместитель директора
            </div>
          </Col>
          <Col md="4" xs="6" sm="6" className={classes.component_wrapper}>
            <img alt="" src={icon_2} className={classes.icon}/>
            <h3 className={classes.component_title}>Роман Агабеков</h3>
            <div className={classes.component_description}>
              Руководитель отдела DevOPS, директор
            </div>
          </Col>
          <Col md="4" xs="6" sm="6" className={classes.component_wrapper}>
            <img alt="" src={icon_4} className={classes.icon}/>
            <h3 className={classes.component_title}>Алексей Синица</h3>
            <div className={classes.component_description}>
              Руководитель отдела поддержки сайтов
            </div>
          </Col>
          <Col md="4" xs="6" sm="6" className={classes.component_wrapper}>
            <img alt="" src={icon_3} className={classes.icon}/>
            <h3 className={classes.component_title}>Дарья Бочкарёва</h3>
            <div className={classes.component_description}>
              Руководитель отдела продвижения, контекстной рекламы и
              контент-поддержки сайтов
            </div>
          </Col>
          <Col md="4" xs="6" sm="6" className={classes.component_wrapper}>
            <img alt="" src={icon_5} className={classes.icon}/>
            <h3 className={classes.component_title}>Ирина Торкунова</h3>
            <div className={classes.component_description}>
              Менеджер по работе с клиентами
            </div>
          </Col>
        </Row>
        <div className={classes.btn_wrapper}>
          <Button variant="outline-dark" className={classes.btn}>Вся команда</Button>
        </div>
      </Container>
    </Container>
  )
}

export default Seventh_screen;
