import { createActions } from "redux-actions";

export const {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} = createActions({
  FETCH_FOLLOWERS_REQUEST: undefined,
  FETCH_FOLLOWERS_SUCCESS: undefined,
  FETCH_FOLLOWERS_FAILURE: undefined
});
