import React, { Component } from 'react';
import CreateEvent from './CreateEvent.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';
import Logo from './blacklogo.png'
import { Input, Modal, Button } from "react-materialize";
import moment from 'moment';


class Modals extends Component {
 //  constructor(props) {
 //    super(props);
 //    this.state = {
 //      loggedIn: this.props.loggedIn
 //    };

 // }




  render() {
    console.log(this.props)
    const currentUser = this.props.loggedIn
    return (
      <nav className="navclass">
        <div className = "navigation-bar">
          <div className="logo">
            <img className="logoimg" src={Logo} />
          </div>
          <ul id="nav-mobile" className= "right">
            { !currentUser ? (
            <Modal
              header= "Register here to create some fun events:"
              trigger={<Button className="buttons">REGISTER</Button>}>
              <Register />
            </Modal>

            ): ("")}

            <Modal
              header='Modal Header'
              trigger={<Button className="buttons">CREATE EVENT</Button>}>
              <CreateEvent />
            </Modal>

          { currentUser ? (
            <Button className="buttons" onClick={this.props.logout}>LOGOUT</Button>
            ) : (
            <Modal
              header='Modal Header'
              trigger={<Button className="buttons">LOGIN</Button>}>
              <Login login={this.props.login}/>
            </Modal>
            )}
          </ul>
        </div>
      </nav>
    )
  };
}


export default Modals;
