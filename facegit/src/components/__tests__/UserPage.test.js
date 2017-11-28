import React from "react";

import { UserPage } from "../UserPage/UserPage";

import { shallow, mount } from "enzyme";
import { StaticRouter } from "react-router-dom";

describe("UserPage", () => {
  const context = {};
  const wrapper = shallow(
    <StaticRouter context={context}>
      <UserPage />
    </StaticRouter>
  );
  console.log(wrapper.debug());
  it("UserPage exists", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it("Is there componentDidMount", () => {
    expect(wrapper.instance().componentDidMount).toBeDefined();
  });
});
