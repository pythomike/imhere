import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import EventDetails from './eventDetails.jsx';
import Carousels from './Carousel.jsx';
import Modals from "./Navbar/Modals.jsx";
import './App.css';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="bgimg">
        <div className="App">
          <header className="App-header">
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <Modals />
          </header>
  
          <div>
            <Carousels />
            <Link to={'/events/25'}>
              <p>event details 25</p>
            </Link>

            <Switch>
              <Route path="/events/:id" component={EventDetails}/>
            </Switch>

          </div>
        </div>
        </div>
      </Router>
    );
  }
}
export default App;

// fragment
// push state