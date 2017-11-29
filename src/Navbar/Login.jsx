import React, {Component} from 'react';
// import { Input, Modal, Button } from "react-materialize";

//email & password match to registered users
//once logged in, change button to logout

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onChange = (e) => {
    if (e.target) {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  }


  render() {
    const {email, password} = this.state;
    return (
      <div>
        <form onSubmit = {this.handleFormSubmit}>
          <label>
            Email Address:
            <input type         = "email"
                    name        = "email"
                    value       = {email}
                    onChange    = {this.onChange}
                    placeholder = "sloppybobby@yahoo.com" />
          </label><br />

          <label>
            Password:
            <input type         = "password"
                    name        = "password"
                    value       = {password}
                    onChange    = {this.onChange} />
          </label><br />
          <input className="btnfrm btn waves-effect waves-light btn-flat modal-action" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Login;