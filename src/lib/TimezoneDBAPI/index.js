import parseResponseAsJson from "../utils/parseResponseAsJson";

const getTimeOfDay = hours => {
  if (hours < 7) {
    return "night";
  } else if (hours < 12) {
    return "morning";
  } else if (hours < 18) {
    return "day";
  } else if (hours < 21) {
    return "evening";
  } else {
    return "night";
  }
};

const wait = n => new Promise(resolve => setTimeout(resolve, n));

const fetch_retry = (url, options, retryNumber) =>
  fetch(url, options).catch(error => {
    if (retryNumber < 0) {
      throw error;
    }
    return wait(1200).then(() => fetch_retry(url, options, retryNumber - 1));
  });

const createTimezoneDBAPI = ({ fetch }) => {
  const getTimezoneByLocation = ({ lat, lon }, retryNumber) =>
    fetch_retry(
      `https://api.timezonedb.com/v2.1/get-time-zone?key=${
        process.env.REACT_APP_TZDB_KEY
      }&format=json&by=position&lat=${lat}&lng=${lon}`,
      {},
      retryNumber
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
      })
      .then(localTime => {
        const date = new Date(localTime.formatted);
        return {
          hours: date.getHours(),
          minutes: date.getMinutes(),
          color: getTimeOfDay(date.getHours())
        };
      })
      .catch(error => {
        if (retryNumber < 0) {
          return Promise.reject(error);
        }
        return setTimeout(
          getTimezoneByLocation({ lat, lon }, retryNumber - 1),
          1000
        );
      });
  return {
    getTimezoneByLocation
  };
};

export default createTimezoneDBAPI;
