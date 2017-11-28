import React, { Component } from 'react';
import CreateEvent from './CreateEvent.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';
import { Input, Modal, Button } from "react-materialize";



class Modals extends Component {


  render() {    
    return (
      <nav>
        <div className = "nav-wrapper">
          <ul id="nav-mobile" class= "right hide-on-med-and-down">
            <li>
              <Modal
                header='Modal Header'
                trigger={<Button className="buttons">REGISTER</Button>}>
                <Register />
              </Modal>
            </li>

          <Modal
            header='Modal Header'
            trigger={<Button id="silly">CREATE EVENT</Button>}>
            <CreateEvent />
          </Modal>

          <Modal
            header='Modal Header'
            trigger={<Button>LOGIN</Button>}>
            <Login />
          </Modal>
          </ul>
        </div>
      </nav>
    )
  };
}


export default Modals;
