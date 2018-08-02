import React, { Component } from "react";

export default class GoogleMap extends Component {
    componentDidMount() {
        // takes HTML node as the first argument where map is to be rendered
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon 
            }
        });
    }

  render() {
    // you can access this elsewhere by doing this.refs.map
    return <div ref="map" />;
  }
}
