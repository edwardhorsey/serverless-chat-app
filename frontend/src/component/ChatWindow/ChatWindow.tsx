import React from "react";
import styles from "./ChatWindow.module.scss";
import { Ichat } from "../../context/chatContext";
import Message from "../Message";

interface IProps {
  chat: Ichat[];
}

const ChatWindow: React.FC<IProps> = ({ chat }) => {
  console.log("hi from Chatwindow");
  return (
    <section className={styles.ChatWindow}>
      <div className={styles.ChatWindowWrapper}>
        {chat.map((item, index) => (
          <Message
            type={item["message-type"]}
            key={index}
            yourself={item["yourself"]}
            name={item["message"]["name"]}
            message={item["message"]["message"]}
          />
        ))}
      </div>
    </section>
  );
};

export default ChatWindow;
