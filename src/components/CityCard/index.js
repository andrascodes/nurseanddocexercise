import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import addLeadingZeros from "../../lib/utils/addLeadingZeros";

class CityCard extends Component {
  state = {
    localTime: undefined,
    timeOfDay: ""
  };

  componentDidMount() {
    this.props
      .getTimezoneByLocation()
      .then(localTime =>
        this.setState({
          localTime: `${addLeadingZeros(localTime.hours)}:${addLeadingZeros(
            localTime.minutes
          )}`,
          timeOfDay: localTime.timeOfDay
        })
      )
      .catch(console.error);
  }

  render() {
    return (
      <Link to={`/weather/${this.props.id}`}>
        <div className="CityCard">
          <div className="CityName">
            {this.props.name}, {this.props.flag}
          </div>
          <div className="LocalTime">{this.state.localTime}</div>
          <div className="Temperature">{this.props.temperature}</div>
          <div className="Icon">
            {this.state.timeOfDay === "night" ? (
              <FontAwesomeIcon icon={this.props.weather[0].icon.night} />
            ) : (
              <FontAwesomeIcon icon={this.props.weather[0].icon.day} />
            )}
          </div>
        </div>
      </Link>
    );
  }
}

export default CityCard;
