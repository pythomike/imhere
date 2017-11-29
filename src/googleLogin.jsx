import React from 'react';

class googleLogin extends React.Component{

  constructor (props) {
    super(props);
    this.state = {
      login: false
    }
  }

  Logout = () => {
    fetch(`/logout`,{
      method: 'POST',
      mode: 'cors',
      redirect: '/',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      return res;
    }).catch(err => err);
  }

  loginGoogle = () => {
    console.log('fetching data');
    fetch('/auth/google',{
      method: 'GET',
      mode: 'cors',

    }).then(res => {
      console.log('returned response', res);
      this.setState({ login: true })
      return res;
    }).catch(err => err);
  }

  responseGoogle = (response) => {
    this.setState({
      first_name: response.profileObj.givenName,
      last_name: response.profileObj.familyName,
      email: response.profileObj.email
    })
    console.log(this.state)
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
        <button onClick={this.loginGoogle} >login to Google</button>
      </div>
    );
  }

}

export default googleLogin;