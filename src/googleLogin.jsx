import React from 'react';

class googleLogin extends React.Component{

  // constructor (props) {
    // super(props);
    // console.log(props)
    // this.state = {
    //   user: ""
    // };
  // }

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
        <a href="/auth/google">login to Google</a>
      </div>
    );
  }

}

export default googleLogin;