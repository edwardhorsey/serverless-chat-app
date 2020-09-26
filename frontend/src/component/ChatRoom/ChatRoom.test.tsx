import React from 'react';
import { shallow } from 'enzyme';
import ChatRoom from './ChatRoom';

describe("ChatRoom tests", () => {
  let component: any;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<ChatRoom />);
  })
  
  it("should render", () => {
    expect(component).toBeTruthy();
  })
})