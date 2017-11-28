import React, {Component} from 'react';
import EventCard from './eventCard.jsx';
import {Carousel} from 'react-materialize';
import EventDetails from './eventDetails.jsx';

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
      events = this.props.events.data
    }
    console.log(events)
    const Cards = events.map(event => {
      console.log("event: ", event)
      return <EventCard
      key  = {event.id}
      data = {event}
      />
    });


    return (
      <div>
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
          {Cards}

        </Carousel>
      </div>

    )
  }
}

export default Carousels;