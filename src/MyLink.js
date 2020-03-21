import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";

function MyLink() {
  return (
    <Router>
      <div></div>
    </Router>
  );
}

function ExpecificLink({ label, to, active }) {
  let match = useRouteMatch({
    path: to,
    exact: active
  });
  return (
      <div ></div>
  );
}
