import React, { Component } from "react";
import Market from "./../Market/Market.js";
import Budget from "./../Budget/index.js";
import Farm from "./../Farm/index.js";
import styled from "styled-components";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="app">
        <Market />
        <Farm />
        <Budget />
      </div>
    );
  }
}

export default App;
