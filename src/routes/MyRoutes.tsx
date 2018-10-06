import * as React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import About from "../components/about/About";
import Home from "../components/home/Home";
import NotFound from "../components/error/NotFound";

class MyRoutes extends React.Component {
  public render() {
    const activeStyle = { color: "red" };
    return (
      <div>
        <div>
          <NavLink activeStyle={activeStyle} to="/" exact>
            Home
          </NavLink>
          {" | "}
          <NavLink activeStyle={activeStyle} to="/about">
            About
          </NavLink>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default MyRoutes;
