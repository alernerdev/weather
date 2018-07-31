import React, { Component } from "react";
import { connect } from "react-redux";
import {Sparklines, SparklinesLine} from "react-sparklines";

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(el => el.main.temp)
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
            <Sparklines height={120} width={180} data={temps}>
                <SparklinesLine color="red"/>
            </Sparklines>
        </td>
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
