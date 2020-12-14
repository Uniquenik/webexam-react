import React, { Component } from 'react';
import Slider from 'react-slick';
import { Container} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './css-modules/Ten-screen.module.css';
import './css-modules/temp.css'
import logo0 from './../pictures/logo_0.png';
import logo1 from './../pictures/logo_2.png';
import logo2 from './../pictures/logo-estee.png';
import logo3 from './../pictures/logo.png';



export default class Ten_screen extends Component {
    render() {
        var settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                    },
                    {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                    },
                    {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                    }
            ]
        };
        return (
            <div>
                <div className={classes.font}>
                    <h2 className={classes.h2}>С нами работают</h2>
                    <div className={classes.h21}>Десятки компаний доверяют нам самое ценное, что у них есть в интернете – свои сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.</div>
                    <Container fluid className={classes.maincontainer}>
                        <Container fluid className={classes.firstslick}>
                            <Slider {...settings} className={classes.st}>
                                <div className={classes.padding}>
                                    <div className={classes.border}>
                                        <img src={logo0} className={classes.img} alt=""/>
                                    </div>
                                </div>
                                <div className={classes.padding}>
                                    <div className={classes.border}>
                                        <img src={logo1} className={classes.img} alt="" />
                                    </div>
                                </div>
                                <div className={classes.padding}>
                                    <div className={classes.border}>
                                        <img src={logo2} className={classes.img} alt=""/>
                                    </div>
                                </div>
                                <div className={classes.padding}>
                                    <div className={classes.border}>
                                        <img src={logo3} className={classes.img} alt=""/>
                                    </div>
                                </div>
                                <div className={classes.padding}>
                                    <div className={classes.border}>
                                        <img src={logo1} className={classes.img} alt=""/>
                                    </div>
                                </div>
                                <div className={classes.padding}>
                                    <div className={classes.border}>
                                        <img src={logo2} className={classes.img} alt=""/>
                                    </div>
                                </div>
                            </Slider>
                            <div className='secondslick1'>
                            <Container fluid className={classes.secondslick}>
                                <Slider {...settings}>
                                    <div className={classes.padding}>
                                        <div className={classes.border}>
                                            <img src={logo0} className={classes.img} alt="" />
                                        </div>
                                    </div>
                                    <div className={classes.padding}>
                                        <div className={classes.border}>
                                            <img src={logo1} className={classes.img} alt="" />
                                        </div>
                                    </div>
                                    <div className={classes.padding}>
                                        <div className={classes.border}>
                                            <img src={logo2} className={classes.img} alt="" />
                                        </div>
                                    </div>
                                    <div className={classes.padding}>
                                        <div className={classes.border}>
                                            <img src={logo3} className={classes.img} alt=""/>
                                        </div>
                                    </div>
                                    <div className={classes.padding}>
                                        <div className={classes.border}>
                                            <img src={logo1} className={classes.img} alt=""/>
                                        </div>
                                    </div>
                                    <div className={classes.padding}>
                                    <div className={classes.border}>
                                        <img src={logo2} className={classes.img} alt=""/>
                                    </div>
                                </div>
                                </Slider>
                            </Container>
                            </div>
                        </Container>
                    </Container>
                </div>
            </div>
        );
    }
}