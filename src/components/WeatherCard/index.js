import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: calc(100% - 10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 10px);
  border: 1px solid black;
  border-radius: 8px;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 1;
  width: 100%;
`;

const Time = styled.div`
  margin-bottom: 20px;
`;

const CityName = styled.div`
  font-size: 35px;
  text-align: center;
`;

const Temperature = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 75px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
`;

const EdgeValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  &:first-child {
    margin-left: 20px;
  }

  &:last-child {
    margin-right: 20px;
  }
`;
const Current = styled.div`
  font-size: 65px;
  line-height: 0.8;
`;

const Icon = styled.div`
  margin-left: 20px;
  font-size: 40px;
`;

const Description = styled.div`
  margin-right: 20px;
`;

const WeatherCard = ({
  name,
  flag,
  temperature,
  wind,
  weather,
  humidity,
  localTime,
  timeOfDay
}) => {
  return (
    <Card>
      <TopContainer>
        <Time>{localTime}</Time>
        <CityName>
          <div>
            {name}, {flag}
          </div>
        </CityName>
        <Temperature>
          <EdgeValue>
            <div>Min</div>
            {temperature.min}&#176;
          </EdgeValue>
          <Current>{temperature.current}&#176;</Current>
          <EdgeValue>
            <div>Max</div>
            {temperature.max}&#176;
          </EdgeValue>
        </Temperature>
      </TopContainer>
      <Container>
        <Icon>
          {timeOfDay === "night" ? (
            <FontAwesomeIcon icon={weather[0].icon.night} />
          ) : (
            <FontAwesomeIcon icon={weather[0].icon.day} />
          )}
        </Icon>
        <Description>{weather[0].description}</Description>
      </Container>
      <Container>
        <Icon>
          <FontAwesomeIcon icon="wind" />
        </Icon>
        <Description>
          {wind.description} ({wind.speed} m/s)
        </Description>
      </Container>
      <Container>
        <Icon>
          <FontAwesomeIcon icon="tint" />
        </Icon>
        <Description>{humidity}%</Description>
      </Container>
    </Card>
  );
};

export default WeatherCard;
