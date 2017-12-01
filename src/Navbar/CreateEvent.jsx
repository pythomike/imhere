/*global google*/
import React, {Component} from 'react';
import './CreateEvent.css';
import Geosuggest from 'react-geosuggest';
const Dtime = require('react-datetime');



// -Calendar should not be able to be picked on days that have passed
// -pictures should be rendered according to key words if picture not uploaded
//   -pic should be required if we don't do the above
// -make every field required

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      max_attendees: '',
      creator_name: 'firstName',
      latitude: '',
      longitude: '',
      description: '',
      start_time: '',
      private_event: false,
    };
    this.onChange = this.onChange.bind(this);
    this.handlemax_attendees = this.handlemax_attendees.bind(this);
  }

  handlemax_attendees(changeMaxPpl) {
    const maxNr = /^[0-9\b]*$/;
    if (changeMaxPpl === '' || maxNr.test(changeMaxPpl.target.value)) {
      this.setState({
        max_attendees: changeMaxPpl.target.value
      })
    }
  }

  handleLocationChange = (e) => {
    if (e && e.location) {
      this.setState({
          location: e.description,
          latitude: e.location.lat,
          longitude: e.location.lng
        })
    }
  }

  handleDateChange = (e) => {
    this.setState({
        start_time: e._d
      })
  }

  handlePrivateChange = (e) => {
    this.setState({private_event: !this.state.private_event});
  }

  onChange = (e) => {
    if (e.target) {

    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
    } else {
      this.setState({
        location: e,
        latitude: null,
        longitude: null
      })
    }

  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    fetch('/events',{
      method: 'POST',
      credentials: 'same-origin',
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

  render() {
    const yesterday = Dtime.moment().subtract(1, 'day');
    const valid = function(current){
        return current.isAfter(yesterday);
    };
    const { title, max_attendees, location, description, start_time } = this.state;
    return (
      <div>
        <h4>Bored AF? Create an event!</h4>
        <form onSubmit = {this.handleFormSubmit}>
          <label>
            Event title:
            <input maxLength   = "30"
                   type        = "text"
                   name        = "title"
                   value       = {title}
                   onChange    = {this.onChange}
                   placeholder = "Wonder Woman pew pew pew" />
          </label> <br />

          <label>
            Max number of people:
            <input  type        = "text"
                    placeholder = "500"
                    name        = "max_attendees"
                    value       = {max_attendees}
                    onChange    = {this.handlemax_attendees} />
          </label> <br />

          <label>
            Location:
             <Geosuggest location        = {new google.maps.LatLng(53.977592, -124.643327)}
                         radius          = "20"
                         country         = "ca"
                         name            = "location"
                         value           = {location}
                         onChange        = {this.onChange}
                         onSuggestSelect = {this.handleLocationChange}
                         />
          </label> <br />

          <label>
            Description:
            <input type        = "text"
                   name        = "description"
                   value       = {description}
                   onChange    = {this.onChange}
                   placeholder = "Wonder Woman party" />
          </label> <br />

          <label>
            Pick a day and time:
            <Dtime isValidDate = { valid }
                   name        = "start_time"
                   value       = {start_time}
                   onChange    = {this.handleDateChange}
                   />
          </label>


          <input className="btnfrm btn waves-effect waves-light btn-flat modal-action" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateEvent;


