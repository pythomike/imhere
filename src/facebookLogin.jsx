import React from 'react';
import FacebookLogin from 'react-facebook-login';



class Login extends React.Component{

  constructor (props, context) {
    super(props, context);
    console.log(props);
    console.log(context);
  }


  responseFacebook (response) {
    console.log(response);
    console.log(this.props.loginInfo)
    this.props.loginInfo(response);
    //anything else you want to do(save to localStorage)...
  }



  render () {
    return (
      <div>
        {/*<div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="true"></div>*/}
        <FacebookLogin socialId="128785804474750"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       fields="id,email,name"
                       version="v2.5"
                       className="facebook-login"
                       buttonText="Login With Facebook"/>
      </div>
    );
  }
}
export default Login;
