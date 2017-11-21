import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
// import Login from './facebookLogin.jsx';
import Google from './googleLogin.jsx';
import Logout from './logout.jsx';
import CreateEvent from './CreateEvent.jsx';
import EventCard from './eventCard.jsx';
import EventDetails from './eventDetails.jsx';

class App extends Component {

  loginResponse(response) {
    console.log(response);
  }

  render() {
    return (
      <Router>

        <div className="App">
          <header className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <h1 className="App-title">Im Here NOW!</h1>
          </header>
          <div>
            <Link to={'/login'}>
              <p>login</p>
            </Link>
            <Link to={'/logout'}>
              <p>logout</p>
            </Link>
            <Link to={'/event/:id'}>
              <p>event details</p>
            </Link>
             {/*<CreateEvent />*/}
            <Switch>
              <Route exact path="/" render={() => <EventCard/> }/>
              <Route path="/login" render={() => <Google/> }/>
              <Route path="/logout" render={() => <Logout/> }/>
              <Route path="/event/:id" render={() => <EventDetails/> }/>
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