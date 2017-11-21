import React, {Component} from 'react';
import './CreateEvent.css';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
const Dtime = require('react-datetime');

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptionName: 'firstName',
      selectedOptionEvent: 'public',
      address: ''
    };
    this.onChange = (address) => this.setState({address});
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

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))

    console.log('You have selected name:', this.state.selectedOptionName)
    console.log('You have selected event options:', this.state.selectedOptionEvent)
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    }
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
            Location:
             <PlacesAutocomplete inputProps={inputProps} />
          </label> <br />



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


