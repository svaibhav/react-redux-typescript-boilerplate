import * as React from "react";
import logo from "./logo.svg";

export interface IHeaderProps {
  appTitle?: string;
}

class Header extends React.Component<IHeaderProps> {
  public render(): JSX.Element {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          {this.props.appTitle || "Welcome to React"}
        </h1>
      </header>
    );
  }
}

export default Header;
