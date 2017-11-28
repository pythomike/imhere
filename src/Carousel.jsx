import React, {Component} from 'react';
import EventCard from './eventCard.jsx';
import {Carousel} from 'react-materialize';
import moment from 'moment'
// import EventDetails from './eventDetails.jsx';

class Carousels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  render () {
    let events = []
    if (this.props.events){
      events = this.props.events
    }
    const Cards = events.map(event => {
      console.log("event: ", event)
      return <EventCard
      key  = {event.id}
      data = {event}
      />
    });


    return (
      <div className="container">
        <h1>{moment().format("dddd, MMM DD")}</h1>
        <h1>{moment().format("h:mm a")}</h1>
        <Carousel>
          <div className='red'>
            <h2>First Panel</h2>
            <p className='white-text'>This is your first panel</p>
          </div>
          <div className='amber'>
            <h2>Second Panel</h2>
            <p className='white-text'>This is your second panel</p>
          </div>
          <div className='green'>
            <h2>Third Panel</h2>
            <p className='white-text'>This is your third panel</p>
          </div>
          <div className='blue'>
            <h2>Fourth Panel</h2>
            <p className='white-text'>This is your fourth panel</p>
          </div>
          <div>
            {Cards}
          </div>
        </Carousel>
      </div>

    )
  }
}

export default Carousels;