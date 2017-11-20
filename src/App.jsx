import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Login from './facebookLogin.jsx';
import Google from './googleLogin.jsx';
import Logout from './logout.jsx';
import CreateEvent from './CreateEvent.jsx';

class App extends Component {

  loginResponse(response) {
    console.log(response);
  }

  render() {
    return (
      <Router>

        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Im Here NOW!</h1>
          </header>
          <div>
            <CreateEvent />

            <Link to={'/login'}>
              <p>login</p>
            </Link>
            <Link to={'/google'}>
              <p>google login stuff</p>
            </Link>
            <Link to={'/logout'}>
              <p>logout</p>
            </Link>
            <Switch>
              <Route exact path="/" render={() => <h3>Home page</h3> }/>
              <Route path="/login" render={() => <Login loginInfo={this.loginResponse}/> }/>
              <Route path="/logout" render={() => <Logout/> }/>
              <Route path="/google" render={() => <Google/> }/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;