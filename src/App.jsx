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
            <div className="allinc">
              <Modals />
              <div className="hero">
                <Carousels />
              </div>
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