import createOpenWeatherMapAPI from "./OpenWeatherMapAPI";
import createTimezoneDBAPI from "./TimezoneDBAPI";

const timezoneDBAPI = createTimezoneDBAPI({ fetch: window.fetch });
const openWeatherMapAPI = createOpenWeatherMapAPI({ fetch: window.fetch });

export { timezoneDBAPI, openWeatherMapAPI };
