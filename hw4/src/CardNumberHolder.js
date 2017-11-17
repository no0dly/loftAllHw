import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  }
  handleChange = (value) => {
    this.setState({
      cardNumber: value
    })
  }
  render() {
    const { cardNumber } = this.state;
    return (
      <div className="component-wrapper">
        <CardNumberInput cardNumber={ cardNumber } onChange={ this.handleChange } />
      </div>
    );
  }
}

export default CardNumberHolder;
