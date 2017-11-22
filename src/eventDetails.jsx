import React, {Component} from 'react';
import './eventDetails.css';
import moment from 'moment'


// -Calendar should not be able to be picked on days that have passed
// -pictures should be rendered according to key words if picture not uploaded
//   -pic should be required if we don't do the above
// -make every field required

const data = {
    user_id: 46,
    title: "Mike",
    location: "Grouse Mountain",
    description: "House paaaaarrty",
    max_attendees:9002,
    start_time:"2017-12-28 08:32:36+00",
    end_time:"2017-12-28 08:32:36+00",
    total_going:9001,
    private:true,
    latitude: 49.283319,
    longitude:-123.115940
  }

class eventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };

  }

  componentDidMount() {
    fetch('/events/12',{
      method: 'GET',
      mode: 'cors',
      redirect: '/',
      headers: {
            "Content-Type": "text/plain"
        }
    })
    .then(function(response) {
     return response.json();
    })
    .then(data => {
      this.setState({data: data[0]});
    }).catch(function(err){
      console.log(err)
    })
  }

  render() {
    return (
      <div>

        <header className="event-detail-head">
          <span className="title">
            <h2>{this.state.data.title}{console.log(this.state)}</h2>
          </span>
          <span className="date-time-container">
            <div className="event-time">
              <p>Time: {moment(this.state.data.start_time).format("h:mmA").toString()}</p>
            </div>
            <div className="event-date">
              <p>Date: {moment(this.state.data.start_time).format("ddd MMM DD, YYYY").toString()}</p>
            </div>
          </span>
        </header>

        <div className="event-detail-main">
          <img src="" className="big-event-image" alt="Event-img" />
          <div className="event-detail-location">
            <h4>{this.state.data.location}</h4>
          </div>
        </div>

        <footer className="event-detail-foot">
          <span className="event-description">
            <p>{this.state.data.description}</p>
          </span>
          <span className="event-extra-info">
            <div className="going-button">
              <button>Going!</button>
            </div>
            <div className="notgoing-button">
              <button>Nah</button>
            </div>
            <div className="googlemaps-button">
              <a target="_blank" href={`https://www.google.com/maps/dir/?api=1&destination=${this.state.data.latitude},${this.state.data.longitude}`}>
                <img src="" className="googleMaps-icon" alt="map-icon"></img>
              </a>
            </div>
          </span>
        </footer>

      </div>

    );
  }
}

export default eventDetails;