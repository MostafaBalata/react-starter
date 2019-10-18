import * as React from "react";
import { shallow } from "enzyme";

import { Hello } from "./index";
describe("<Hello/>", () => {
  it("renders the heading", () => {
    const result = shallow(<Hello num={123} message="hello" onClick={() => { }} />).contains(
      <h2>Middleware</h2>,
    );
    expect(result).toBeTruthy();
  });
});
