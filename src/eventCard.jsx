import React, {Component} from 'react';
import Image from 'react-bootstrap/lib/Image';
import './eventCard.css';
import GeoLocation from './geolocation.jsx'

import './App.css';

class eventCard extends Component {
  render() {
    return (
      <div className="card card-inverse">
        <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" />
        <div className="card-img-overlay">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.description}</p>
          <GeoLocation longitude = {this.props.longitude}
                       latitude  = {this.props.latitude}
                       />
        </div>
      </div>
    );
  }
}
export default eventCard;