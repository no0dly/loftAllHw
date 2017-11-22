import * as api from "../api";

import { fetchShowsSuccess, fetchShowsFailure } from "../actions/search";

export default store => next => action => {
  if (action.type === "FETCH_SHOWS_REQUEST") {
    api
      .search(action.payload)
      .then(shows => {
        store.dispatch(fetchShowsSuccess(shows));
      })
      .catch(error => {
        store.dispatch(fetchShowsFailure(error.toString()));
      });
  }
  return next(action);
};
