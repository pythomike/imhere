import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
// import Login from './login.jsx';
import EventDetails from './eventDetails.jsx';
import Carousels from './Carousel.jsx';
import Modals from "./Navbar/Modals.jsx";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      loggedIn: false,
      currentDetails: ''
    };
 }

  getDetails = (details) => {
    // console.log("got event details", details)
    this.setState({currentDetails: details})
  }

  onLogout = () => {
    fetch(`/logout`,{
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
            "Content-Type": "text/plain"
        }
    })
    .then(() => {
      console.log("setting state to false")
      this.setState({loggedIn: false});
    })
    .catch(function(err){
      console.log(err)
    })
    console.log('onLogout called');
  }

  onLogin = (info) => {
    console.log("app login called with info: ", info)
    fetch(`/login`,{
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify(info),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log(res)
        this.setState({loggedIn: true})
        return res;
      }).catch(err => err);
  }

  componentDidMount() {

    fetch(`/currentUser`,{
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
      redirect: '/',
      headers: {
            "Content-Type": "text/plain"
        }
    })
    .then(function(response) {
     return response.json();
    })
    .then(data => {
      this.setState({loggedIn: data.loggedIn});
    })
    .catch(function(err){
      console.log(err)
    })

    fetch(`/allevents`,{
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
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
        <div className="allinc">
          <Modals loggedIn={this.state.loggedIn} logout={this.onLogout} login={this.onLogin}/>
          <div className="hero">
            <Carousels events={this.state.cards} getDetails={this.getDetails}/>
          </div>
          <EventDetails event={this.state.currentDetails} />
        </div>
      </Router>
    );
  }
}
export default App;