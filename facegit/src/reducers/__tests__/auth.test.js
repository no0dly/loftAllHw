import auth from "../auth";
import { setToken, authorize, logout } from "../../actions/auth";

describe("auth reducer", () => {
  describe("token field", () => {
    it("setToken should set payload value", () => {
      const data = "blaBla";
      const newState = auth(
        {},
        {
          type: setToken.toString(),
          payload: data
        }
      );
      expect(newState.token).toEqual(data);
    });
  });
  describe("isAuthorized field", () => {
    it("Should return true after autorize", () => {
      const newState = auth(
        {
          isAuthorized: false
        },
        { type: authorize.toString() }
      );
      expect(newState.isAuthorized).toEqual(true);
    });
    it("Should return false after logout", () => {
      const newState = auth(
        {
          isAuthorized: true
        },
        { type: logout.toString() }
      );
      expect(newState.isAuthorized).toEqual(false);
    });
  });
});
