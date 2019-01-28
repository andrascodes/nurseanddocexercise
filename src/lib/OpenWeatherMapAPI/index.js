import { flag } from "country-code-emoji";
import parseResponseAsJSON from "../utils/parseResponseAsJson";

const handleError = response => {
  if (response.cod !== "200" && response.cod !== 200) {
    return Promise.reject(
      new Error({
        error: true,
        message: response.message,
        response
      })
    );
  }

  return response;
};

const getWindDescription = speed => {
  // https://en.wikipedia.org/wiki/Beaufort_scale
  if (speed < 0.5) {
    return "Calm";
  } else if (0.5 <= speed && speed < 1.6) {
    return "Light air";
  } else if (1.6 <= speed && speed < 3.4) {
    return "Light breeze";
  } else if (3.4 <= speed && speed < 5.6) {
    return "Gentle breeze";
  } else if (5.6 <= speed && speed < 8) {
    return "Moderate breeze";
  } else if (8 <= speed && speed < 10.8) {
    return "Fresh breeze";
  } else if (10.8 <= speed && speed < 13.9) {
    return "Strong breeze";
  } else if (13.9 <= speed && speed < 17.2) {
    return "High winds";
  } else if (17.2 <= speed && speed < 20.8) {
    return "Gale";
  } else if (20.8 <= speed && speed < 24.5) {
    return "Strong gale";
  } else if (24.5 <= speed && speed < 28.5) {
    return "Storm";
  } else if (28.5 <= speed && speed < 32.6) {
    return "Violent storm";
  } else {
    return "Hurricane force";
  }
};

const createOpenWeatherMapAPI = ({ fetch }) => {
  const BASE_URL = "https://api.openweathermap.org/data/2.5/";

  const findCityByName = cityname =>
    fetch(
      `${BASE_URL}find?q=${cityname}&units=metric&appid=${
        process.env.REACT_APP_OWM_KEY
      }`
    )
      .then(parseResponseAsJSON)
      .then(handleError)
      .then(data => data.list)
      .then(cities =>
        cities.map(city => ({
          id: city.id,
          name: city.name,
          countryCode: city.sys.country,
          flag: flag(city.sys.country),
          coord: city.coord,
          temperature: {
            max: Math.floor(city.main.temp_max),
            min: Math.floor(city.main.temp_min),
            current: Math.floor(city.main.temp)
          },
          humidity: city.main.humidity,
          wind: {
            speed: city.wind.speed,
            description: getWindDescription(city.wind.speed)
          },
          weather: city.weather[0]
        }))
      );

  const getCurrentWeatherByCityId = cityId =>
    fetch(
      `${BASE_URL}weather?id=${cityId}&units=metric&appid=${
        process.env.REACT_APP_OWM_KEY
      }`
    )
      .then(parseResponseAsJSON)
      .then(handleError)
      .then(city => ({
        id: city.id,
        name: city.name,
        countryCode: city.sys.country,
        flag: flag(city.sys.country),
        coord: city.coord,
        temperature: {
          max: Math.floor(city.main.temp_max),
          min: Math.floor(city.main.temp_min),
          current: Math.floor(city.main.temp)
        },
        humidity: city.main.humidity,
        wind: {
          speed: city.wind.speed,
          description: getWindDescription(city.wind.speed)
        },
        weather: city.weather[0]
      }));

  return {
    findCityByName,
    getCurrentWeatherByCityId
  };
};

export default createOpenWeatherMapAPI;
