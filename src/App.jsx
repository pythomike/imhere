import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
// import './App.css';
import './App.css';
import Login from './login.jsx';
import EventDetails from './eventDetails.jsx';
import Carousel from './carousel.jsx';
import Modals from "./Navbar/Modal.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
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
            <Modals />
          </div>

          <div>
            <Link to={'/login'}>
              <p>login</p>
            </Link>
            <Link to={'/logout'}>
              <p>logout</p>
            </Link>
            <Link to={'/events/25'}>
              <p>event details 25</p>
            </Link>
            <Switch>
              <Route exact path="/" render={() => <Carousel /> }/>
              <Route path="/login" render={() => <Login/> }/>
              <Route path="/events/:id" component={EventDetails}/>
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}
export default App;