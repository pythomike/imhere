import React, {Component} from 'react';
import GeoLocation from './geolocation.jsx'

class eventCard extends Component {

  render() {
    return (
      <div className="card card-inverse">
        <div className="card-title">{this.props.data.title}</div>
        <div>﹀</div>
        <p className="card-text">{this.props.data.description}</p>
        <footer className="card-geo">
          <GeoLocation longitude = {this.props.data.longitude}
                      latitude  = {this.props.data.latitude}/>
        </footer>             
      </div>
    );
  }
}
export default eventCard;


