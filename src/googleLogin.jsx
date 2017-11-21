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

  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});
    console.log(id_token)
    //anything else you want to do(save to localStorage)...
  }

  render () {
    return (
      <div>
        <GoogleLogin socialId="yourClientID"
                     className="google-login"
                     scope="profile"
                     fetchBasicProfile={false}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
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