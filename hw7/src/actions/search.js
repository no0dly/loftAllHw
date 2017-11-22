import { createAction, createActions } from "redux-actions";

export const fetchShowsRequest = createAction(
  "FETCH_SHOWS_REQUEST",
  query => query
);
export const { fetchShowsSuccess, fetchShowsFailure } = createActions({
  FETCH_SHOWS_SUCCESS: shows => shows,
  FETCH_SHOWS_FAILURE: error => error
});
