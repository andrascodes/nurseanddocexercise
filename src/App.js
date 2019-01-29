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

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={SearchView} />
        <Route path="/search/" component={ListView} />
        <Route path="/weather/:id" component={WeatherView} />
      </Fragment>
    </Router>
  );
};

export default App;
