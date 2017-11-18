import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
// import login from './login.jsx';
import logout from './logout.jsx';

const logoutPage = () => (
  <main>
    <logout/>
  </main>
)
// const diffPage = () => (
//     <div>
//       <h3> trying this thing out with dif page </h3>
//     </div>
// )

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Im Here NOW!</h1>
          </header>

          <div>
            <Link to={'/login'}>
              <p>login</p>
            </Link>
            <Link to={'/logout'}>
              <p>logout</p>
            </Link>
            <Switch>
              <Route exact path="/" render={() => <h3> trying this thing out with dif page </h3>
                }/>
              <Route path="/login" render={() => <h3>stuff?!?! </h3>}/>
              <Route path="/logout" Component={logoutPage}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;