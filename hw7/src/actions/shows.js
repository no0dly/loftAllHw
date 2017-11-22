import { createAction, createActions } from "redux-actions";

export const fetchOneShowRequest = createAction(
  "FETCH_ONE_SHOW_REQUEST",
  query => query
);
export const { fetchOneShowSuccess, fetchOneShowFailure } = createActions({
  FETCH_ONE_SHOW_SUCCESS: show => show,
  FETCH_ONE_SHOW_FAILURE: error => error
});
