import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
// import Login from './login.jsx';
// import EventDetails from './eventDetails.jsx';
import Carousels from './Carousel.jsx';
import Modals from "./Navbar/Modals.jsx";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
 }

 onLogout = () => {
    console.log('onLogout called');
    this.setState({
      user: {}
    });
  }

  componentDidMount() {
    fetch(`/allevents`,{
      method: 'GET',
      mode: 'cors',
      credentials: true,
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
        <div>
        <div className="imgbg"></div>
        <div className="allinc">
          <Modals />
            <Carousels events={this.state.cards}/>
        </div>
        </div>
      </Router>
    );
  }
}
export default App;