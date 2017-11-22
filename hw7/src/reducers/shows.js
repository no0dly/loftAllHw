import { combineReducers } from "redux";

import { handleAction, handleActions } from "redux-actions";

import {
  fetchOneShowRequest,
  fetchOneShowSuccess,
  fetchOneShowFailure
} from "../actions/shows";

const query = handleAction(
  fetchOneShowRequest,
  (state, action) => action.payload,
  ""
);

const show = handleAction(
  fetchOneShowSuccess,
  (state, action) => action.payload,
  {}
);

const error = handleAction(
  fetchOneShowFailure,
  (state, action) => action.payload,
  null
);

const isFetching = handleActions(
  {
    [fetchOneShowRequest]: () => true,
    [fetchOneShowSuccess]: () => false,
    [fetchOneShowFailure]: () => false
  },
  false
);
const isFetched = handleActions(
  {
    [fetchOneShowRequest]: () => false,
    [fetchOneShowSuccess]: () => true,
    [fetchOneShowFailure]: () => true
  },
  false
);

export default combineReducers({ query, isFetching, isFetched, error, show });

export const getIsFetching = state => state.shows.isFetching;
export const getIsFetched = state => state.shows.isFetched;
export const getError = state => state.shows.error;
export const getShow = state => state.shows.show;
