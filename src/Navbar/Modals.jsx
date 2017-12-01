import React, { Component } from 'react';
import CreateEvent from './CreateEvent.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';
import Logo from './blacklogo.png'
import { Modal, Button } from "react-materialize";
// import moment from 'moment';


class Modals extends Component {
  render() {
    const currentUser = this.props.loggedIn
    return (
      <nav className="navclass">
        <div className = "navigation-bar">
          <div className="logo">
            <img className="logoimg" alt={"logo"} src={Logo} />
          </div>
          <ul id="nav-mobile" className= "right">
            { currentUser ? (
              <Modal
                trigger={<Button className="buttons">CREATE EVENT</Button>}>
                <CreateEvent />
              </Modal>
            ) : ("")}

            { !currentUser ? (
              <Modal
                header= "Register here to create some fun events:"
                trigger={<Button className="buttons">LOGIN</Button>}>
                <Login login={this.props.login}/>
                <div className="sUp">OR Sign up now!</div>
                <Register signUp={this.props.signUp}/>
              </Modal>

            ): ("")}
            { currentUser ? (
              <Button className="buttons" onClick={this.props.logout}>LOGOUT</Button>
            ) : ("")}
          </ul>
        </div>
      </nav>
    )
  };
}


export default Modals;
