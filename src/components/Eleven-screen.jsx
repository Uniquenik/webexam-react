import React from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import classes from './css-modules/Eleven-screen.module.css';
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomToggle({ children, eventKey, callback }) {
    const currentEventKey = React.useContext(AccordionContext);
    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey)
    );
    const isCurrentEventKey = currentEventKey === eventKey;
    return (
        <Accordion.Toggle
            as={Card.Header}
            className={classes.cardhead}
            style={{ color: isCurrentEventKey ? "#f14d34" : "black", borderTop: isCurrentEventKey ? "3px solid #f14d34" : "none", borderLeft: isCurrentEventKey ? "3px solid #f14d34" : "none", borderRight: isCurrentEventKey ? "3px solid #f14d34" : "none", borderBottom: "none",fontWeight:"bold" }}
            onClick={decoratedOnClick}
        >
            {children}
        </Accordion.Toggle>
    );
}
export default function Eleven_screen() {
    return (
        <>
            <Container fluid className={classes.maincontainer}>
                <Container>
                    <h2 className={classes.h2}>FAQ</h2>
                    <Accordion>
                        <Card className={classes.cardfirst}>
                            <CustomToggle eventKey="0"><span className={classes.number}>1.</span> Кто непосредственно занимается разработкой?</CustomToggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className={classes.cardinfo}>Сайты поддерживают штатные сотрудники ООО "Инитлаб" г. Краснодар, прошедшие специальное обучение и имеющие опыт работы с Друпал от 4 до 15 лет: 8 web-разбработчиком, 2 специалиста по SEO, 4 системных администратора.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className={classes.cardfirst}>
                            <CustomToggle eventKey="1"><span className={classes.number}>2.</span> Как организована работа поддержки?</CustomToggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body className={classes.cardinfo}>Сайты поддерживают штатные сотрудники ООО "Инитлаб" г. Краснодар, прошедшие специальное обучение и имеющие опыт работы с Друпал от 4 до 15 лет: 8 web-разбработчиком, 2 специалиста по SEO, 4 системных администратора.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className={classes.cardfirst}>
                            <CustomToggle eventKey="2"><span className={classes.number}>3.</span> Что происходит, когда отработаны все предоплаченные часы за месяц?</CustomToggle>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body className={classes.cardinfo}>Сайты поддерживают штатные сотрудники ООО "Инитлаб" г. Краснодар, прошедшие специальное обучение и имеющие опыт работы с Друпал от 4 до 15 лет: 8 web-разбработчиком, 2 специалиста по SEO, 4 системных администратора.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className={classes.cardfirst}>
                            <CustomToggle eventKey="3"><span className={classes.number}>4.</span> Что происходит, когда не отработаны все предоплаченные часы за месяц?</CustomToggle>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body className={classes.cardinfo}>Сайты поддерживают штатные сотрудники ООО "Инитлаб" г. Краснодар, прошедшие специальное обучение и имеющие опыт работы с Друпал от 4 до 15 лет: 8 web-разбработчиком, 2 специалиста по SEO, 4 системных администратора.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className={classes.cardfirst}>
                            <CustomToggle eventKey="4"><span className={classes.number}>5.</span> Как происходит оценка и согласование планируемого времени на выполнение заявок?</CustomToggle>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body className={classes.cardinfo}>Сайты поддерживают штатные сотрудники ООО "Инитлаб" г. Краснодар, прошедшие специальное обучение и имеющие опыт работы с Друпал от 4 до 15 лет: 8 web-разбработчиком, 2 специалиста по SEO, 4 системных администратора.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className={classes.cardfirst}>
                            <CustomToggle eventKey="5"><span className={classes.number}>6.</span> Сколько программистов выделяется на проект?</CustomToggle>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body className={classes.cardinfo}>Сайты поддерживают штатные сотрудники ООО "Инитлаб" г. Краснодар, прошедшие специальное обучение и имеющие опыт работы с Друпал от 4 до 15 лет: 8 web-разбработчиком, 2 специалиста по SEO, 4 системных администратора.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className={classes.cardfirst}>
                            <CustomToggle eventKey="6"><span className={classes.number}>7.</span> Как подать заявку на внесение изменений на сайте?</CustomToggle>
                            <Accordion.Collapse eventKey="6">
                                <Card.Body className={classes.cardinfo}>Сайты поддерживают штатные сотрудники ООО "Инитлаб" г. Краснодар, прошедшие специальное обучение и имеющие опыт работы с Друпал от 4 до 15 лет: 8 web-разбработчиком, 2 специалиста по SEO, 4 системных администратора.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className={classes.cardfirst}>
                            <CustomToggle eventKey="7"><span className={classes.number}>8.</span> Как подать заявку на добавление пользователя, изменение настроек веб-сервера и других задач по администрированию?</CustomToggle>
                            <Accordion.Collapse eventKey="7">
                                <Card.Body className={classes.cardinfo}>Сайты поддерживают штатные сотрудники ООО "Инитлаб" г. Краснодар, прошедшие специальное обучение и имеющие опыт работы с Друпал от 4 до 15 лет: 8 web-разбработчиком, 2 специалиста по SEO, 4 системных администратора.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className={classes.cardfirst}>
                            <CustomToggle eventKey="8"><span className={classes.number}>9.</span> В течение какого времени начинается работа по заявке?</CustomToggle>
                            <Accordion.Collapse eventKey="8">
                                <Card.Body className={classes.cardinfo}>Сайты поддерживают штатные сотрудники ООО "Инитлаб" г. Краснодар, прошедшие специальное обучение и имеющие опыт работы с Друпал от 4 до 15 лет: 8 web-разбработчиком, 2 специалиста по SEO, 4 системных администратора.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className={classes.cardfirst}>
                            <CustomToggle eventKey="9"><span className={classes.number}>10.</span> В какое время работает поддержка?</CustomToggle>
                            <Accordion.Collapse eventKey="9">
                                <Card.Body className={classes.cardinfo}>Сайты поддерживают штатные сотрудники ООО "Инитлаб" г. Краснодар, прошедшие специальное обучение и имеющие опыт работы с Друпал от 4 до 15 лет: 8 web-разбработчиком, 2 специалиста по SEO, 4 системных администратора.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className={classes.cardfirst}>
                            <CustomToggle eventKey="10"><span className={classes.number}>11.</span> Подходят ли услуги поддержки, если необходимо произвести обновления ядра Drupal или модулей?</CustomToggle>
                            <Accordion.Collapse eventKey="10">
                                <Card.Body className={classes.cardinfo}>Сайты поддерживают штатные сотрудники ООО "Инитлаб" г. Краснодар, прошедшие специальное обучение и имеющие опыт работы с Друпал от 4 до 15 лет: 8 web-разбработчиком, 2 специалиста по SEO, 4 системных администратора.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className={classes.cardfirst}>
                            <CustomToggle eventKey="11"><span className={classes.number}>12.</span> Можно ли пообщаться со специалистом голосом или в мессенджере?</CustomToggle>
                            <Accordion.Collapse eventKey="11">
                                <Card.Body className={classes.cardinfo}>Сайты поддерживают штатные сотрудники ООО "Инитлаб" г. Краснодар, прошедшие специальное обучение и имеющие опыт работы с Друпал от 4 до 15 лет: 8 web-разбработчиком, 2 специалиста по SEO, 4 системных администратора.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Container>
            </Container>
        </>
    );
}