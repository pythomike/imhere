import React, {Component} from 'react';
import '../styles/Navbar.css';
import CreateEvent from './CreateEvent.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';
import { Input, Modal, Button } from "react-materialize";

class Navbar extends Component {

  render() {    
    return (
      <div>
        <div className="register">
          <Register />
        </div>
        <CreateEvent />
        <Login />

      </div>
    )
  };
}


export default Navbar;