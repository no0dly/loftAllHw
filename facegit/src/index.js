import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./components/AppRouter";
import createStore from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "bulma/css/bulma.css";

const store = createStore();
// const token = "4b68fca811673a3d32aabe54b204407f8e6d83f0";
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
