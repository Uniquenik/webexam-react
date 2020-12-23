import React from "react";
import Recaptcha from 'react-recaptcha';
import axios from "axios"; // For making client request.
import { Container, Button } from "react-bootstrap";
import classes from './css-modules/Form.module.css';
import './css-modules/FormCustom.css';
import PropTypes from 'prop-types'


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
    this.sendForm = this.sendForm.bind(this);


    this.verify = this.verify.bind(this);
    this.onloadCallback=this.onloadCallback.bind(this);
  }
  sendForm() {
    setTimeout(this.props.sendForm, 1000)
  }


  onloadCallback () {
    console.log("captcha works");
  }
  verify(response){
    if (response){
      this.setState({
        isVerified: true
      })
    }
  }

  handleForm = e => {
    if (!this.state.isVerified) {
      alert("Verify plz");
    }
    else {
    axios.post(
      "https://formcarry.com/s/xCex2Sf1WL",
      this.state,
      { headers: { "Accept": "application/json" } }

    )
    .then(function (response) {
      console.log(response.data.message);
      alert("Form was sent!");
      this.props.completeForm;
    })
    .catch(function (error) {
      if (error.response) {
        alert("Response error")
      } else if (error.request) {
        alert("Request error");
      } else {
        alert("Unknown error");
      }
      this.props.errorForm;
      console.log(error);
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
    const {sendForm, completeForm,errorForm} = this.props
    return (
      <Container className={classes.maincontainer}>
        <form onSubmit={this.handleForm}>
          <input className={classes.forminput} type="text" id="name" name="name" placeholder="Ваше имя" onChange={this.handleFields} />

          <input className={classes.forminput} type="tel" id="phone" name="phone" placeholder="Телефон" onChange={this.handleFields} />

          <input className={classes.forminput} type="email" id="email" name="email" placeholder="E-mail" onChange={this.handleFields} />

          <textarea className={classes.forminputtext} name="message" id="message" placeholder="Ваш комментарий" onChange={this.handleFields}></textarea>
          <div className="checkbox">
            <input className="custom-checkbox" type="checkbox" id="check" name="check" required />
            <label htmlFor="check"> <div>Отправляя заявку, я даю согласие на <span className="terms"> обработку своих персональных данных</span> </div></label>
          </div>
          <Recaptcha
            sitekey="6Lc9rQgaAAAAAMnKirM21aQefsalTRzMqSqwoHfF"
            render="explicit"
            onloadCallback={this.onloadCallback}
            verifyCallback={this.verify}
            theme="dark"
          />,
          <Button variant="dark" className={classes.submitbtn} onClick = {sendForm} active={!send}type="submit">Свяжитесь с нами</Button>
        </form>
      </Container>
    );
  }

  getData() {
    setTimeout(() => {
        this.setState({
        name: "ulla",
        phone: "292",
        email: "email",
        message: "message",
        isVerified: false
      });
    }, 1000);
  }

  componentDidMount() {


  }
}

Form.propTypes = {
  send: PropTypes.bool.isRequired,
  sendForm: PropTypes.func.isRequired,
  completeForm: PropTypes.func.isRequired,
  errorForm: PropTypes.func.isRequired
}