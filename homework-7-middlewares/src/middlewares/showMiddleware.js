import {
  shows_request,
  shows_success,
  shows_failure
} from "components/actions/index.js";
import { show } from "api.js";

export default store => next => action => {
  if (action.type == shows_request.toString()) {
    show();
  }
};
