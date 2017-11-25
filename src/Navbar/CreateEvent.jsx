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
      title: '',
      maxPeople: '',
      name: 'firstName',
      locationLat: '',
      locationLong: '',
      description: '',
      date: '',
      publicPrivate: 'public',
    };
    this.onChange = this.onChange.bind(this);
    this.handleMaxPeople = this.handleMaxPeople.bind(this);
  }

  handleMaxPeople(changeMaxPpl) {
    const maxNr = /^[0-9\b]*$/;
    if (changeMaxPpl === '' || maxNr.test(changeMaxPpl.target.value)) {
      this.setState({
        maxPeople: changeMaxPpl.target.value
      })
    }
  }
// TODO error handling if not selected things
  handleLocationChange = (e) => {
    if (e) {
      this.setState({
          location: e.description,
          locationLat: e.location.lat,
          locationLong: e.location.lng
        })
    }
  }

  handleDateChange = (e) => {
    this.setState({
        date: e._d
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
        locationLat: "",
        locationLong: ""
      })
    }

  }
// TODO SET UP AJAX
  handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(this.state)

    fetch(`/daysevents`,{
      method: 'POST',
      mode: 'cors',
      redirect: '/',
      headers: {
        "Content-Type": "text/plain"
      },
      body: JSON.stringify({

      })
    })
  }

  render() {
    const yesterday = Dtime.moment().subtract(1, 'day');
    const valid = function(current){
        return current.isAfter(yesterday);
    };
    const { title, maxPeople, location, description, date } = this.state;
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
                    name        = "maxPeople"
                    value       = {maxPeople}
                    onChange    = {this.handleMaxPeople} />
          </label> <br />

          <div className="radioName">
            Creator:
            <label>
              <input type     = "radio"
                     name     = "name"
                     value    = "firstName"
                     checked  = {this.state.name === 'firstName'}
                     onChange = {this.onChange}
              /> firstName
            </label>
            <label>
              <input type     = "radio"
                     name     = "name"
                     value    = "Anonymous"
                     checked  = {this.state.name === 'Anonymous'}
                     onChange = {this.onChange}
              /> Anonymous
            </label>
          </div>

          <label>
            Location:
             <Geosuggest
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
                   name        = "date"
                   value       = {this.state.date}
                   onChange    = {this.handleDateChange}
                   />
          </label>

          <div className="radioEvent">
            Public or Private event?
            <label>
              <input type     = "radio"
                     name     = "publicPrivate"
                     value    = "public"
                     checked  = {this.state.publicPrivate === 'public'}
                     onChange = {this.onChange}
              /> Public
            </label>
            <label>
              <input type     = "radio"
                     name     = "publicPrivate"
                     value    = "private"
                     checked  = {this.state.publicPrivate === 'private'}
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


