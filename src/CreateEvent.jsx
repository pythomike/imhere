import React, {Component} from 'react';
import './CreateEvent.css';
const Dtime = require('react-datetime');

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptionName: 'firstName',
      selectedOptionEvent: 'public'
    };    
    this.handleOptionNameChange = this.handleOptionNameChange.bind(this);
    this.handlePublicPrivate = this.handlePublicPrivate.bind(this);
  }

  handleOptionNameChange(changeEventName) {
    console.log(changeEventName.target.value);
    this.setState({
      selectedOptionName: changeEventName.target.value,
    })
  }

  handlePublicPrivate(changePP) {
    console.log(changePP.target.value);
    this.setState({
      selectedOptionEvent: changePP.target.value,
    })
  }

  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    console.log('You have selected name:', this.state.selectedOptionName)
    console.log('You have selected event options:', this.state.selectedOptionEvent)
  }

  render() {
    return (
      <div>
        <h4>creating event bs</h4>                                                                                                          
        <form onSubmit = {this.handleFormSubmit}>
          <label>
            Event title:
            <input type = "text" name="eventTitle" placeholder = "Wonder Woman pew pew pew" />
          </label> <br />


          <div className="radioName">
            <label>
              <input type     = "radio" 
                     value    = "firstName" 
                     checked  = {this.state.selectedOptionName === 'firstName'} 
                     onChange = {this.handleOptionNameChange} 
              /> firstName
            </label>
          </div>
          <div className="radioName">
            <label>
              <input type     = "radio" 
                     value    = "anonymous" 
                     checked  = {this.state.selectedOptionName === 'anonymous'} 
                     onChange = {this.handleOptionNameChange}   
              /> Anonymous
            </label>
          </div>

          <label>
            Description:
            <input type = "text" name="description" placeholder = "wonderwoman party" />
          </label> <br />
          <label>
            Pick a day and time:
            <Dtime />
          </label>

          <div className="radioEvent">
            <label>
              <input type     = "radio" 
                     value    = "public" 
                     checked  = {this.state.selectedOptionEvent === 'public'} 
                     onChange = {this.handlePublicPrivate} 
              /> Public
            </label>
          </div>
          <div className="radioEvent">
            <label>
              <input type     = "radio" 
                     value    = "private" 
                     checked  = {this.state.selectedOptionEvent === 'private'} 
                     onChange = {this.handlePublicPrivate}   
              /> Private
            </label>
          </div>

          <input type="submit" value="submit" />
        </form> 
      </div>

      
    );
  }
}

export default CreateEvent;


