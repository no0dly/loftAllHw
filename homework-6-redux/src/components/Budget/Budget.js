import React, { Component } from "react";
import "./Budget.css";
import {
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM
} from "./../../actions/marketTypes.js";
import { connect } from "react-redux";
import { getBudget } from "./../../reducers/budget.js";
import "./Budget.css";
class Budget extends Component {
  render() {
    const { budget } = this.props;

    return (
      <div className="budget">
        <h1>Бюджет</h1>
        <p>Всего получено денег: {budget.profit}</p>
        <p>Расходы продавцов: -{budget.deliveryExpanse}</p>
        <p>Расходы на ферме: -{budget.farmExpanse}</p>
        <p>Расходы на доставку: -{budget.marketExpanse}</p>
        <p>
          Итого:{" "}
          {budget.profit -
            budget.deliveryExpanse -
            budget.farmExpanse -
            budget.marketExpanse}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  budget: getBudget(state)
});
export default connect(mapStateToProps, null)(Budget);
