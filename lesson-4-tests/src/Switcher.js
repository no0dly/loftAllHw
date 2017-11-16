import React, { Component } from "react";
import CardNumberHolder from "./CardNumberHolder.js";
import ModalButton from "./ModalButton.js";
import "./Switcher.css";

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };
  handleChangeChild = e => {
    let tag = parseInt(e.target.getAttribute("data-id"));
    this.setState(state => ({ selectedChild: tag }));
  };
  render() {
    const children = React.Children.toArray(
      this.props.children
    );
    return (
      <div>
        <ul className="component-list">
          {children.map((child, i) => (
            <p
              className="component-list__name"
              onClick={this.handleChangeChild}
              key={child.key}
              data-id={i}
            >
              {child.type.displayName
                ? child.type.displayName
                : child.type.name}
            </p>
          ))}
        </ul>
        <div className="component-wrapper">
          {this.state.selectedChild === 0
            ? children[0]
            : children[1]}
        </div>
      </div>
    );
  }
}

export default Switcher;
