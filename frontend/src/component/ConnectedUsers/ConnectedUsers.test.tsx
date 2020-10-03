import React from "react";
import { shallow } from "enzyme";
import ConnectedUsers from "./ConnectedUsers";

describe("ConnectedUsers tests", () => {
  let component: any;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<ConnectedUsers />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
