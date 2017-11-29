import React, { Component } from 'react';
import CreateEvent from './CreateEvent.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';
import Logo from './black.png'
import { Input, Modal, Button } from "react-materialize";
import moment from 'moment';



class Modals extends Component {


  render() {    
    return (
      <nav className="navclass">
        <div className = "navigation-bar">
          <div className="logo">
            <img className="logoimg" src={Logo} />
          </div>
          <ul id="nav-mobile" className= "right">
            <li>
              <Modal
                header= "Register here to create some fun events:"
                trigger={<Button className="buttons">REGISTER</Button>}>
                <Register />
              </Modal>
            </li>

            <Modal
              header='Modal Header'
              trigger={<Button className="buttons">CREATE EVENT</Button>}>
              <CreateEvent />
            </Modal>

            <Modal
              header='Modal Header'
              trigger={<Button className="buttons">LOGIN</Button>}>
              <Login />
            </Modal>
          </ul>
            <div class="col s12 m4 l8">
              {moment().format("dddd, MMM DD")} - {moment().format("h:mm a")}
            </div>

            <div class="row">
            <div class="col s12"><p>s12</p></div>
            <div class="col s12 m4 l2"><p>s12 m4</p></div>
            <div class="col s12 m4 l8"><p>s12 m4</p></div>
            <div class="col s12 m4 l2"><p>s12 m4</p></div>
          </div>
          </div>
      </nav>
    )
  };
}


export default Modals;
