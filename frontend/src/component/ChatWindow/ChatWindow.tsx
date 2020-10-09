import React, { useState, useEffect } from "react";
import styles from "./ChatWindow.module.scss";
import { Ichat } from "../../context/chatContext";
import Message from "../Message";
import { useTransition, animated } from "react-spring";
import { Transition } from "react-spring/renderprops";

interface IProps {
  chat: Ichat[];
}

const ChatWindow: React.FC<IProps> = ({ chat }) => {
  console.log("hi from Chatwindow");
  const AnimatedMessage = animated(Message);
  return (
    <section className={styles.ChatWindow}>
      <div className={styles.ChatWindowWrapper}>
        <Transition
          config={{ mass: 5, tension: 500, friction: 100 }}
          items={chat}
          keys={(msg) => chat.indexOf(msg)}
          from={{ height: 0, opacity: 0 }}
          enter={{ height: "auto", opacity: 1 }}
          leave={{ height: 0, opacity: 0 }}
        >
          {(item) => (props) => (
            <AnimatedMessage
              style={props}
              type={item["message-type"]}
              yourself={item["yourself"]}
              name={item["message"]["name"]}
              message={item["message"]["message"]}
            />
          )}
        </Transition>
        {/* {chat.map((item, index) => (
          <Message
            key={index}
            type={item["message-type"]}
            yourself={item["yourself"]}
            name={item["message"]["name"]}
            message={item["message"]["message"]}
          />
        ))} */}
      </div>
    </section>
  );
};

export default ChatWindow;
