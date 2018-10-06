import * as React from "react";
import "./App.css";
import Footer from "./common/footer/Footer";
import Header from "./common/header/Header";
import MyRoutes from "../routes/MyRoutes";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="App">
        <Header appTitle="Welcome to React.js" />
        <BrowserRouter>
          <MyRoutes />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
