import React, { Component } from "react";
import PropTypes from "prop-types";
class CardNumberInput extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      number: this.format(props.cardNumber)
    };
  }
  static propTypes = {
    cardNumber: PropTypes.string
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      number: this.format(nextProps.cardNumber)
    });
  }
  handleChange = event => {
    const { onChange } = this.props;
    onChange(this.normalize(event.target.value));
  };

  format = val => {
    const pattern = /(.{4})/g;
    if (typeof val === "string") {
      let str = val.replace(pattern, "$1 ");
      return str;
    } else if (typeof val === "undefined") {
      val = "";
    } else if (typeof val === "object" && val !== null) {
      val = val.join(" ").replace(/\s/g, "");
      let str = val.replace(pattern, "$1 ");
      return str;
    } else if (typeof val === "number") {
      val += "";
      let str = val.replace(pattern, "$1 ");
      return str;
    } else {
      // throw new Error("Ошибка переданного типа " + val);
      val = "";
      return val;
    }
  };
  normalize = val => {
    val = val.replace(/\s/g, "");
    return val;
  };
  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          placeholder="XXXX XXXX XXXX XXXX"
          value={this.state.number}
        />
      </div>
    );
  }
}

export default CardNumberInput;
