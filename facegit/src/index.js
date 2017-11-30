import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./components/AppRouter";
import createStore from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "bulma/css/bulma.css";

const store = createStore();
// const token = "a109b174e6636df387144979d16a3370f092459f";
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
