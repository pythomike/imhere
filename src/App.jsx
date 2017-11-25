import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
// import './App.css';
// import Login from './facebookLogin.jsx';
// import Google from './googleLogin.jsx';
// import Logout from './logout.jsx';
import EventDetails from './eventDetails.jsx';
import Carousel from './Carousel.jsx';
import Modals from "./Navbar/Modal.jsx";

class App extends Component {
 

  loginResponse(response) {
    console.log(response);
  }

  render() {

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to={'/'}>
              <h1 className="App-title">In the header...</h1>
            </Link>
          </header>

          <div>
            <Modals />
          </div>
  
          <div>
            <Carousel />

            <Link to={'/events/25'}>
              <p>event details 25</p>
            </Link>
            <Switch>
              <Route exact path="/" render={() => <Carousel /> }/>
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