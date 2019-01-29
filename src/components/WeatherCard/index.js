import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WeatherCard = ({
  name,
  flag,
  temperature,
  wind,
  weather,
  localTime,
  timeOfDay
}) => {
  return (
    <div className="WeatherCard">
      <div className="LocalTime">{localTime}</div>
      <div className="CityName">
        {name}, {flag}
      </div>
      <div className="Temperature" style={{ display: "flex" }}>
        <div className="Min">{temperature.min}</div>
        <div className="Current">{temperature.current}</div>
        <div className="Max">{temperature.max}</div>
      </div>
      <div className="Weather" style={{ display: "flex" }}>
        <div className="Icon">
          {timeOfDay === "night" ? (
            <FontAwesomeIcon icon={weather[0].icon.night} />
          ) : (
            <FontAwesomeIcon icon={weather[0].icon.day} />
          )}
        </div>
        <div className="Text">{weather[0].description}</div>
      </div>
      <div className="Wind" style={{ display: "flex" }}>
        <div className="Icon">
          <FontAwesomeIcon icon="wind" />
        </div>
        <div className="Text">
          {wind.description}, {wind.speed} m/s
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
