import React from 'react';
import {geolocated} from 'react-geolocated';
// taken from this link to build this function https://www.movable-type.co.uk/scripts/latlong.html
function getDistance(lat1,lon1,lat2,lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2-lat1);  // deg2rad below
  const dLon = deg2rad(lon2-lon1);
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

class gelocation extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable
      ? <div></div>
      : !this.props.isGeolocationEnabled
        ? <div></div>
        : !this.props.coords
          ? <div>Getting your location data&hellip; </div>
          : this.props.latitude
            ? <div>
              {Math.round(getDistance(this.props.latitude,this.props.longitude,this.props.coords.latitude,this.props.coords.longitude))}km away
              </div> : <div></div>
  }
}



export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 10000,
})(gelocation);

// Math.round(getDistance(this.props.latitude,this.props.longitude,this.props.coords.latitude,this.props.coords.longitude))