import React from "react";
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
  return (
    <section className={styles.ChatWindow}>
      <div className={styles.ChatWindowWrapper}>
        <Transition
          items={chat}
          keys={(msg) => chat.indexOf(msg)}
          from={{ opacity: 0.1, height: 0 }}
          enter={{ opactiy: 1, height: "auto" }}
        >
          {(item) => (props) => (
            <Message
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
