import React, { Component } from "react";
import CardNumberInput from "./CardNumberInput.js";

class CardNumberHolder extends Component {
  static displayName = "Card Number Holder";
  state = {
    cardNumber: ""
  };

  handleChange = cardNumber => {
    this.setState({
      cardNumber
    });
  };
  render() {
    return (
      <CardNumberInput
        cardNumber={this.state.cardNumber}
        onChange={this.handleChange}
      />
    );
  }
}

export default CardNumberHolder;
