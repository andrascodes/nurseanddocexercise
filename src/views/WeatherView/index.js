import React, { Component } from "react";
import { openWeatherMapAPI, timezoneDBAPI } from "../../lib";

import WeatherCard from "../../components/WeatherCard";
import addLeadingZeros from "../../lib/utils/addLeadingZeros";

class WeatherView extends Component {
  state = {
    city: undefined,
    localTime: undefined,
    timeOfDay: ""
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    openWeatherMapAPI
      .getCurrentWeatherByCityId(id)
      .then(city => {
        this.setState({ city });
        return timezoneDBAPI.getTimezoneByLocation({ ...city.coord }, 1);
      })
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

  renderError = () => {};

  renderLoading = () => <div>Loading...</div>;

  render() {
    const { city, localTime } = this.state;

    if (city === undefined || localTime === undefined) {
      return this.renderLoading();
    }

    return (
      <WeatherCard
        name={city.name}
        flag={city.flag}
        temperature={city.temperature}
        wind={city.wind}
        weather={city.weather}
        localTime={localTime}
        timeOfDay={this.state.timeOfDay}
      />
    );
  }
}

export default WeatherView;
