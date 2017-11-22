import * as api from "../api";

import { fetchOneShowSuccess, fetchOneShowFailure } from "../actions/shows";

export default store => next => action => {
  if (action.type === "FETCH_ONE_SHOW_REQUEST") {
    api
      .show(action.payload)
      .then(show => {
        store.dispatch(fetchOneShowSuccess(show));
      })
      .catch(error => {
        store.dispatch(fetchOneShowFailure(error.toString()));
      });
  }
  return next(action);
};
