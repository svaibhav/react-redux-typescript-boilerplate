import * as React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import AboutPage from "../components/about/AboutPage";
import HomePage from "../components/home/HomePage";
import NotFound from "../components/error/NotFound";
import UserInfo from "../components/user/UserInfo";

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
          {" | "}
          <NavLink activeStyle={activeStyle} to="/user">
            User
          </NavLink>
        </div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/user" component={UserInfo} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default MyRoutes;
