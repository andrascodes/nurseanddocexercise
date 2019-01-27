import createOpenWeatherMapAPI from "./OpenWeatherMapAPI";
import createTimezoneDBAPI from "./TimezoneDBAPI";
import createWeatherAPI from "./WeatherAPI";

const timezoneDBAPI = createTimezoneDBAPI({ fetch: window.fetch });
const openWeatherMapAPI = createOpenWeatherMapAPI({ fetch: window.fetch });
const weatherAPI = createWeatherAPI({ timezoneDBAPI, openWeatherMapAPI });

export { weatherAPI };
