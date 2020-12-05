import React from 'react';
import { Navbar, Dropdown, Row, Col, Container } from "react-bootstrap";
import classes from './css-modules/First-screen.module.css';
import golden_finger from './../pictures/cup.png';
import Nav from './Navpc.jsx';
import video from './../pictures/video.mp4';

const First_screen = () => {
  return (
    <div>
      <div className={classes.fixwidth}>
            <div className={classes.overlay}>
              <video loop="loop" playsinline autoplay="" muted="">
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div className={classes.background}></div>
          </div>
      <Container fluid="true" className={classes.main_screen}>
        <Container className={classes.first_screen_wrapper}>
          <Nav />
          {/*First screen*/}
          <Row>
            {/*Тайтл и описание на главной*/}
            <Col lg="6" xs="12">
              <h1 className={classes.title}>
                Поддержка
          <br />cайтов на Drupal
          </h1>
              <div className={classes.description}>
                Сопровождение и поддержка сайтов
            <br /> на CMS Drupal любых версий и запущенности
          </div>
              <div className={classes.button_section}>
                <a href="" className={classes.btn_tariff}>Тарифы</a>
              </div>
            </Col>
            {/*6 иконок на главной*/}
            <Col lg="6" xs="12">
              <Row mb="5" className={classes.second_section}>
                <Col sm="4" xs="6" className={classes.second_section_comp_wrapper}>
                  <div className={classes.second_section_component}>
                    <div className={classes.second_section_title} style={{ fontSize: '45px', marginTop: '-35px' }}>
                      #1
                  <img alt="" src={golden_finger}></img>
                    </div>
                    <div className={classes.second_section_description}>
                      Drupal - разработчик в России по версии Рейтинга Рунета
                </div>
                  </div>
                </Col>
                <Col sm="4" xs="6" className={classes.second_section_comp_wrapper}>
                  <div className={classes.second_section_component}>
                    <div className={classes.second_section_title}>3+</div>
                    <div className={classes.second_section_description}>средний опыт специалистов более 3 лет</div>
                  </div>
                </Col>
                <Col sm="4" xs="6" className={classes.second_section_comp_wrapper}>
                  <div className={classes.second_section_component}>
                    <div className={classes.second_section_title}>14</div>
                    <div className={classes.second_section_description}>лет опыта в сфере Drupal</div>
                  </div>
                </Col>
                <Col sm="4" xs="6" className={classes.second_section_comp_wrapper}>
                  <div className={classes.second_section_component}>
                    <div className={classes.second_section_title}>50+</div>
                    <div className={classes.second_section_description}>Модулей и тем в формате DrupalGive</div>
                  </div>
                </Col>
                <Col sm="4" xs="6" className={classes.second_section_comp_wrapper}>
                  <div className={classes.second_section_component}>
                    <div className={classes.second_section_title}>90 000+</div>
                    <div className={classes.second_section_description}>часов поддержки сайтов на Drupal</div>
                  </div>
                </Col>
                <Col sm="4" xs="6" className={classes.second_section_comp_wrapper}>
                  <div className={classes.second_section_component}>
                    <div className={classes.second_section_title}>300+</div>
                    <div className={classes.second_section_description}>проектов на поддержке</div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default First_screen;
