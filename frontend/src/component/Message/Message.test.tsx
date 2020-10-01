import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe("Message tests", () => {
  let component: any;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<Message text={'testing'} />);
  })
  
  it("should render", () => {
    expect(component).toBeTruthy();
  })
})