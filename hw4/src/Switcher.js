import React, {Component} from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = (e) => {
    const id = parseInt(e.target.getAttribute("data-id"));
    const { selectedChild } = this.state;
    if (selectedChild !== id) {
      this.setState({
        selectedChild: id
      })
    }
  }

  renderChildren = () => {
    const childrens = React.Children.toArray(this.props.children);
    const { selectedChild } = this.state;
    return childrens.map((child, idx) => {
      return (idx === selectedChild) ? child : null;
    });
  };
  renderList = () => {
    const childrens = React.Children.toArray(this.props.children);

    return childrens.map((child, idx) => {
      let displayedName;
      (child.type.displayName) ? displayedName = child.type.displayName : displayedName = child.type.name;
      return (
        <li
          key={ idx }
          className="component-list__name"
          data-id={idx}
          onClick={ this.handleChangeChild }
        >
          { displayedName }
        </li>
      )
    });


  };
  render() {
    return (
      <div>
        <ul className="component-list">
          { this.renderList() }
        </ul>
        { this.renderChildren() }
      </div>
    );
  };
}

export default Switcher;
