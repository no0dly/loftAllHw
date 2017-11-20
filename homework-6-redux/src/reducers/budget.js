import {
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM
} from "./../actions/marketTypes.js";
import { MOVE_ORDER_TO_CUSTOMER } from "./../actions/farmTypes.js";
const budget = (
  state = {
    profit: 0,
    marketExpanse: 0,
    farmExpanse: 0,
    deliveryExpanse: 0
  },
  action
) => {
  switch (action.type) {
    case "CREATE_ORDER":
      return {
        ...state,
        profit:
          state.profit && action.payload.price
            ? state.profit + action.payload.price
            : 111,
        marketExpanse: state.marketExpanse
          ? state.marketExpanse + 20
          : 20
      };
    case "MOVE_ORDER_TO_FARM":
      return {
        ...state,
        farmExpanse: state.farmExpanse
          ? state.farmExpanse + 100
          : 100
      };
    case "MOVE_ORDER_TO_CUSTOMER":
      return {
        ...state,
        deliveryExpanse: state.deliveryExpanse
          ? state.deliveryExpanse + 20
          : 20
      };
    default:
      return { ...state };
  }
};
export default budget;
export const getBudget = state => state.budget;
