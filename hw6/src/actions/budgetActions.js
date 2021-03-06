import {
  MOVE_ORDER_TO_CUSTOMER,
  CREATE_ORDER,
  MOVE_ORDER_TO_FARM
} from "./budgetTypes";

export const moveOrderToCustomer = (payload) => {
  return {
    type: MOVE_ORDER_TO_CUSTOMER,
    payload
  }
}

export const createOrder = (payload) => {
  return {
    type: CREATE_ORDER,
    payload
  }
}

export const moveOrderToFarm = (payload) => {
  return {
    type: MOVE_ORDER_TO_FARM,
    payload
  }
}
