import React, { Component } from "react";
import { openWeatherMapAPI, timezoneDBAPI } from "../../lib";

import ErrorComponent from "../../components/ErrorComponent";
import Loading from "../../components/Loading";
import WeatherCard from "../../components/WeatherCard";
import addLeadingZeros from "../../lib/utils/addLeadingZeros";

class WeatherView extends Component {
  state = {
    city: undefined,
    localTime: undefined,
    timeOfDay: "",
    error: false
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
      .catch(error => this.setState({ error }));
  }

  renderError = () => <ErrorComponent />;

  renderLoading = () => <Loading />;

  render() {
    const { city, localTime, error } = this.state;

    if (error !== false) {
      return this.renderError();
    }

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
        humidity={city.humidity}
        localTime={localTime}
        timeOfDay={this.state.timeOfDay}
      />
    );
  }
}

export default WeatherView;
