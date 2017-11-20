import React, {Component} from 'react';
import './CreateEvent.css';
const Dtime = require('react-datetime');

class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 'firstname'
    };
  }
  

  render() {
    return (
      <div>
        <h4>creating event bs</h4>


        <form>
          <label>
            Event title:
            <input type = "text" name="eventTitle" placeholder = "Wonder Woman pew pew pew" />
          </label> <br />
          <div className="radioBtn">
            <label>
              Event creator:
              <input type="radio" value="firstname" checked={this.state.selectedOption === 'firstname'}  />
              Current user 
            </label>
          </div>
          <div className="radioBtn">
            <label>
              <input type="radio" value="anonymous" checked={this.state.selectedOption === 'anonymous'} />
              Anonymous
              {/* **When user clicks anonymous, the name should be faded out */}
            </label> 
          </div><br />
          <label>
            Description:
            <input type = "text" name="description" placeholder = "wonderwoman party" />
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


