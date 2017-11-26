import React, { Component } from 'react';
// import Modal from 'react-modal';
import CreateEvent from './CreateEvent.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';
import { Modal, Button } from "react-bootstrap";


class Modals extends Component {
  constructor(props) {
    super(props);
    this.state={
      showRegisterModal: false,
      showEventModal: false,
      showLoginModal: false
    }
    this.openRegister = this.openRegister.bind(this);
    this.openEvent = this.openEvent.bind(this);
    this.openLogin = this.openLogin.bind(this);
    this.closeModals = this.closeModals.bind(this);
  }  

  openRegister() {
    this.setState({ showRegisterModal: true });
  }
  openEvent() {
    this.setState({ showEventModal: true });
  }
  openLogin() {
    this.setState({ showLoginModal: true});
  }
  closeModals() {
    this.setState({ showEventModal: false,
                    showRegisterModal: false,
                    showLoginModal: false
     });
  }


  render() {    
    return (
      <div className="static-modal">
        <Button
          onClick={this.openRegister}
        > Register button
        </Button>
        <Modal show={this.state.showRegisterModal} onHide={this.closeModals}>
          <Modal.Header closeButton>
            <Modal.Title>
              <Register />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModals}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Button
          onClick={this.openEvent}
        > Create Event
        </Button>
        <Modal show={this.state.showEventModal} onHide={this.closeModals}>
          <Modal.Header closeButton>
            <Modal.Title>
              <CreateEvent />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModals}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Button
          onClick={this.openLogin}
        > Login 
        </Button>
        <Modal show={this.state.showLoginModal} onHide={this.closeModals}>
          <Modal.Header closeButton>
            <Modal.Title>
              <Login />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModals}>Close</Button>
          </Modal.Footer>
        </Modal>


      </div>
    )
  };
}


export default Modals;