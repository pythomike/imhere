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
// var Modal = require('react-bootstrap-modal');


class App extends Component {
  // constructor(){
  //   super()
    
  //   this.state = {
  //     isActive:false
  //   }
  // }

  // componentWillMount(){
  //   Modal.setAppElement('body')
  // }
  // toggleModal = () =>{
  //   this.setState({
  //     isActive:!this.state.isActive
  //   })
  // }


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