import React, {Component} from 'react';
import EventCard from './eventCard.jsx';

const API_HOST = 'http://localhost:3001'

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3001`,{
      method: 'GET',
      mode: 'cors',
      redirect: '/',
      headers: {
            "Content-Type": "text/plain"
        }
    })
    .then(function(response) {
      console.log("this response is:", response)
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
        longitude       = {card.longitude}
        latitude        = {card.latitude}
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

