import React from "react";
import App from "./App";
import { shallow } from "enzyme";

let component: any;
let mockFn;

beforeEach(() => {
  mockFn = jest.fn();
  component = shallow(<App />);
});

it("should render", () => {
  expect(component).toBeTruthy();
});
