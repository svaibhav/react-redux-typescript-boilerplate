import * as React from "react";
import * as ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import App from "./components/App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import configureStore, { history } from "./store/configureStore";
import initialState from "./store/initialState";
import { Store } from "redux";
// require("./favicon.ico"); // Tell webpack to load favicon.ico
const store: Store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
