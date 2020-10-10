import React from "react";
import { shallow } from "enzyme";
import EnterText from "./EnterText";

describe("EnterText tests", () => {
  let component: any;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<EnterText />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
