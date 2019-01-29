import React, { Component } from "react";

import ErrorComponent from "../ErrorComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import addLeadingZeros from "../../lib/utils/addLeadingZeros";
import styled from "styled-components";

const Card = styled(Link)`
  color: unset;
  text-decoration: unset;
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  margin-bottom: 4px;
  height: 65px;
  padding-left: 15px;
  padding-right: 12px;
`;

const CityName = styled.div`
  flex-grow: 1;
  font-size: 20px;
  display: flex;
  align-items: center;
  & div {
    margin-top: 4px;
    margin-left: 8px;
    font-size: 25px;
  }
`;

const Weather = styled.div`
  display: flex;
  font-size: 40px;
`;

const Icon = styled.div`
  margin-right: 20px;
`;

const Temperature = styled.div``;

class CityCard extends Component {
  state = {
    localTime: undefined,
    timeOfDay: "",
    error: false
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
      .catch(error => this.setState({ error }));
  }

  renderError = () => <ErrorComponent />;
  renderLoading = () => <Loading />;

  render() {
    if (this.state.error !== false) {
      return this.renderError();
    }

    if (this.state.localTime === undefined) {
      return this.renderLoading();
    }

    return (
      <Card to={`/weather/${this.props.id}`}>
        <CityName>
          {this.props.name}
          <div>{this.props.flag}</div>
        </CityName>
        <Weather>
          <Icon>
            {this.state.timeOfDay === "night" ? (
              <FontAwesomeIcon icon={this.props.weather[0].icon.night} />
            ) : (
              <FontAwesomeIcon icon={this.props.weather[0].icon.day} />
            )}
          </Icon>
          <Temperature>{this.props.temperature}&#176;</Temperature>
        </Weather>
      </Card>
    );
  }
}

export default CityCard;
