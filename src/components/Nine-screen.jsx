import React, { Component } from 'react';
import Slider from 'react-slick';
import { Container, Button, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './css-modules/Nine-screen.module.css';
import pic1 from './../pictures/lpcma_rus_v4.jpg'

export default class Nine_screen extends Component {
    state = {
        activeSlide: 0
    };
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        var settings = {
            className: "",
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: false,
            beforeChange: (current, next) => this.setState({ activeSlide: next }),
        };
        return (
            <div>
                <Col xs="12">
                    <h2 className={classes.h2}>Отзывы</h2>
                    <Container fluid className={classes.maincontainer}>
                        <Col lg={{ span: 10, offset: 1 }}>

                            <Container fluid className={classes.slickbuttoncontainer}>
                                <Col lg="8">
                                    <Container className={classes.slickcontainer}>
                                        <Slider {...settings} ref={c => (this.slider = c)}>
                                            <div className={classes.slide}>
                                                <div className={classes.picture}>
                                                    <img className={classes} src={pic1} />
                                                </div>
                                                <div className={classes.text}>
                                                    Долгие поиски единственного и неповторимого мастера на многострадальный сайт www.cielparfum.com, который был собран крайне некомпетентным программистом и раз в месяц стабильно грозил погибнуть, привели меня на сайт и, в итоге, к ребятам из Drupal-coder. И вот уже практически полгода как не проходит и дня, чтобы я не поудивлялась и не порадовалась своему везению! Починили все, что не работало - от поиска до отображения меню. Провели редизайн - не отходя от желаемого, но со своими существенными и качественными дополнениями. Осуществили ряд проектов - конкурсы, тесты и тд. А уж мелких починок и доработок - не счесть! И главное - все качественно и быстро (не взирая на не самый "быстрый" тариф). Есть вопросы - замечательный Алексей всегда подскажет, поддержит, отремонтирует и/или просто сделает с нуля. Есть задумка для реализации - замечательный Сергей обсудит и предложит идеальный вариант. Есть проблема - замечательные Надежда и Роман починят, поправят, сделают! Ребята доказали, что эта CMS - мощная и грамотная система управления. Надеюсь, что наше сотрудничество затянется надолго! Спасибо!!!
                                                </div>
                                                <div className={classes.sign}>
                                                    С уважением, Наталья Сушкова руководитель Отдела веб-проектов Группы компаний «Си Эль парфюм»&nbsp;<a href="http://www.cielparfum.com/">http://www.cielparfum.com/</a>
                                                </div>
                                            </div>
                                            <div>
                                                <h3>2</h3>
                                                <p>Hello</p>
                                            </div>
                                            <div>
                                                <h3>3</h3>
                                                <p>See ....</p>
                                                <p>Height is adaptive</p>
                                            </div>
                                            <div>
                                                <h3>4</h3>
                                            </div>
                                            <div>
                                                <h3>5</h3>
                                            </div>
                                            <div>
                                                <h3>6</h3>
                                            </div>
                                        </Slider>
                                    </Container>
                                </Col>
                                <Col lg="4">
                                    <div className={classes.buttonsblock}>
                                        <div className={classes.buttons}>
                                            <div>
                                                <Button variant="link" onClick={this.previous}>l</Button>
                                            </div>
                                            <div className={classes.pages}>
                                                0{this.state.activeSlide + 1} <div className={classes.pagesn}>/08 </div>
                                            </div>
                                            <div>
                                                <Button variant="link" onClick={this.next}>r</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Container>
                        </Col>
                    </Container>
                </Col>
            </div>
        );
    }
}
