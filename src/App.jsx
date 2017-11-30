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
      currentDetails: '',
      daysFromToday: 0
    };
 }

  getDetails = (details) => {
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
      this.setState({loggedIn: false});
    })
    .catch(function(err){
      console.log(err)
    })
  }

  onLogin = (info) => {
    fetch(`/login`,{
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify(info),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        this.setState({loggedIn: true})
        return res;
      }).catch(err => err);
  }

  onSignup = (info) => {
    fetch(`/signup`,{
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify(info),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        this.setState({loggedIn: true})
        return res;
      }).catch(err => err);
  }

  prevDay = () => {
    fetch(`/today/${this.state.daysFromToday - 1}`,{
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
            "Content-Type": "text/plain"
        }
    })
    .then(function(response) {
     return response.json();
    })
    .then(data => {
      this.setState({
        cards: data,
        daysFromToday: this.state.daysFromToday - 1
      });
    }).catch(function(err){
      console.log(err)
    })
  }

  nextDay = () => {
    fetch(`/today/${this.state.daysFromToday + 1}`,{
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
            "Content-Type": "text/plain"
        }
    })
    .then(function(response) {
     return response.json();
    })
    .then(data => {
      this.setState({
        cards: data,
        daysFromToday: this.state.daysFromToday + 1
    });
    }).catch(function(err){
      console.log(err)
    })
  }

  componentDidMount() {
    fetch(`/currentUser`,{
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
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

    fetch(`/today/${this.state.daysFromToday}`,{
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
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
        <div>
          <div className="imgbg"></div>
          <div className="allinc">
            <button onClick={this.prevDay}>PREV</button>
            <button onClick={this.nextDay}>NEXT</button>
            <Modals loggedIn={this.state.loggedIn} logout={this.onLogout} login={this.onLogin} signUp={this.onSignup}/>
            <Carousels events={this.state.cards} today={this.state.daysFromToday} getDetails={this.getDetails}/>
          </div>
          {this.state.currentDetails !== '' &&
            <EventDetails event={this.state.currentDetails} />
          }
        </div>
      </Router>
    );
  }
}
export default App;