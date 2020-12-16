import React from "react";
import axios from "axios"; // For making client request.
import { Container, Button } from "react-bootstrap";
import classes from './css-modules/Form.module.css';
import './css-modules/FormCustom.css';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", phone: "", email: "", message: "" };
  }

  handleForm = e => {
    axios.post(
      "https://formcarry.com/s/xCex2Sf1WL",
      this.state,
      { headers: { "Accept": "application/json" } }
    )
      .then(function (response) {

        // access response.data in order to check formcarry response
        if (response.data.success) {
          //alert ("Thats okey");
        } else {
          // handle error
          alert("Thats okey");
          console.log(response.data.message);
        }

      })
      .catch(function (error) {
        console.log(error);
        alert("Error");
      });

    e.preventDefault();
  }

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Container className={classes.maincontainer}>
        <form onSubmit={this.handleForm}>
          <input className={classes.forminput} type="text" id="name" name="name" placeholder="Ваше имя" onChange={this.handleFields} />

          <input className={classes.forminput} type="tel" id="phone" name="phone" placeholder="Телефон" onChange={this.handleFields} />

          <input className={classes.forminput} type="email" id="email" name="email" placeholder="E-mail" onChange={this.handleFields} />

          <textarea className={classes.forminputtext} name="message" id="message" placeholder="Ваш комментарий" onChange={this.handleFields}></textarea>
          <div className="checkbox">
            <input className="custom-checkbox" type="checkbox" id="check" name="check" />
            <label for="check"> <div>Отправляя заявку, я даю согласие на <span className="terms"> обработку своих персональных данных</span> </div></label>
          </div>
          <Button className={classes.submitbtn} type="submit">Send</Button>
        </form>
      </Container>
    );
  }
}

export default Form;