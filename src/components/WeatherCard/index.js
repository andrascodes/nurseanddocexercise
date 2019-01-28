import React from "react";

const WeatherCard = ({
  name,
  flag,
  temperature,
  wind,
  weather,
  localTime,
  bgColor
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
        <div className="Icon">Img</div>
        <div className="Text">{weather.description}</div>
      </div>
      <div className="Wind" style={{ display: "flex" }}>
        <div className="Icon">Img</div>
        <div className="Text">
          {wind.description}, {wind.speed} m/s
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
