/*global google*/
import React, {Component} from 'react';
import './CreateEvent.css';
import Geosuggest from 'react-geosuggest';
import PicUpload from './PicUpload.jsx';
const Dtime = require('react-datetime');
const suggest = require('react-geosuggest');

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
      private: 'public',
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
// TODO error handling if not selected things
  handleLocationChange = (e) => {
    if (e) {
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

  onChange = (e) => {
    // console.log(e)
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
// TODO SET UP AJAX
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    let eventDetails = this.state

    fetch('/events',{
      method: 'POST',
      mode: 'cors',
      redirect: '/',
      headers: {
             "Content-Type": "application/json"
        },
      body: JSON.stringify(eventDetails)
    })

  }

  render() {
    const yesterday = Dtime.moment().subtract(1, 'day');
    const valid = function(current){
        return current.isAfter(yesterday);
    };
    const { title, max_attendees, location, description, start_time } = this.state;
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
                    onChange    = {this.handlemax_attendees} />
          </label> <br />

          <div className="radioName">
            Creator:
            <label>
              <input type     = "radio"
                     name     = "creator_name"
                     value    = "firstName"
                     checked  = {this.state.name === 'firstName'}
                     onChange = {this.onChange}
              /> firstName
            </label>
            <label>
              <input type     = "radio"
                     name     = "creator_name"
                     value    = "Anonymous"
                     checked  = {this.state.name === 'Anonymous'}
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
                     name     = "private"
                     value    = "public"
                     checked  = {this.state.private === 'public'}
                     onChange = {this.onChange}
              /> Public
            </label>
            <label>
              <input type     = "radio"
                     name     = "private"
                     value    = "private"
                     checked  = {this.state.private === 'private'}
                     onChange = {this.onChange}
              /> Private
            </label>
          </div>
          {/*<PicUpload />*/}
          <input type="submit" value="submit" />
        </form>
      </div>

    );
  }
}

export default CreateEvent;


