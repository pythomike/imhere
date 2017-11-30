import React, {Component} from 'react';
import moment from 'moment';
import clockp from './pictures/clock.png';
import calendar from './pictures/cal.png';

class eventDetails extends Component {

  render() {
    const currentEvent = this.props.event
    return (
      <div className="container">
        <div className="events-padding">
          <h3 className="events-title">
            {currentEvent.title}
          </h3>
          <p className="calp"><img className="calimg" src={calendar} /> Date: {moment(currentEvent.start_time).format("ddd MMM DD, YYYY").toString()}</p>
          <p className="clockp"> <img className="clockimg" src={clockp} />  Time: {moment(currentEvent.start_time).format("h:mmA").toString()} </p>
          <p className="event-desc">{currentEvent.description}</p>
          <h4>{currentEvent.location}</h4>

            <div className="googlemaps-button">
              <a target="_blank" href={`https://www.google.com/maps/dir/?api=1&destination=${currentEvent.latitude},${currentEvent.longitude}`}>
                <img src="https://i.imgur.com/0JAMrnL.png" width="35em" className="googleMaps-icon" alt="map-icon"></img>
              </a>
            </div>
          </div>
      </div>

    );
  }
}

export default eventDetails;