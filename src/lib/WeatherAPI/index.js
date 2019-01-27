import { flag } from "country-code-emoji";

const createWeatherAPI = ({ openWeatherMapAPI, timezoneDBAPI }) => {
  const getWeatherByCityname = async cityname => {
    const cities = await openWeatherMapAPI.findWeatherByCityname(cityname);

    const timezones = await Promise.all(
      cities.map(city =>
        timezoneDBAPI
          .getTimezoneByLocation({ ...city.coord })
          .then(currentTime => {
            const date = new Date(currentTime.formatted);
            return {
              hours: date.getHours(),
              minutes: date.getMinutes()
            };
          })
      )
    );

    return cities.map((city, i) => ({
      id: city.id,
      name: city.name,
      countryCode: city.sys.country,
      flag: flag(city.sys.country),
      coord: city.coord,
      temperature: {
        high: city.main.temp_max,
        low: city.main.temp_min,
        current: city.main.temp
      },
      humidity: city.main.humidity,
      windSpeed: city.wind.speed,
      weather: city.weather[0],
      localTime: timezones[i]
    }));
  };

  return {
    getWeatherByCityname
  };
};

export default createWeatherAPI;
