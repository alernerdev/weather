import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/GoogleMap";

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(el => el.main.temp)
    const pressure = cityData.list.map(el => el.main.pressure)
    const humidity = cityData.list.map(el => el.main.humidity)
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;

    return (
      <tr key={name}>
        <td><GoogleMap lon = {lon} lat = {lat}/></td>
        <td><Chart color="red" data={temps} units="K"/></td>
        <td><Chart color="orange" data={pressure} units="hPa"/></td>
        <td><Chart color="green" data={humidity} units="%"/></td>
      </tr>
    );
  }
}

function mapStateToProps(state) {
  // state.weather comes from combineReducer list
  return { weather: state.weather };
}

export default connect(
  mapStateToProps,
  null
)(WeatherList);
