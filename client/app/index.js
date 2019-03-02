import React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import App from "./components/App/App";
import NotFound from "./components/App/NotFound";
// import { useBasename, createHistory } from "history";

import SignIn from "./components/SignIn/SignIn";
// import Map from "./components/Map/Map";
import HelloWorld from "./components/HelloWorld/HelloWorld";
import "tachyons";

import "./styles/vendor/normalize.css";
import MapEasy from "./components/Map/Map";
import StpDash from "./components/StpDash/StpDash";

render(
  <Router>
    <div className="bg-light-blue vh-100">
      <App>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/map" component={MapEasy} />
          <Route exact path="/stp_dash" component={StpDash} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </div>
  </Router>,
  document.getElementById("app")
);
