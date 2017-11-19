import {
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM
} from "./../actions/marketTypes.js";
const market = (
  state = {
    orders: []
  },
  action
) => {
  switch (action.type) {
    case "CREATE_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };
    case "MOVE_ORDER_TO_FARM":
      return {
        orders: state.orders.filter(
          order => order.id !== state.orders[0].id
        )
      };
    default:
      return { ...state };
  }
};
export default market;
export const getMarketOrders = state => state.market.orders;
