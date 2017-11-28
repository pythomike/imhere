import React, {Component} from 'react';
import EventCard from './eventCard.jsx';
// import $ from 'jquery';
import Carousel from '../node_modules/react-materialize/lib/Carousel.js';

class Carousels extends Component {
  

  render () { 
    return (
      <div className="container"> 
        <h1> hey in carousel </h1>
        <Carousel className="hero">
          <div className='red'>
            <EventCard />
            <p className='white-text'>This is your 1 panel</p>
          </div>
          <div className='amber'>
            <h2>Second Panel</h2>
            <p className='white-text'>This is your 2 panel</p>
          </div>
          <div className='green'>
            <h2>Third Panel</h2>
            <p className='white-text'>This is your 3 panel</p>
          </div>
          <div className='blue'>
            <h2>Fourth Panel</h2>
            <p className='white-text'>This is your 4 panel</p>
          </div>
          <div className='blue'>
            <h2>Fourth Panel</h2>
            <p className='white-text'>This is your 5 panel</p>
          </div>
          <div className='blue'>
            <h2>Fourth Panel</h2>
            <p className='white-text'>This is your 6 panel</p>
          </div>
        </Carousel>
      </div>
    )
  }
};

export default Carousels;

