import React, { Fragment } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import {
  faBolt,
  faCloud,
  faCloudMoon,
  faCloudMoonRain,
  faCloudRain,
  faCloudShowersHeavy,
  faCloudSun,
  faCloudSunRain,
  faIcicles,
  faMoon,
  faSnowflake,
  faSun,
  faWater,
  faWind
} from "@fortawesome/free-solid-svg-icons";

import ListView from "./views/ListView";
import SearchView from "./views/SearchView";
import WeatherView from "./views/WeatherView";
import { createGlobalStyle } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faBolt,
  faCloud,
  faCloudMoon,
  faCloudMoonRain,
  faCloudRain,
  faCloudShowersHeavy,
  faCloudSun,
  faCloudSunRain,
  faIcicles,
  faMoon,
  faSnowflake,
  faSun,
  faWater,
  faWind
);

const GlobalStyles = createGlobalStyle`
  body {
     /* @import url('https://fonts.googleapis.com/css?family=Notable');
    font-family: 'Notable', sans-serif; */
    margin: 0;
    height: 100vh;
    background-color: #ecf0f1;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: 0;
  }
`;

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Router>
        <Fragment>
          <Route exact path="/" component={SearchView} />
          <Route path="/search/" component={ListView} />
          <Route path="/weather/:id" component={WeatherView} />
        </Fragment>
      </Router>
    </Fragment>
  );
};

export default App;
