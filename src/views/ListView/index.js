import React, { Component } from "react";
import { openWeatherMapAPI, timezoneDBAPI } from "../../lib";

import CityCard from "../../components/CityCard";
import queryString from "query-string";

class ListView extends Component {
  state = {
    cities: [],
    error: false
  };

  componentDidMount() {
    const { city } = queryString.parse(this.props.location.search);
    openWeatherMapAPI
      .findCityByName(city)
      .then(cities => this.setState({ cities }))
      .catch(console.error);
  }

  render() {
    return (
      <div>
        {this.state.cities.map(city => (
          <CityCard
            key={`${city.id}-card`}
            id={city.id}
            getTimezoneByLocation={() =>
              timezoneDBAPI.getTimezoneByLocation(
                city.coord,
                this.state.cities.length
              )
            }
            name={city.name}
            flag={city.flag}
            temperature={city.temperature.current}
          />
        ))}
      </div>
    );
  }
}

export default ListView;
