import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "../Layout";
import Home from "../../pages/Home";
import About from "../../pages/About";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    component: About
  }
];

function App() {
  return (
    <Router>
      <Layout>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
