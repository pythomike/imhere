import React, {Component} from 'react';
// import EventCard from './eventCard.jsx';
import 'materialize-css';
import $ from 'jquery';

class Carousels extends Component {

  render () { 
    return (
      <div>
        <div className="carousel">
          <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1" /></a>
          <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2" /></a>
          <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3" /></a>
          <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4" /></a>
          <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5" /></a>
        </div>        
        <script type = "text/javascript">
          $(document).ready(function(){
            $('.carousel').carousel()
          });
        </script> 
      </div>

    )
  }
};

export default Carousels;

