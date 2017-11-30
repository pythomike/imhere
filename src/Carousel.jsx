import React, {Component} from 'react';
// import EventCard from './eventCard.jsx';
import {Carousel} from 'react-materialize';
import moment from 'moment'
import GeoLocation from './geolocation.jsx'

class Carousels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  one = (e) => {
    this.props.getDetails(this.props.events[0])
  }
  two = (e) => {
    this.props.getDetails(this.props.events[1])
  }
  three = (e) => {
    this.props.getDetails(this.props.events[2])
  }
  four = (e) => {
    this.props.getDetails(this.props.events[3])
  }
  five = (e) => {
    this.props.getDetails(this.props.events[4])
  }
  six = (e) => {
    this.props.getDetails(this.props.events[5])
  }
  seven = (e) => {
    this.props.getDetails(this.props.events[6])
  }
  eight = (e) => {
    this.props.getDetails(this.props.events[7])
  }
  nine = (e) => {
    this.props.getDetails(this.props.events[8])
  }
  ten = (e) => {
    this.props.getDetails(this.props.events[9])
  }
  eleven = (e) => {
    this.props.getDetails(this.props.events[10])
  }
  twelve = (e) => {
    this.props.getDetails(this.props.events[11])
  }

// Repetitive code because react currently doesnt have a way of dealing with dynamicaly loaded cards
  render () {
    let events = []
    if (this.props.events.length === 1){
      events = this.props.events
      return (
        <div className="container">
          <div className="dt">
            <span className="clickable" onClick={this.props.prev}>&larr;</span>
                {moment().add(this.props.today, 'day').format("DD MMM, YYYY")}
                <span className="clickable" onClick={this.props.next}>&rarr;</span>
          </div>
          <Carousel key='1'>
            <div className="card card-inverse col0" onClick={this.one} >
              <div className="card-title">{events[0].title}</div>
              <div className="funkySymbol">﹀</div>
              <p className="card-text">{events[0].description}</p>
              <footer className="card-geo">
                <GeoLocation longitude = {events[0].longitude}
                             latitude  = {events[0].latitude}/>
              </footer>
            </div>
          </Carousel>
        </div>

      )
    } else if (this.props.events.length === 2){
      events = this.props.events
      return (
        <div className="container">
          <div className="dt">
            <span className="clickable" onClick={this.props.prev}>&larr;</span>
                {moment().add(this.props.today, 'day').format("DD MMM, YYYY")}
                <span className="clickable" onClick={this.props.next}>&rarr;</span>
          </div>
          <Carousel key='2'>

            <div className="card card-inverse col0" onClick={this.one} >
              <div className="card-title">{events[0].title}</div>
              <div className="funkySymbol">﹀</div>
              <p className="card-text">{events[0].description}</p>
              <footer className="card-geo">
                <GeoLocation longitude = {events[0].longitude}
                            latitude  = {events[0].latitude}/>
              </footer>
            </div>

            <div className="card card-inverse col1" onClick={this.two} >
              <div className="card-title">{events[1].title}</div>
              <div className="funkySymbol">﹀</div>
              <p className="card-text">{events[1].description}</p>
              <footer className="card-geo">
                <GeoLocation longitude = {events[1].longitude}
                            latitude  = {events[1].latitude}/>
              </footer>
            </div>

          </Carousel>
        </div>

      )
    } else if (this.props.events.length === 3){
          events = this.props.events
          return (
            <div className="container">
              <div className="dt">
                <span className="clickable" onClick={this.props.prev}>&larr;</span>
                {moment().add(this.props.today, 'day').format("DD MMM, YYYY")}
                <span className="clickable" onClick={this.props.next}>&rarr;</span>
              </div>
              <Carousel key='3'>
                <div className="card card-inverse col0" onClick={this.one} >
                  <div className="card-title">{events[0].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[0].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[0].longitude}
                                latitude  = {events[0].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col1" onClick={this.two} >
                  <div className="card-title">{events[1].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[1].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[1].longitude}
                                latitude  = {events[1].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col2" onClick={this.three} >
                  <div className="card-title">{events[2].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[2].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[2].longitude}
                                latitude  = {events[2].latitude}/>
                  </footer>
                </div>
              </Carousel>
            </div>

          )
    } else if (this.props.events.length === 4){
          events = this.props.events
          return (
            <div className="container">
              <div className="dt">
                <span className="clickable" onClick={this.props.prev}>&larr;</span>
                {moment().add(this.props.today, 'day').format("DD MMM, YYYY")}
                <span className="clickable" onClick={this.props.next}>&rarr;</span>
              </div>
              <Carousel key='4'>
                <div className="card card-inverse col0" onClick={this.one} >
                  <div className="card-title">{events[0].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[0].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[0].longitude}
                                latitude  = {events[0].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col1" onClick={this.two} >
                  <div className="card-title">{events[1].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[1].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[1].longitude}
                                latitude  = {events[1].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col2" onClick={this.three} >
                  <div className="card-title">{events[2].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[2].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[2].longitude}
                                latitude  = {events[2].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col3" onClick={this.four} >
                  <div className="card-title">{events[3].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[3].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[3].longitude}
                                latitude  = {events[3].latitude}/>
                  </footer>
                </div>
              </Carousel>
            </div>

          )
    } else if (this.props.events.length === 5){
          events = this.props.events
          return (
            <div className="container">
              <div className="dt">
                <span className="clickable" onClick={this.props.prev}>&larr;</span>
                {moment().add(this.props.today, 'day').format("DD MMM, YYYY")}
                <span className="clickable" onClick={this.props.next}>&rarr;</span>
              </div>
              <Carousel key='5'>
                <div className="card card-inverse col0" onClick={this.one} >
                  <div className="card-title">{events[0].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[0].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[0].longitude}
                                latitude  = {events[0].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col1" onClick={this.two} >
                  <div className="card-title">{events[1].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[1].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[1].longitude}
                                latitude  = {events[1].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col2" onClick={this.three} >
                  <div className="card-title">{events[2].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[2].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[2].longitude}
                                latitude  = {events[2].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col3" onClick={this.four} >
                  <div className="card-title">{events[3].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[3].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[3].longitude}
                                latitude  = {events[3].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col4" onClick={this.five} >
                  <div className="card-title">{events[4].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[4].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[4].longitude}
                                latitude  = {events[4].latitude}/>
                  </footer>
                </div>
              </Carousel>
            </div>

          )
    } else if (this.props.events.length === 6){
          events = this.props.events
          return (
            <div className="container">
              <div className="dt">
                <span className="clickable" onClick={this.props.prev}>&larr;</span>
                {moment().add(this.props.today, 'day').format("DD MMM, YYYY")}
                <span className="clickable" onClick={this.props.next}>&rarr;</span>
              </div>
              <Carousel key='6'>
                <div className="card card-inverse col0" onClick={this.one} >
                  <div className="card-title">{events[0].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[0].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[0].longitude}
                                latitude  = {events[0].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col1" onClick={this.two} >
                  <div className="card-title">{events[1].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[1].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[1].longitude}
                                latitude  = {events[1].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col2" onClick={this.three} >
                  <div className="card-title">{events[2].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[2].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[2].longitude}
                                latitude  = {events[2].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col3" onClick={this.four} >
                  <div className="card-title">{events[3].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[3].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[3].longitude}
                                latitude  = {events[3].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col4" onClick={this.five} >
                  <div className="card-title">{events[4].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[4].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[4].longitude}
                                latitude  = {events[4].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col5" onClick={this.six} >
                  <div className="card-title">{events[5].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[5].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[5].longitude}
                                latitude  = {events[5].latitude}/>
                  </footer>
                </div>
              </Carousel>
            </div>

          )
    } else if (this.props.events.length === 7){
      events = this.props.events
          return (
            <div className="container">
              <div className="dt">
                <span className="clickable" onClick={this.props.prev}>&larr;</span>
                {moment().add(this.props.today, 'day').format("DD MMM, YYYY")}
                <span className="clickable" onClick={this.props.next}>&rarr;</span>
              </div>
              <Carousel key='7'>
                <div className="card card-inverse col0" onClick={this.one} >
                  <div className="card-title">{events[0].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[0].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[0].longitude}
                                latitude  = {events[0].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col1" onClick={this.two} >
                  <div className="card-title">{events[1].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[1].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[1].longitude}
                                latitude  = {events[1].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col2" onClick={this.three} >
                  <div className="card-title">{events[2].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[2].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[2].longitude}
                                latitude  = {events[2].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col3" onClick={this.four} >
                  <div className="card-title">{events[3].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[3].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[3].longitude}
                                latitude  = {events[3].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col4" onClick={this.five} >
                  <div className="card-title">{events[4].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[4].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[4].longitude}
                                latitude  = {events[4].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col5" onClick={this.six} >
                  <div className="card-title">{events[5].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[5].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[5].longitude}
                                latitude  = {events[5].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col6" onClick={this.seven} >
                  <div className="card-title">{events[6].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[6].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[6].longitude}
                                latitude  = {events[6].latitude}/>
                  </footer>
                </div>
              </Carousel>
            </div>

          )
    } else if (this.props.events.length === 8){
      events = this.props.events
          return (
            <div className="container">
              <div className="dt">
                <span className="clickable" onClick={this.props.prev}>&larr;</span>
                {moment().add(this.props.today, 'day').format("DD MMM, YYYY")}
                <span className="clickable" onClick={this.props.next}>&rarr;</span>
              </div>
              <Carousel key='8'>
                <div className="card card-inverse col0" onClick={this.one} >
                  <div className="card-title">{events[0].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[0].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[0].longitude}
                                latitude  = {events[0].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col1" onClick={this.two} >
                  <div className="card-title">{events[1].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[1].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[1].longitude}
                                latitude  = {events[1].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col2" onClick={this.three} >
                  <div className="card-title">{events[2].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[2].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[2].longitude}
                                latitude  = {events[2].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col3" onClick={this.four} >
                  <div className="card-title">{events[3].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[3].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[3].longitude}
                                latitude  = {events[3].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col4" onClick={this.five} >
                  <div className="card-title">{events[4].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[4].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[4].longitude}
                                latitude  = {events[4].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col5" onClick={this.six} >
                  <div className="card-title">{events[5].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[5].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[5].longitude}
                                latitude  = {events[5].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col6" onClick={this.seven} >
                  <div className="card-title">{events[6].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[6].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[6].longitude}
                                latitude  = {events[6].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col7" onClick={this.eight} >
                  <div className="card-title">{events[7].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[7].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[7].longitude}
                                latitude  = {events[7].latitude}/>
                  </footer>
                </div>
              </Carousel>
            </div>

          )
    } else if (this.props.events.length === 9){
      events = this.props.events
          return (
            <div className="container">
              <div className="dt">
                <span className="clickable" onClick={this.props.prev}>&larr;</span>
                {moment().add(this.props.today, 'day').format("DD MMM, YYYY")}
                <span className="clickable" onClick={this.props.next}>&rarr;</span>
              </div>
              <Carousel key='9'>
                <div className="card card-inverse col0" onClick={this.one} >
                  <div className="card-title">{events[0].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[0].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[0].longitude}
                                latitude  = {events[0].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col1" onClick={this.two} >
                  <div className="card-title">{events[1].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[1].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[1].longitude}
                                latitude  = {events[1].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col2" onClick={this.three} >
                  <div className="card-title">{events[2].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[2].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[2].longitude}
                                latitude  = {events[2].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col3" onClick={this.four} >
                  <div className="card-title">{events[3].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[3].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[3].longitude}
                                latitude  = {events[3].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col4" onClick={this.five} >
                  <div className="card-title">{events[4].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[4].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[4].longitude}
                                latitude  = {events[4].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col5" onClick={this.six} >
                  <div className="card-title">{events[5].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[5].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[5].longitude}
                                latitude  = {events[5].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col6" onClick={this.seven} >
                  <div className="card-title">{events[6].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[6].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[6].longitude}
                                latitude  = {events[6].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col7" onClick={this.eight} >
                  <div className="card-title">{events[7].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[7].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[7].longitude}
                                latitude  = {events[7].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col8" onClick={this.nine} >
                  <div className="card-title">{events[8].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[8].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[8].longitude}
                                latitude  = {events[8].latitude}/>
                  </footer>
                </div>
              </Carousel>
            </div>

          )
    } else if (this.props.events.length === 10){
      events = this.props.events
          return (
            <div className="container">
              <div className="dt">
                <span className="clickable" onClick={this.props.prev}>&larr;</span>
                {moment().add(this.props.today, 'day').format("DD MMM, YYYY")}
                <span className="clickable" onClick={this.props.next}>&rarr;</span>
              </div>
              <Carousel key='10'>
                <div className="card card-inverse col0" onClick={this.one} >
                  <div className="card-title">{events[0].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[0].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[0].longitude}
                                latitude  = {events[0].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col1" onClick={this.two} >
                  <div className="card-title">{events[1].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[1].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[1].longitude}
                                latitude  = {events[1].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col2" onClick={this.three} >
                  <div className="card-title">{events[2].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[2].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[2].longitude}
                                latitude  = {events[2].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col3" onClick={this.four} >
                  <div className="card-title">{events[3].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[3].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[3].longitude}
                                latitude  = {events[3].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col4" onClick={this.five} >
                  <div className="card-title">{events[4].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[4].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[4].longitude}
                                latitude  = {events[4].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col5" onClick={this.six} >
                  <div className="card-title">{events[5].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[5].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[5].longitude}
                                latitude  = {events[5].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col6" onClick={this.seven} >
                  <div className="card-title">{events[6].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[6].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[6].longitude}
                                latitude  = {events[6].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col7" onClick={this.eight} >
                  <div className="card-title">{events[7].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[7].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[7].longitude}
                                latitude  = {events[7].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col8" onClick={this.nine} >
                  <div className="card-title">{events[8].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[8].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[8].longitude}
                                latitude  = {events[8].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col9" onClick={this.ten} >
                  <div className="card-title">{events[9].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[9].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[9].longitude}
                                latitude  = {events[9].latitude}/>
                  </footer>
                </div>
              </Carousel>
            </div>
          )
    } else if (this.props.events.length === 11){
      events = this.props.events
          return (
            <div className="container">
              <div className="dt">
                <span className="clickable" onClick={this.props.prev}>&larr;</span>
                {moment().add(this.props.today, 'day').format("DD MMM, YYYY")}
                <span className="clickable" onClick={this.props.next}>&rarr;</span>
              </div>
              <Carousel key='11'>
                  <div className="card card-inverse col0" onClick={this.one} >
                  <div className="card-title">{events[0].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[0].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[0].longitude}
                                latitude  = {events[0].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col1" onClick={this.two} >
                  <div className="card-title">{events[1].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[1].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[1].longitude}
                                latitude  = {events[1].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col2" onClick={this.three} >
                  <div className="card-title">{events[2].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[2].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[2].longitude}
                                latitude  = {events[2].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col3" onClick={this.four} >
                  <div className="card-title">{events[3].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[3].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[3].longitude}
                                latitude  = {events[3].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col4" onClick={this.five} >
                  <div className="card-title">{events[4].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[4].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[4].longitude}
                                latitude  = {events[4].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col5" onClick={this.six} >
                  <div className="card-title">{events[5].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[5].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[5].longitude}
                                latitude  = {events[5].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col6" onClick={this.seven} >
                  <div className="card-title">{events[6].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[6].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[6].longitude}
                                latitude  = {events[6].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col7" onClick={this.eight} >
                  <div className="card-title">{events[7].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[7].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[7].longitude}
                                latitude  = {events[7].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col8" onClick={this.nine} >
                  <div className="card-title">{events[8].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[8].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[8].longitude}
                                latitude  = {events[8].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col9" onClick={this.ten} >
                  <div className="card-title">{events[9].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[9].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[9].longitude}
                                latitude  = {events[9].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col10" onClick={this.eleven} >
                  <div className="card-title">{events[10].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[10].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[10].longitude}
                                latitude  = {events[10].latitude}/>
                  </footer>
                </div>
              </Carousel>
            </div>
          )
    } else if (this.props.events.length > 11){
      events = this.props.events
          return (

            <div className="container">
              <div className="dt">
                <span className="clickable" onClick={this.props.prev}>&larr;</span>
                {moment().add(this.props.today, 'day').format("DD MMM, YYYY")}
                <span className="clickable" onClick={this.props.next}>&rarr;</span>
              </div>
              <Carousel key='12'>
                <div className="card card-inverse col0" onClick={this.one} >
                  <div className="card-title">{events[0].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[0].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[0].longitude}
                                latitude  = {events[0].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col1" onClick={this.two} >
                  <div className="card-title">{events[1].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[1].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[1].longitude}
                                latitude  = {events[1].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col2" onClick={this.three} >
                  <div className="card-title">{events[2].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[2].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[2].longitude}
                                latitude  = {events[2].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col3" onClick={this.four} >
                  <div className="card-title">{events[3].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[3].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[3].longitude}
                                latitude  = {events[3].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col4" onClick={this.five} >
                  <div className="card-title">{events[4].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[4].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[4].longitude}
                                latitude  = {events[4].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col5" onClick={this.six} >
                  <div className="card-title">{events[5].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[5].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[5].longitude}
                                latitude  = {events[5].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col6" onClick={this.seven} >
                  <div className="card-title">{events[6].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[6].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[6].longitude}
                                latitude  = {events[6].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col7" onClick={this.eight} >
                  <div className="card-title">{events[7].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[7].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[7].longitude}
                                latitude  = {events[7].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col8" onClick={this.nine} >
                  <div className="card-title">{events[8].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[8].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[8].longitude}
                                latitude  = {events[8].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col9" onClick={this.ten} >
                  <div className="card-title">{events[9].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[9].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[9].longitude}
                                latitude  = {events[9].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col10" onClick={this.eleven} >
                  <div className="card-title">{events[10].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[10].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[10].longitude}
                                latitude  = {events[10].latitude}/>
                  </footer>
                </div>
                <div className="card card-inverse col11" onClick={this.twelve} >
                  <div className="card-title">{events[11].title}</div>
                  <div className="funkySymbol">﹀</div>
                  <p className="card-text">{events[11].description}</p>
                  <footer className="card-geo">
                    <GeoLocation longitude = {events[11].longitude}
                                latitude  = {events[11].latitude}/>
                  </footer>
                </div>
              </Carousel>
            </div>
          )
   } else {
      return (
        <div className="container">
          <div className="dt">
            <span className="clickable" onClick={this.props.prev}>&larr;</span>
                {moment().add(this.props.today, 'day').format("DD MMM, YYYY")}
                <span className="clickable" onClick={this.props.next}>&rarr;</span>
          </div>
        </div>
        )
    }
  }
}

export default Carousels;
