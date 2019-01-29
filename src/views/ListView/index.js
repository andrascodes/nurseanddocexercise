import React, { Component } from "react";
import { openWeatherMapAPI, timezoneDBAPI } from "../../lib";

import CityCard from "../../components/CityCard";
import ErrorComponent from "../../components/ErrorComponent";
import Loading from "../../components/Loading";
import queryString from "query-string";
import styled from "styled-components";

const View = styled.div`
  align-self: flex-start;
  width: calc(100% - 10px);
  margin-top: 5px;
`;

class ListView extends Component {
  state = {
    cities: undefined,
    error: false
  };

  componentDidMount() {
    const { city } = queryString.parse(this.props.location.search);
    openWeatherMapAPI
      .findCityByName(city)
      .then(cities => this.setState({ cities }))
      .catch(error => this.setState({ error }));
  }

  renderLoading = () => <Loading />;

  renderError = () => <ErrorComponent />;

  render() {
    if (this.state.error !== false) {
      return this.renderError();
    }

    if (this.state.cities === undefined) {
      return this.renderLoading();
    }

    return (
      <View>
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
            weather={city.weather}
          />
        ))}
      </View>
    );
  }
}

export default ListView;
