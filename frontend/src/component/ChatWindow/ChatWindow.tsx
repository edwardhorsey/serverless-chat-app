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
  const [chatMessages, setChatMessages] = useState(chat);
  console.log(chat, chatMessages);
  useEffect(() => {
    setChatMessages(chat);
  });
  return (
    <section className={styles.ChatWindow}>
      <div className={styles.ChatWindowWrapper}>
        <Transition
          native
          items={chatMessages}
          keys={(msg) => chatMessages.indexOf(msg)}
          from={{ opacity: 0, height: 0 }}
          enter={{ opactiy: 1, height: "auto" }}
          update={{ opactiy: 1, height: 20 }}
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
