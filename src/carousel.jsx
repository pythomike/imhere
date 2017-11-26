import React, {Component} from 'react';
// import EventCard from './eventCard.jsx';
// import $ from 'jquery';
import Carousel from '../node_modules/react-materialize/lib/Carousel.js';

class Carousels extends Component {


  render () { 
    return (
      <div>   
<Carousel images={[
  'https://lorempixel.com/250/250/nature/2',
  'https://lorempixel.com/250/250/nature/2',
  'https://lorempixel.com/250/250/nature/3',
  'https://lorempixel.com/250/250/nature/4',
  'https://lorempixel.com/250/250/nature/5'
]} />
      </div>

    )
  }
};

export default Carousels;

