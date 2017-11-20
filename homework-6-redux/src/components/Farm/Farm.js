import React, { Component } from "react";
import { MOVE_ORDER_TO_FARM } from "./../../actions/marketTypes.js";
import { MOVE_ORDER_TO_CUSTOMER } from "./../../actions/farmTypes.js";
import Moment from "react-moment";
import { connect } from "react-redux";
import { getFarmOrders } from "./../../reducers/farm.js";
import { moveOrderToCustomer } from "./../../actions/farmActions";
import "./Farm.css";

class Farm extends Component {
  handleClick = () => {
    const { moveOrderToCustomer, farm } = this.props;
    moveOrderToCustomer(farm.orders[0]);
  };
  render() {
    const { farm } = this.props;
    const disabled =
      farm.orders.length === 0 ? "disabled" : false;
    const orders = farm.orders.map((order, i) => (
      <div className="order" key={i}>
        <div className="order__upper">
          <p className="p--order">Название: {order.name}</p>
          <p className="p--order">Цена: {order.price}</p>
        </div>
        <div className="order__lower">
          <p className="p--order">
            Создан: <Moment>{order.createdAt}</Moment>
          </p>
        </div>
      </div>
    ));
    return (
      <div className="farm">
        <h1>Производство на ферме</h1>
        <button
          onClick={this.handleClick}
          disabled={disabled}
        >
          Отправить урожай клиенту
        </button>
        <div className="order-list">{orders}</div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  farm: {
    orders: getFarmOrders(state)
  }
});
const mapDispatchToProps = {
  moveOrderToCustomer
};
export default connect(mapStateToProps, mapDispatchToProps)(
  Farm
);
