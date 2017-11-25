import React, {Component} from 'react';
import EventCard from './eventCard.jsx';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };

  }

  componentDidMount() {
    fetch(`/daysevents`,{
      method: 'GET',
      mode: 'cors',
      redirect: '/',
      headers: {
            "Content-Type": "text/plain"
        }
    })
    .then(function(response) {
     return response.json();
    })
    .then(data => {
      this.setState({cards: data});
    }).catch(function(err){
      console.log(err)
    })
  }

  render() {
    const eventCards = this.state.cards.map(card => {
      return <EventCard
        key             = {card.id}
        title           = {card.title}
        description     = {card.description}
      />

    });
    return (
      <main className="carousel-cards">
        { eventCards }
      </main>
    );
  }
}
export default Carousel;

