import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

const rootElement = document.getElementById("root");
ReactDOM.render(
 <Provider store={store}>
  <Router>
   <App />
  </Router>
 </Provider>,
 rootElement
);
