import React from "react";
import Recaptcha from 'react-recaptcha';
import axios from "axios"; // For making client request.
import { Container, Button, Spinner, Alert} from "react-bootstrap";
import classes from './css-modules/Form.module.css';
import './css-modules/FormCustom.css';

import { sendFormCreator, completeFormCreator,errorFormCreator } from './redux/form-reducer';


export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      message: "",
      isVerified: false
    }
    this.verify = this.verify.bind(this);
    this.onloadCallback = this.onloadCallback.bind(this);

    this.sendForm = this.sendForm.bind(this);
    this.completeForm = this.completeForm.bind(this);
    this.errorForm = this.errorForm.bind(this);
  }
  sendForm() {
    if (this.state.isVerified === true) {
      this.props.store.dispatch(sendFormCreator());
    }
  }
  completeForm(){
    this.props.store.dispatch(completeFormCreator());
  }

  errorForm(error){
    this.props.store.dispatch(errorFormCreator(error));
  }
  /*UNSAFE_componentWillMount() {
    console.log(localStorage.getItem('name'));

    localStorage.getItem('name') &&
      localStorage.getItem('phone') &&
      localStorage.getItem('email') &&
      localStorage.getItem('message') &&
      this.setState({
        name: localStorage.getItem('name'),
        phone: localStorage.getItem('phone'),
        email: localStorage.getItem('email'),
        message: localStorage.getItem('message'),
        isVerified: false
      });

  }

  componentDidMount() {
    if (localStorage.getItem('name') && localStorage.getItem('phone') && localStorage.getItem('email')
      && localStorage.getItem('message')) {
      console.log('Using data from localStorage');
    }
  }*/

  onloadCallback() {
    console.log("captcha works");
  }
  verify(response) {
    if (response) {
      this.setState({
        isVerified: true
      })
    }
  }

  handleForm = e => {
    if (!this.state.isVerified) {
      alert("Пройдите верификацию");
    }
    else {
      this.sendForm();
      axios.post(
        "https://formcarry.com/s/xCex2Sf1WL",
        this.state,
        { headers: { "Accept": "application/json" } }

      )
        .then((response)=> {
          console.log(response.data.message);
          this.completeForm();
          alert("Форма была отправлена, спасибо!");
        })
        .catch((error) => {
          if (error.response) {
            alert("Ошибка ответа. Возможно Вы отправляете одну и ту же форму несколько раз. Попробуйте снова")
          } else if (error.request) {
            alert("Ошибка запроса. Возможно у Вас проблемы с интернетом. Попробуйте снова");
          } else {
            alert("Неизвестная ошибка. Попробуйте снова");
          }
          console.log(error);
          this.errorForm(error);
          //setTimeout(this.completeForm,5000);
        });

    }
    e.preventDefault();
  }

  handleFields = e => {
    this.setState({ [e.target.name]: e.target.value });
    const { name, phone, email, message } = this.state;
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
  }



  render() {
    return (
      <Container className={classes.maincontainer}>
        <form onSubmit={this.handleForm}>
          <input className={classes.forminput} required type="text" id="name" name="name" placeholder="Ваше имя" onChange={this.handleFields} />

          <input className={classes.forminput} required type="tel" id="phone" name="phone" placeholder="Телефон" onChange={this.handleFields} />

          <input className={classes.forminput} required type="email" id="email" name="email" placeholder="E-mail" onChange={this.handleFields} />

          <textarea className={classes.forminputtext} name="message" id="message" placeholder="Ваш комментарий" onChange={this.handleFields}></textarea>
          <div className="checkbox">
            <input className="custom-checkbox" type="checkbox" id="check" name="check" required />
            <label htmlFor="check"> <div>Отправляя заявку, я даю согласие на <span className="terms"> обработку своих персональных данных</span>. <span className="termsstar">*</span></div></label>
          </div>
          <div className={classes.recaptcha}>
            <Recaptcha
              sitekey="6Lc9rQgaAAAAAMnKirM21aQefsalTRzMqSqwoHfF"
              render="explicit"
              onloadCallback={this.onloadCallback}
              verifyCallback={this.verify}
              theme="dark"
              data-badge="inline"
              hl='ru'
            />,
          </div>
          <Button variant="dark" className={classes.submitbtn} type="submit" style={{ display: this.props.state.formReducer.send ? "none" : "block"}}>Свяжитесь с нами</Button>
          <Button variant="dark" disabled={true} style={{ display: this.props.state.formReducer.send ? "block" : "none"}} className={classes.submitbtn}><Spinner animation="border" className="mx-auto" style={{ color: "rgba(255,255,255,1)", textAlign: "center", display: this.props.state.formReducer.send ? "block" : "none"}}/></Button>
          <div className={classes.alertmobile}>
          <Alert className={classes.alert} variant="danger" style={{display: this.props.state.formReducer.error ? "block":"none" }} >Error when submitting the form</Alert>
          <Alert className={classes.alert} variant="success" style={{display: this.props.state.formReducer.complete ? "block":"none" }}>Form was sent!</Alert>
          </div>
        </form>
      </Container>
    );
  }
}
