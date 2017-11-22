import React, {Component} from 'react';
import './CreateEvent.css';
import Geosuggest from 'react-geosuggest';
import PicUpload from './PicUpload.jsx';
const Dtime = require('react-datetime');

// -Calendar should not be able to be picked on days that have passed
// -pictures should be rendered according to key words if picture not uploaded
//   -pic should be required if we don't do the above
// -make every field required

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptionName: 'firstName',
      selectedOptionEvent: 'public',
      maxPeople: '',
    };
    this.handleOptionNameChange = this.handleOptionNameChange.bind(this);
    this.handlePublicPrivate = this.handlePublicPrivate.bind(this);
    this.handleMaxPeople = this.handleMaxPeople.bind(this);
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

  handleMaxPeople(changeMaxPpl) {
    const maxNr = /^[0-9\b]*$/;
    if (changeMaxPpl === '' || maxNr.test(changeMaxPpl.target.value)) {
      this.setState({
        maxPeople: changeMaxPpl.target.value
      })
    }
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

          <label>
            Max number of people:
            <input type     = "text"
                  placeholder = "500"
                  value     = {this.state.maxPeople}
                onChange    = {this.handleMaxPeople}
            />
          </label> <br />

          <div className="radioName">
            Creator:
            <label>
              <input type     = "radio"
                     value    = "firstName"
                     checked  = {this.state.selectedOptionName === 'firstName'}
                     onChange = {this.handleOptionNameChange}
              /> firstName
            </label>
            <label>
              <input type     = "radio"
                     value    = "anonymous"
                     checked  = {this.state.selectedOptionName === 'anonymous'}
                     onChange = {this.handleOptionNameChange}
              /> Anonymous
            </label>
          </div>

          <label>
            Location:
             <Geosuggest />
          </label> <br />

          <label>
            Description:
            <input type = "text" name="description" placeholder = "Wonder Woman party" />
          </label> <br />
          <label>
            Pick a day and time:
            <Dtime />
          </label>

          <div className="radioEvent">
            Public or Private event?
            <label>
              <input type     = "radio"
                     value    = "public"
                     checked  = {this.state.selectedOptionEvent === 'public'}
                     onChange = {this.handlePublicPrivate}
              /> Public
            </label>
            <label>
              <input type     = "radio"
                     value    = "private"
                     checked  = {this.state.selectedOptionEvent === 'private'}
                     onChange = {this.handlePublicPrivate}
              /> Private
            </label>
          </div>
          <PicUpload />
          <input type="submit" value="submit" />
        </form>
      </div>

    );
  }
}

export default CreateEvent;


