import {
  searchRequest,
  search_success,
  search_failure
} from "components/actions/index.js";
import { search } from "api.js";
export default store => next => action => {
  if (action.type == searchRequest.toString()) {
    console.log("searchMiddleware принял экшен");
    // search(action.payload).then(shows =>
    //   store.dispatch(
    //     search_success(shows.map(show => show.show))
    //   )
    // );
  }
  return next(action);
};
