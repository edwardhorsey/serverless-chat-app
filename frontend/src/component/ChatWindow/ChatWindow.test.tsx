import React from 'react';
import { shallow } from 'enzyme';
import ChatWindow from './ChatWindow';

describe("ChatWindow tests", () => {
  let component: any;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<ChatWindow />);
  })
  
  it("should render", () => {
    expect(component).toBeTruthy();
  })
})