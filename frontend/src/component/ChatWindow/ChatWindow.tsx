import React from "react";
import styles from "./ChatWindow.module.scss";
import { Ichat } from "../../context/chatContext";

interface IProps {
  chat: Ichat[]
}

const ChatWindow: React.FC<IProps> = ({chat}) => {
  return (
    <section className={styles.ChatWindow}>
      {chat.map((item, index) => (
        <p key={index}>
          <span className={styles.name}>{item['name']}: </span>
          <span>{item['message']}</span>
        </p>
      ))}
    </section>
  );
};

export default ChatWindow;