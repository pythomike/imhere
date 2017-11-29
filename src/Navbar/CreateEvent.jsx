/*global google*/
import React, {Component} from 'react';
import './CreateEvent.css';
import Geosuggest from 'react-geosuggest';
const Dtime = require('react-datetime');
const suggest = require('react-geosuggest');



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
    this.handleMaxPeople = this.handleMaxPeople.bind(this);
  }

  handleMaxPeople(changeMaxPpl) {
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
        latitude: "",
        longitude: ""
      })
    }

  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(`/events`,{
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

  render() {
    const yesterday = Dtime.moment().subtract(1, 'day');
    const valid = function(current){
        return current.isAfter(yesterday);
    };
    const { title, max_attendees, description } = this.state;
    return (
      <div>        
        <h4>creating event bs</h4>
        <form onSubmit = {this.handleFormSubmit}>
          <label>
            Event title:
            <input type        = "text"
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
                    onChange    = {this.handleMaxPeople}
            />
          </label> <br />

          <div className="radioName">
            Creator:
            <label>
              <input type     = "radio"
                     name     = "creator_name"
                     value    = "firstName"
                     checked  = {this.state.creator_name === 'firstName'}
                     onChange = {this.onChange}
              /> firstName
            </label>
            <label>
              <input type     = "radio"
                     name     = "creator_name"
                     value    = "Anonymous"
                     checked  = {this.state.creator_name === 'Anonymous'}
                     onChange = {this.onChange}
              /> Anonymous
            </label>
          </div>

          <label>
            Location:
             <Geosuggest location        = {new google.maps.LatLng(53.977592, -124.643327)}
                         radius          = "20"
                         country         = "ca"
                         name            = "location"
                         value           = {this.state.location}
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
                   value       = {this.state.start_time}
                   onChange    = {this.handleDateChange}
                   />
          </label>

          <div className="radioEvent">
            Public or Private event?
            <label>
              <input type     = "radio"
                     name     = "private_event"
                     checked  = {this.state.private_event === false}
                     onChange = {this.handlePrivateChange}
              /> Public
            </label>
            <label>
              <input type     = "radio"
                     name     = "private_event"
                     checked  = {this.state.private_event === true}
                     onChange = {this.handlePrivateChange}
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


