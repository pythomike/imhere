import React, {Component} from 'react';
const Recaptcha = require('react-recaptcha');
// Email verification, captcha, change login button to logout
// if real email not entered, return error?
// make all fields necessary, except phone call
// make phone number only 10 digits long
// password and password_confirmation must match
// emails = unique


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      password: ''
      // password_confirmation: ''
    };

    this.onChange = this.onChange.bind(this);
    this.handlePhoneNum = this.handlePhoneNum.bind(this);
  }

  handlePhoneNum(phoneNumber) {
    const maxNr = /^[0-9\b]*$/;
    if (phoneNumber === '' || maxNr.test(phoneNumber.target.value)) {
      this.setState({
        phone_number: phoneNumber.target.value
      })
    }
  }

  onChange = (e) => {
    if (e.target) {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    if (this.state.email.length >= 5) {
      fetch(`/signup`,{
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log(res)
        return res;
      }).catch(err => err);
    }
  }


  render() {
    const {first_name, last_name, email, phone_number, password, password_confirmation} = this.state;
    return (
      <div className="modsbg">
        <form onSubmit = {this.handleFormSubmit}>
          <label>
            First Name:
            <input type        = "text"
                   name        = "first_name"
                   value       = {first_name}
                   onChange    = {this.onChange}
                   placeholder = "Bobby" />
          </label> <br />

          <label>
            Last Name:
            <input type        = "text"
                   name        = "last_name"
                   value       = {last_name}
                   onChange    = {this.onChange}
                   placeholder = "Sloppy" />
          </label> <br />

          <label>
            Email Address:
            <input type        = "email"
                   name        = "email"
                   value       = {email}
                   onChange    = {this.onChange}
                   placeholder = "sloppybobby@yahoo.com" />
          </label><br />

          <label>
            Phone Number:
            <input type        = "text"
                   name        = "phone_number"
                   value       = {phone_number}
                   placeholder = "6048008135"
                   onChange    = {this.handlePhoneNum} />
          </label><br />

          <label>
            Password
            <input type        = "password"
                   name        = "password"
                   value       = {password}
                   onChange    = {this.onChange} />
          </label><br />

          {/*<label>
            Password Confirmation
            <input type        = "password"
                   name        = "password_confirmation"
                   value       = {password_confirmation}

            Password:
            <input type        = "password"
                   name        = "password"
                   value       = {password}
                   onChange    = {this.onChange} />
          </label><br />

          <label>
            Password Confirmation:
            <input type        = "password"
                   name        = "password_confirmation"
                   value       = {password_confirmation}
                   onChange    = {this.onChange} />
          </label><br />*/}
          <Recaptcha 
              className="recap"
              sitekey="6LfNXToUAAAAAIRKWO5FA5x8IQeuHz_QPDcaPbal"
          />
          <input className="btnfrm btn waves-effect waves-light btn-flat modal-action" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Register;