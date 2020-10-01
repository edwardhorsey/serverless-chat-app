import React from "react";
import styles from "./ChatWindow.module.scss";
import { Ichat } from "../../context/chatContext";
import Message from "../Message";

interface IProps {
  chat: Ichat[]
}

const ChatWindow: React.FC<IProps> = ({chat}) => {
  return (
    <section className={styles.ChatWindow}>
      {chat.map((item, index) => <Message key={index} yourself={true} name={item['name']} message={item['message']} />)}
    </section>
  );
};

export default ChatWindow;