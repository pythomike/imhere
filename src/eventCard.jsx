import React, {Component} from 'react';
import './eventCard.css';
import GeoLocation from './geolocation.jsx'

import './App.css';

class eventCard extends Component {


  render() {
    return (
      <div className="card card-inverse">
        <div className="card-img-overlay">
          <h4 className="card-title">{this.props.data.title}</h4>
          <p className="card-text">{this.props.data.description}</p>
          <GeoLocation longitude = {this.props.data.longitude}
                       latitude  = {this.props.data.latitude}
                       />
        </div>
      </div>
    );
  }
}
export default eventCard;