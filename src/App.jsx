import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

// import login from './login.jsx';
// import logout from './logout.jsx';

// function LoginPage(props){
//   return <div>
//       <p>
//         MADE IT
//       </p>
//     </div>
// }

function logout(){
  return <div>
      <p>
        MADE IT
      </p>
    </div>
}

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
              <Route path="/login" render={() => <h3>maybe this though?!?! </h3>}/>
              {/*<Route path="/login" Component={LoginPage}/>*/}
              <Route path="/logout" Component={logout}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;