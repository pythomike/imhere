import React from 'react';

class facebookLogin extends React.Component{

  // constructor (props) {
    // super(props);
    // console.log(props)
    // this.state = {
    //   user: ""
    // };
  // }
responseFacebook = (response) => {
  console.log(response);
}

componentClicked = (response) => {
  console.log(response);
}

  render () {
    return (
      <div>
        <a href="/auth/facebook">login to Facebook</a>
      </div>
    );
  }

}


export default facebookLogin;