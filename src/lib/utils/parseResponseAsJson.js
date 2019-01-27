const parseResponseAsJSON = response => {
  if (response.ok !== true) {
    return Promise.reject({
      error: true,
      statusCode: response.status,
      statusText: response.statusText
    });
  }

  return response.json();
};

export default parseResponseAsJSON;
