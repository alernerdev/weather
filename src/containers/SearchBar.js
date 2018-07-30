import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCeators, bindActionCreators } from "redux";
import { fetchWeather} from "../actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: "" };
  }

  onInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    // get weather data and ...
    this.props.fetchWeather(this.state.searchTerm);

    // ... clear out the input field
    this.setState({searchTerm: ''});
  };

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a 5 day forecast in your favorite cities"
          className="form-control"
          value={this.state.searchTerm}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

/* tie this container component to redux -- SearchBar to action creator*/
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);