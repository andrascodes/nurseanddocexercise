import parseResponseAsJSON from "../utils/parseResponseAsJson";

const createOpenWeatherMapAPI = ({ fetch }) => {
  const findWeatherByCityname = cityname =>
    fetch(
      `https://api.openweathermap.org/data/2.5/find?q=${cityname}&units=metric&appid=${
        process.env.REACT_APP_OWM_KEY
      }`
    )
      .then(parseResponseAsJSON)
      .then(data => {
        if (data.cod !== "200") {
          return Promise.reject(
            new Error({
              error: true,
              message: data.message,
              data
            })
          );
        }

        return data.list;
      });

  return {
    findWeatherByCityname
  };
};

export default createOpenWeatherMapAPI;
