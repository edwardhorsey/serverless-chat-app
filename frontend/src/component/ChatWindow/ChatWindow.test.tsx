import React from "react";
import { shallow } from "enzyme";
import ChatWindow from "./ChatWindow";

describe("ChatWindow tests", () => {
  let component: any;
  let mockFn;

  const testChat = [
    {
      "message-type": "service",
      message: '{message: "Ed has joined the chat", name: ""}',
    },
    {
      "message-type": "chat",
      yourself: true,
      message: '{message: "hi", name: "Ed"}',
    },
    {
      "message-type": "service",
      message: '{message: "Alice has joined the chat", name: ""}',
    },
    {
      "message-type": "chat",
      yourself: false,
      message: '{message: "Hi there ed", name: "Alice"}',
    },
    {
      "message-type": "chat",
      yourself: false,
      message: '{message: "u ok", name: "Alice"}',
    },
    {
      "message-type": "chat",
      yourself: true,
      message: '{message: "all good yourself", name: "Ed"}',
    },
    {
      "message-type": "service",
      message: '{message: "ambika has joined the chat", name: ""}',
    },
    {
      "message-type": "chat",
      yourself: true,
      message: '{message: "oh hi ambika", name: "Ed"}',
    },
    {
      "message-type": "chat",
      yourself: false,
      message: '{message: "hey ambika!", name: "Alice"}',
    },
    {
      "message-type": "chat",
      yourself: false,
      message: '{message: "hello both :)", name: "ambika"}',
    },
    {
      "message-type": "chat",
      yourself: false,
      message: '{message: "looking forward to later ", name: "ambik…}',
    },
  ];

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<ChatWindow chat={testChat} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
