import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css';
// import Login from './facebookLogin.jsx';
import Google from './googleLogin.jsx';
import Logout from './logout.jsx';
import CreateEvent from './CreateEvent.jsx';
import EventDetails from './eventDetails.jsx';
import Carousel from './carousel.jsx';
import Register from './Register.jsx';
// import Modals from "./Modal.jsx";
import Modal from 'react-modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }  

  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  loginResponse(response) {
    console.log(response);
  }

  render() {

    return (
      <Router>
        <div className="App">

          
          <header className="App-header">
            <Link to={'/'}>
              <h1 className="App-title">Im Here NOW!</h1>
            </Link>
          </header>

          <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
      
      
          <div>
            <Register />
            <Link to={'/login'}>
              <p>login</p>
            </Link>
            <Link to={'/logout'}>
              <p>logout</p>
            </Link>
            <Link to={'/events/new'}>
              <p>Create an event</p>
            </Link>
            <Link to={'/events/25'}>
              <p>event details 25</p>
            </Link>
            <Switch>
              <Route exact path="/" render={() => <Carousel /> }/>
              <Route path="/login" render={() => <Google/> }/>
              <Route path="/logout" render={() => <Logout/> }/>
              <Route path="/events/new" render={() => <CreateEvent /> }/>
              <Route path="/events/:id" component={EventDetails}/>
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}
export default App;

// fragment
// push state