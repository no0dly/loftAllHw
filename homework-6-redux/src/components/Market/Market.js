import React, { Component } from "react";
import {
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM
} from "./../../actions/marketTypes.js";
import { connect } from "react-redux";
import { getMarketOrders } from "./../../reducers/market.js";
import Moment from "react-moment";
import "moment-timezone";
import {
  createOrder,
  moveOrderToFarm
} from "./../../actions/marketActions";
import "./Market.css";
let id = 0;
const getId = () => {
  id += 1;
  return id;
};
export const vegetables = [
  "Капуста",
  "Редиска",
  "Огурцы",
  "Морковь",
  "Горох",
  "Баклажан",
  "Тыква",
  "Чеснок",
  "Лук",
  "Перец",
  "Картофель",
  "Редька"
];

const getNewOrder = () => {
  return {
    id: getId(),
    name:
      vegetables[
        Math.floor(Math.random() * vegetables.length)
      ],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

class Market extends Component {
  handleClick = () => {
    const { createOrder } = this.props;
    createOrder(getNewOrder());
    // store.dispatch(addOrder(getNewOrder()));
  };
  handleClicktoFarm = () => {
    const { moveOrderToFarm, market } = this.props;
    moveOrderToFarm(market.orders[0]);
  };
  render() {
    const { market } = this.props;
    const disabled =
      market.orders.length === 0 ? "disabled" : false;
    const orders = market.orders.map((order, i) => (
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
      <div className="market">
        <h1>Новые заказы в магазине</h1>
        <div className="buttons">
          <button onClick={this.handleClick}>
            Создать заказ
          </button>
          <button
            onClick={this.handleClicktoFarm}
            disabled={disabled}
          >
            Отправить заказ на ферму
          </button>
        </div>
        <div className="order-list">{orders}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  market: {
    orders: getMarketOrders(state)
  }
});

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Market
);
