import React, { useContext } from "react";
import styles from "./ChatRoom.module.scss";
import { ChatContext } from "../../context/chatContext";
import ChatWindow from "../ChatWindow";
import ChatNav from "../ChatNav";
import EnterText from "../EnterText";

interface IProps {}

const ChatRoom: React.FC<IProps> = () => {
  const context = useContext(ChatContext);
  const { chatMessages } = context;
  return (
    <section className={styles.ChatRoom}>
      <ChatNav />
      <ChatWindow chat={chatMessages} />
      <EnterText />
    </section>
  );
};

export default ChatRoom;
