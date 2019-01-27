import parseResponseAsJson from "../utils/parseResponseAsJson";

const createTimezoneDBAPI = ({ fetch }) => {
  const getTimezoneByLocation = ({ lat, lon }) =>
    fetch(
      `http://api.timezonedb.com/v2.1/get-time-zone?key=${
        process.env.REACT_APP_TZDB_KEY
      }&format=json&by=position&lat=${lat}&lng=${lon}`
    )
      .then(parseResponseAsJson)
      .then(data => {
        if (data.status !== "OK") {
          return Promise.reject(
            new Error({
              error: true,
              message: data.message,
              data
            })
          );
        }

        return data;
      });

  return {
    getTimezoneByLocation
  };
};

export default createTimezoneDBAPI;
