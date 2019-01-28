import "./App.css";

import React, { Fragment } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import ListView from "./views/ListView";
import SearchView from "./views/SearchView";
import WeatherView from "./views/WeatherView";

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
