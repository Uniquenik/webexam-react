import React, { Component } from 'react';
import Slider from 'react-slick';
import { Container } from "react-bootstrap";
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
            beforeChange: (current, next) => this.setState({ activeSlide: next }),
        };
        return (
            <div>
                <h2 className={classes.h2}>Отзывы</h2>
                <Container fluid className={classes.maincontainer}>
                    <Container className={classes.slickbuttoncontainer}>
                    <Container className={classes.slickcontainer}>
                        <Slider ref={c => (this.slider = c)} {...settings}>
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
                    <div className={classes.buttons}>
                        <div>
                        <button className="button" onClick={this.previous}>
                            Previous
                            </button>
                        </div>
                        <div>
                            <strong>{this.state.activeSlide}</strong>
                        </div>
                        <div>
                        <button className="button" onClick={this.next}>
                            Next
                            </button>
                        </div>
                    </div>
                    </Container>
                </Container>
            </div>
        );
    }
}