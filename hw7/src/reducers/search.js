import { combineReducers } from "redux";

import { handleAction, handleActions } from "redux-actions";

import {
  fetchShowsRequest,
  fetchShowsSuccess,
  fetchShowsFailure
} from "../actions/search";

const query = handleAction(
  fetchShowsRequest,
  (state, action) => action.payload,
  ""
);

const shows = handleAction(
  fetchShowsSuccess,
  (state, action) => action.payload,
  []
);

const error = handleAction(
  fetchShowsFailure,
  (state, action) => action.payload,
  ""
);

const isFetching = handleActions(
  {
    [fetchShowsRequest]: () => true,
    [fetchShowsSuccess]: () => false,
    [fetchShowsFailure]: () => false
  },
  false
);
const isFetched = handleActions(
  {
    [fetchShowsRequest]: () => false,
    [fetchShowsSuccess]: () => true,
    [fetchShowsFailure]: () => true
  },
  false
);

export default combineReducers({ query, isFetching, isFetched, error, shows });

export const getIsFetching = state => state.search.isFetching;
export const getIsFetched = state => state.search.isFetched;
export const getError = state => state.search.error;
export const getShows = state => state.search.shows;
