import React, {Component} from 'react';
import EventCard from './eventCard.jsx';
import {Carousel} from 'react-materialize';
import moment from 'moment'
import GeoLocation from './geolocation.jsx'

// import EventDetails from './eventDetails.jsx';

class Carousels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

// Repetitive code because react currently doesnt have a way of dealing with dynamicaly loaded cards
  render () {
    let events = []
    if (this.props.events.length === 1){
      events = this.props.events
      return (
        <div className="container">
          <div className="datetime">
            <h1>{moment().format("dddd, MMM DD ")}</h1>
            <h1>{moment().format("h:mm a")}</h1>
          </div>
          <Carousel>
            <div className="card card-inverse">
              {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
              <div className="card-img-overlay">
                <h4 className="card-title">{events[0].title}</h4>
                <p className="card-text">{events[0].description}</p>
                <GeoLocation longitude = {events[0].longitude}
                             latitude  = {events[0].latitude}/>
              </div>
            </div>
          </Carousel>
        </div>

      )
    } else if (this.props.events.length === 2){
      events = this.props.events
      return (
        <div className="container">
          <h1>{moment().format("dddd, MMM DD")}</h1>
          <h1>{moment().format("h:mm a")}</h1>
          <Carousel>
            <div className="card card-inverse">
              {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
              <div className="card-img-overlay">
                <h4 className="card-title">{events[0].title}</h4>
                <p className="card-text">{events[0].description}</p>
                <GeoLocation longitude = {events[0].longitude}
                             latitude  = {events[0].latitude}/>
              </div>
            </div>
            <div className="card card-inverse">
              {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
              <div className="card-img-overlay">
                <h4 className="card-title">{events[1].title}</h4>
                <p className="card-text">{events[1].description}</p>
                <GeoLocation longitude = {events[1].longitude}
                             latitude  = {events[1].latitude}/>
              </div>
            </div>
          </Carousel>
        </div>

      )
    } else if (this.props.events.length === 3){
          events = this.props.events
          return (
            <div className="container">
              <h1>{moment().format("dddd, MMM DD")}</h1>
              <h1>{moment().format("h:mm a")}</h1>
              <Carousel>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[0].title}</h4>
                    <p className="card-text">{events[0].description}</p>
                    <GeoLocation longitude = {events[0].longitude}
                                 latitude  = {events[0].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[1].title}</h4>
                    <p className="card-text">{events[1].description}</p>
                    <GeoLocation longitude = {events[1].longitude}
                                 latitude  = {events[1].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[2].title}</h4>
                    <p className="card-text">{events[2].description}</p>
                    <GeoLocation longitude = {events[2].longitude}
                                 latitude  = {events[2].latitude}/>
                  </div>
                </div>
              </Carousel>
            </div>

          )
    } else if (this.props.events.length === 4){
          events = this.props.events
          return (
            <div className="container">
              <h1>{moment().format("dddd, MMM DD")}</h1>
              <h1>{moment().format("h:mm a")}</h1>
              <Carousel>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[0].title}</h4>
                    <p className="card-text">{events[0].description}</p>
                    <GeoLocation longitude = {events[0].longitude}
                                 latitude  = {events[0].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[1].title}</h4>
                    <p className="card-text">{events[1].description}</p>
                    <GeoLocation longitude = {events[1].longitude}
                                 latitude  = {events[1].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[2].title}</h4>
                    <p className="card-text">{events[2].description}</p>
                    <GeoLocation longitude = {events[2].longitude}
                                 latitude  = {events[2].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[3].title}</h4>
                    <p className="card-text">{events[3].description}</p>
                    <GeoLocation longitude = {events[3].longitude}
                                 latitude  = {events[3].latitude}/>
                  </div>
                </div>

              </Carousel>
            </div>

          )
    } else if (this.props.events.length === 5){
          events = this.props.events
          return (
            <div className="container">
              <h1>{moment().format("dddd, MMM DD")}</h1>
              <h1>{moment().format("h:mm a")}</h1>
              <Carousel>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[0].title}</h4>
                    <p className="card-text">{events[0].description}</p>
                    <GeoLocation longitude = {events[0].longitude}
                                 latitude  = {events[0].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[1].title}</h4>
                    <p className="card-text">{events[1].description}</p>
                    <GeoLocation longitude = {events[1].longitude}
                                 latitude  = {events[1].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[2].title}</h4>
                    <p className="card-text">{events[2].description}</p>
                    <GeoLocation longitude = {events[2].longitude}
                                 latitude  = {events[2].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[3].title}</h4>
                    <p className="card-text">{events[3].description}</p>
                    <GeoLocation longitude = {events[3].longitude}
                                 latitude  = {events[3].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[4].title}</h4>
                    <p className="card-text">{events[4].description}</p>
                    <GeoLocation longitude = {events[4].longitude}
                                 latitude  = {events[4].latitude}/>
                  </div>
                </div>
              </Carousel>
            </div>

          )
    } else if (this.props.events.length === 6){
          events = this.props.events
          return (
            <div className="container">
              <h1>{moment().format("dddd, MMM DD")}</h1>
              <h1>{moment().format("h:mm a")}</h1>
              <Carousel>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[0].title}</h4>
                    <p className="card-text">{events[0].description}</p>
                    <GeoLocation longitude = {events[0].longitude}
                                 latitude  = {events[0].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[1].title}</h4>
                    <p className="card-text">{events[1].description}</p>
                    <GeoLocation longitude = {events[1].longitude}
                                 latitude  = {events[1].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[2].title}</h4>
                    <p className="card-text">{events[2].description}</p>
                    <GeoLocation longitude = {events[2].longitude}
                                 latitude  = {events[2].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[3].title}</h4>
                    <p className="card-text">{events[3].description}</p>
                    <GeoLocation longitude = {events[3].longitude}
                                 latitude  = {events[3].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[4].title}</h4>
                    <p className="card-text">{events[4].description}</p>
                    <GeoLocation longitude = {events[4].longitude}
                                 latitude  = {events[4].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[5].title}</h4>
                    <p className="card-text">{events[5].description}</p>
                    <GeoLocation longitude = {events[5].longitude}
                                 latitude  = {events[5].latitude}/>
                  </div>
                </div>
              </Carousel>
            </div>

          )
    } else if (this.props.events.length === 7){
      events = this.props.events
          return (
            <div className="container">
              <h1>{moment().format("dddd, MMM DD")}</h1>
              <h1>{moment().format("h:mm a")}</h1>
              <Carousel>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[0].title}</h4>
                    <p className="card-text">{events[0].description}</p>
                    <GeoLocation longitude = {events[0].longitude}
                                 latitude  = {events[0].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[1].title}</h4>
                    <p className="card-text">{events[1].description}</p>
                    <GeoLocation longitude = {events[1].longitude}
                                 latitude  = {events[1].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[2].title}</h4>
                    <p className="card-text">{events[2].description}</p>
                    <GeoLocation longitude = {events[2].longitude}
                                 latitude  = {events[2].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[3].title}</h4>
                    <p className="card-text">{events[3].description}</p>
                    <GeoLocation longitude = {events[3].longitude}
                                 latitude  = {events[3].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[4].title}</h4>
                    <p className="card-text">{events[4].description}</p>
                    <GeoLocation longitude = {events[4].longitude}
                                 latitude  = {events[4].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[5].title}</h4>
                    <p className="card-text">{events[5].description}</p>
                    <GeoLocation longitude = {events[5].longitude}
                                 latitude  = {events[5].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[6].title}</h4>
                    <p className="card-text">{events[6].description}</p>
                    <GeoLocation longitude = {events[6].longitude}
                                 latitude  = {events[6].latitude}/>
                  </div>
                </div>
              </Carousel>
            </div>


          )
    } else if (this.props.events.length === 8){
      events = this.props.events
          return (
            <div className="container">
              <h1>{moment().format("dddd, MMM DD")}</h1>
              <h1>{moment().format("h:mm a")}</h1>
              <Carousel>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[0].title}</h4>
                    <p className="card-text">{events[0].description}</p>
                    <GeoLocation longitude = {events[0].longitude}
                                 latitude  = {events[0].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[1].title}</h4>
                    <p className="card-text">{events[1].description}</p>
                    <GeoLocation longitude = {events[1].longitude}
                                 latitude  = {events[1].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[2].title}</h4>
                    <p className="card-text">{events[2].description}</p>
                    <GeoLocation longitude = {events[2].longitude}
                                 latitude  = {events[2].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[3].title}</h4>
                    <p className="card-text">{events[3].description}</p>
                    <GeoLocation longitude = {events[3].longitude}
                                 latitude  = {events[3].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[4].title}</h4>
                    <p className="card-text">{events[4].description}</p>
                    <GeoLocation longitude = {events[4].longitude}
                                 latitude  = {events[4].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[5].title}</h4>
                    <p className="card-text">{events[5].description}</p>
                    <GeoLocation longitude = {events[5].longitude}
                                 latitude  = {events[5].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[6].title}</h4>
                    <p className="card-text">{events[6].description}</p>
                    <GeoLocation longitude = {events[6].longitude}
                                 latitude  = {events[6].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[7].title}</h4>
                    <p className="card-text">{events[7].description}</p>
                    <GeoLocation longitude = {events[7].longitude}
                                 latitude  = {events[7].latitude}/>
                  </div>
                </div>

              </Carousel>
            </div>

          )
    } else if (this.props.events.length === 9){
      events = this.props.events
          return (
            <div className="container">
              <h1>{moment().format("dddd, MMM DD")}</h1>
              <h1>{moment().format("h:mm a")}</h1>
              <Carousel>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[0].title}</h4>
                    <p className="card-text">{events[0].description}</p>
                    <GeoLocation longitude = {events[0].longitude}
                                 latitude  = {events[0].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[1].title}</h4>
                    <p className="card-text">{events[1].description}</p>
                    <GeoLocation longitude = {events[1].longitude}
                                 latitude  = {events[1].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[2].title}</h4>
                    <p className="card-text">{events[2].description}</p>
                    <GeoLocation longitude = {events[2].longitude}
                                 latitude  = {events[2].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[3].title}</h4>
                    <p className="card-text">{events[3].description}</p>
                    <GeoLocation longitude = {events[3].longitude}
                                 latitude  = {events[3].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[4].title}</h4>
                    <p className="card-text">{events[4].description}</p>
                    <GeoLocation longitude = {events[4].longitude}
                                 latitude  = {events[4].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[5].title}</h4>
                    <p className="card-text">{events[5].description}</p>
                    <GeoLocation longitude = {events[5].longitude}
                                 latitude  = {events[5].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[6].title}</h4>
                    <p className="card-text">{events[6].description}</p>
                    <GeoLocation longitude = {events[6].longitude}
                                 latitude  = {events[6].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[7].title}</h4>
                    <p className="card-text">{events[7].description}</p>
                    <GeoLocation longitude = {events[7].longitude}
                                 latitude  = {events[7].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[8].title}</h4>
                    <p className="card-text">{events[8].description}</p>
                    <GeoLocation longitude = {events[8].longitude}
                                 latitude  = {events[8].latitude}/>
                  </div>
                </div>

              </Carousel>
            </div>

          )
    } else if (this.props.events.length === 10){
      events = this.props.events
          return (
            <div className="container">
              <h1>{moment().format("dddd, MMM DD")}</h1>
              <h1>{moment().format("h:mm a")}</h1>
              <Carousel>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[0].title}</h4>
                    <p className="card-text">{events[0].description}</p>
                    <GeoLocation longitude = {events[0].longitude}
                                 latitude  = {events[0].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[1].title}</h4>
                    <p className="card-text">{events[1].description}</p>
                    <GeoLocation longitude = {events[1].longitude}
                                 latitude  = {events[1].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[2].title}</h4>
                    <p className="card-text">{events[2].description}</p>
                    <GeoLocation longitude = {events[2].longitude}
                                 latitude  = {events[2].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[3].title}</h4>
                    <p className="card-text">{events[3].description}</p>
                    <GeoLocation longitude = {events[3].longitude}
                                 latitude  = {events[3].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[4].title}</h4>
                    <p className="card-text">{events[4].description}</p>
                    <GeoLocation longitude = {events[4].longitude}
                                 latitude  = {events[4].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[5].title}</h4>
                    <p className="card-text">{events[5].description}</p>
                    <GeoLocation longitude = {events[5].longitude}
                                 latitude  = {events[5].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[6].title}</h4>
                    <p className="card-text">{events[6].description}</p>
                    <GeoLocation longitude = {events[6].longitude}
                                 latitude  = {events[6].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[7].title}</h4>
                    <p className="card-text">{events[7].description}</p>
                    <GeoLocation longitude = {events[7].longitude}
                                 latitude  = {events[7].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[8].title}</h4>
                    <p className="card-text">{events[8].description}</p>
                    <GeoLocation longitude = {events[8].longitude}
                                 latitude  = {events[8].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[9].title}</h4>
                    <p className="card-text">{events[9].description}</p>
                    <GeoLocation longitude = {events[9].longitude}
                                 latitude  = {events[9].latitude}/>
                  </div>
                </div>
              </Carousel>
            </div>
          )
    } else if (this.props.events.length === 11){
      events = this.props.events
          return (
            <div className="container">
              <h1>{moment().format("dddd, MMM DD")}</h1>
              <h1>{moment().format("h:mm a")}</h1>
              <Carousel>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[0].title}</h4>
                    <p className="card-text">{events[0].description}</p>
                    <GeoLocation longitude = {events[0].longitude}
                                 latitude  = {events[0].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[1].title}</h4>
                    <p className="card-text">{events[1].description}</p>
                    <GeoLocation longitude = {events[1].longitude}
                                 latitude  = {events[1].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[2].title}</h4>
                    <p className="card-text">{events[2].description}</p>
                    <GeoLocation longitude = {events[2].longitude}
                                 latitude  = {events[2].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[3].title}</h4>
                    <p className="card-text">{events[3].description}</p>
                    <GeoLocation longitude = {events[3].longitude}
                                 latitude  = {events[3].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[4].title}</h4>
                    <p className="card-text">{events[4].description}</p>
                    <GeoLocation longitude = {events[4].longitude}
                                 latitude  = {events[4].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[5].title}</h4>
                    <p className="card-text">{events[5].description}</p>
                    <GeoLocation longitude = {events[5].longitude}
                                 latitude  = {events[5].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[6].title}</h4>
                    <p className="card-text">{events[6].description}</p>
                    <GeoLocation longitude = {events[6].longitude}
                                 latitude  = {events[6].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[7].title}</h4>
                    <p className="card-text">{events[7].description}</p>
                    <GeoLocation longitude = {events[7].longitude}
                                 latitude  = {events[7].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[8].title}</h4>
                    <p className="card-text">{events[8].description}</p>
                    <GeoLocation longitude = {events[8].longitude}
                                 latitude  = {events[8].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[9].title}</h4>
                    <p className="card-text">{events[9].description}</p>
                    <GeoLocation longitude = {events[9].longitude}
                                 latitude  = {events[9].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[10].title}</h4>
                    <p className="card-text">{events[10].description}</p>
                    <GeoLocation longitude = {events[10].longitude}
                                 latitude  = {events[10].latitude}/>
                  </div>
                </div>
              </Carousel>
            </div>
          )
    } else if (this.props.events.length > 11){
      events = this.props.events
          return (
            <div className="container">
              <Carousel>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[0].title}</h4>
                    <p className="card-text">{events[0].description}</p>
                    <GeoLocation longitude = {events[0].longitude}
                                 latitude  = {events[0].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[1].title}</h4>
                    <p className="card-text">{events[1].description}</p>
                    <GeoLocation longitude = {events[1].longitude}
                                 latitude  = {events[1].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[2].title}</h4>
                    <p className="card-text">{events[2].description}</p>
                    <GeoLocation longitude = {events[2].longitude}
                                 latitude  = {events[2].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[3].title}</h4>
                    <p className="card-text">{events[3].description}</p>
                    <GeoLocation longitude = {events[3].longitude}
                                 latitude  = {events[3].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[4].title}</h4>
                    <p className="card-text">{events[4].description}</p>
                    <GeoLocation longitude = {events[4].longitude}
                                 latitude  = {events[4].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[5].title}</h4>
                    <p className="card-text">{events[5].description}</p>
                    <GeoLocation longitude = {events[5].longitude}
                                 latitude  = {events[5].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[6].title}</h4>
                    <p className="card-text">{events[6].description}</p>
                    <GeoLocation longitude = {events[6].longitude}
                                 latitude  = {events[6].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[7].title}</h4>
                    <p className="card-text">{events[7].description}</p>
                    <GeoLocation longitude = {events[7].longitude}
                                 latitude  = {events[7].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[8].title}</h4>
                    <p className="card-text">{events[8].description}</p>
                    <GeoLocation longitude = {events[8].longitude}
                                 latitude  = {events[8].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[9].title}</h4>
                    <p className="card-text">{events[9].description}</p>
                    <GeoLocation longitude = {events[9].longitude}
                                 latitude  = {events[9].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[10].title}</h4>
                    <p className="card-text">{events[10].description}</p>
                    <GeoLocation longitude = {events[10].longitude}
                                 latitude  = {events[10].latitude}/>
                  </div>
                </div>
                <div className="card card-inverse">
                  {/* <Image src={'snowboarding.jpg'} bsClass="img" responsive alt="logo" /> */}
                  <div className="card-img-overlay">
                    <h4 className="card-title">{events[11].title}</h4>
                    <p className="card-text">{events[11].description}</p>
                    <GeoLocation longitude = {events[11].longitude}
                                 latitude  = {events[11].latitude}/>
                  </div>
                </div>

              </Carousel>
            </div>
          )
   } else {
      return (
        <div className="container">
          <h1>{moment().format("dddd, MMM DD")}</h1>
          <h1>{moment().format("h:mm a")}</h1>
        </div>
        )
    }
  }
}

export default Carousels;