import React, {Component} from 'react';
import './CreateEvent.css';
const Dtime = require('react-datetime');

class CreateEvent extends Component {

  render() {
    return (
      <div>
        <h4>creating event bs</h4>
        <form>
          <label>
            Event title:
            <input type = "text" name="eventTitle" placeholder = "Wonder Woman pew pew pew" />
          </label> <br />
          <label>
            Name **need to put option for anonymous
            <input type = "text" name="firstName" placeholder = "Wonder" />
          </label> <br />
 
          <label>
            Pick a day and time:
            <Dtime />
          </label>
          
        </form> 


      </div>

      
    );
  }
//   constructor(props) {
//     super(props);


//     }
//   }

// render
//   render () {
//     <div className = "createvent">
//       <span className= "first-name"> {this.props.firstname} </span>
//       <span className= "last-name"> {this.props.lastname} </span>

//     </div>
//   }
// }
}

export default CreateEvent;


