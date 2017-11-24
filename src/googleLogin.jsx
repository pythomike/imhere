import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

class Login extends React.Component{

  // constructor (props, context) {
  //   super(props, context);
  // }

  Logout() {
    console.log("hi")
  }

  responseGoogle = (response) => {
    this.setState({
      first_name: response.profileObj.givenName,
      last_name: response.profileObj.familyName,
      email: response.profileObj.email
    })
    // console.log(response.tokenObj.id_token);

    fetch(`/newuser`,{
      method: 'POST',
      mode: 'cors',
      redirect: '/',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      return res;
    }).catch(err => err);
  }

  render () {
    return (
      <div>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={this.Logout}
        >
        </GoogleLogout>
      </div>
    );
  }

}

export default Login;

// 203543889826-3ben71eaei904q9hgt869ebqiq046fae.apps.googleusercontent.com
// 0G2p0nTElMZ2wDJyi_6TlX5U