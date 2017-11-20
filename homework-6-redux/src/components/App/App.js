import React, { Component } from "react";
import Market from "components/Market";
import Budget from "components/Budget";
import Farm from "components/Farm";
import styled from "styled-components";
import "./App.css";

class App extends Component {
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
