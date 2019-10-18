import * as React from "react";
import { shallow } from "enzyme";

import { LeftMenuLink } from ".";


describe('<LeftMenuLink/>', () => {
  it("LeftMenuLink should render", () => {
    const result = shallow(<LeftMenuLink content="hello" icon="home" link="/" />).contains(<span>hello </span>)
    expect(result).toBeTruthy();
  });
})
