import React, { Component } from 'react';
// import Modal from 'react-modal';
import CreateEvent from './CreateEvent.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';
import { Modal, Button } from "react-materialize";


class Modals extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state={
  //     showRegisterModal: false,
  //     showEventModal: false,
  //     showLoginModal: false
  //   }
  //   this.openRegister = this.openRegister.bind(this);
  //   this.openEvent = this.openEvent.bind(this);
  //   this.openLogin = this.openLogin.bind(this);
  //   this.closeModals = this.closeModals.bind(this);
  // }  

  // openRegister() {
  //   this.setState({ showRegisterModal: true });
  // }
  // openEvent() {
  //   this.setState({ showEventModal: true });
  // }
  // openLogin() {
  //   this.setState({ showLoginModal: true});
  // }
  // closeModals() {
  //   this.setState({ showEventModal: false,
  //                   showRegisterModal: false,
  //                   showLoginModal: false
  //    });
  // }


  render() {    
    return (
      <div>
        <Modal
          header='Modal Header'
          trigger={<Button>REGISTER</Button>}>
          <Register />
        </Modal>

        <Modal
          header='Modal Header'
          trigger={<Button>CREATE EVENT</Button>}>
          <CreateEvent />
        </Modal>

        <Modal
          header='Modal Header'
          trigger={<Button>LOGIN</Button>}>
          <Login />
        </Modal>

      </div>
    )
  };
}


export default Modals;