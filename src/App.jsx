import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
// import './App.css';

import './App.css';
import Login from './login.jsx';
import EventDetails from './eventDetails.jsx';
import Carousels from './Carousel.jsx';
import Modals from "./Navbar/Modal.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
 }


 onLogout = () => {
    console.log('onLogout called');
    this.setState({
      user: {}
    });
  }

  islogedin = () => {
    fetch(`/currentUser`,{
      method: 'GET',
      mode: 'cors',
      redirect: '/',
      headers: {
            "Content-Type": "text/plain"
        }
    })
    .then(function(response) {
     return response.json();
    })
    .then(data => {
      this.setState({cards: data});
    }).catch(function(err){
      console.log(err)
    })

  }


  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <Link to={'/'}>
              <h1 className="App-title">In the header...</h1>
            </Link>
          </header>

          <div>
            <Modals />
          </div>

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
      </Router>
    );
  }
}
export default App;