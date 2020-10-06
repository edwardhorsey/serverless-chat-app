import React from "react";
import { shallow } from "enzyme";
import ChatNav from "./ChatNav";

describe("ChatNav tests", () => {
  let component: any;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<ChatNav />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
