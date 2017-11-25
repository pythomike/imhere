import React, {Component} from 'react';
// import Button from 'react-bootstrap/lib/Button';
import Image from 'react-bootstrap/lib/Image';
import './eventCard.css';

import './App.css';

class eventCard extends Component {
  render() {
    return (
      <div className="card card-inverse">
        <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" />
        <div className="card-img-overlay">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.description}</p>
          <p className="card-text"><small className="text-muted">Approx 4km away</small></p>
        </div>
      </div>
    );
  }
}
export default eventCard;