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
    fetch(`/allevents`,{
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
    {console.log(this.state)}
    const eventCards = this.state.cards.map(card => {
      return <EventCard
      key           ={card.id}
      testing       ={444}
      />
    });
    return (
      <main className="messages">
        { eventCards }
        {/*<EventCard />*/}
      </main>
    );
  }
}
export default Carousel;

