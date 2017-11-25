import React from 'react';



import Google from './googleLogin.jsx';
import Facebook from './facebookLogin.jsx';




class login extends React.Component{
  // constructor (props) {
    // super(props);
    // console.log(props)
    // this.state = {
    //   user: ""
    // };
  // }

  render () {
      return (
        <div>
          <Google/>
          <Facebook/>
        </div>
      );


  }
}

export default login;










