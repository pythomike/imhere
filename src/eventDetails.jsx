import React, {Component} from 'react';
import './eventDetails.css';
import moment from 'moment'


// -Calendar should not be able to be picked on days that have passed
// -pictures should be rendered according to key words if picture not uploaded
//   -pic should be required if we don't do the above
// -make every field required

class eventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };

  }

  componentDidMount() {
    fetch(`/events/${this.props.match.params.id}`,{
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
    const currentEvent = this.state.data
    return (
      <div>

        <header className="event-detail-head">
          <span className="title">
            <h2>{currentEvent.title}</h2>
          </span>
          <span className="date-time-container">
            <div className="event-time">
              <p>Time: {moment(currentEvent.start_time).format("h:mmA").toString()}</p>
            </div>
            <div className="event-date">
              <p>Date: {moment(currentEvent.start_time).format("ddd MMM DD, YYYY").toString()}</p>
            </div>
          </span>
        </header>

        <div className="event-detail-main">
          <img src="" className="big-event-image" alt="Event-img" />
          <div className="event-detail-location">
            <h4>{currentEvent.location}</h4>
          </div>
        </div>

        <footer className="event-detail-foot">
          <span className="event-description">
            <p>{currentEvent.description}</p>
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
                <img src="https://i.imgur.com/0JAMrnL.png" width="35em" className="googleMaps-icon" alt="map-icon"></img>
              </a>
            </div>
          </span>
        </footer>

      </div>

    );
  }
}

export default eventDetails;