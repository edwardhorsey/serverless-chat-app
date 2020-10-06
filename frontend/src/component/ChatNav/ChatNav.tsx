import React, { useContext, useState } from "react";
import styles from "./ChatNav.module.scss";
import { ChatContext } from "../../context/chatContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/falibrary";
import ConnectedUsers from "../ConnectedUsers";

interface IProps {}

const ChatRoom: React.FC<IProps> = () => {
  const context = useContext(ChatContext);
  const { setContext, name, connected } = context;
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={styles.chatNav}>
      <span
        onClick={() => setContext({ ...context, name: "" })}
        className={styles.backButton}
      >
        <FontAwesomeIcon icon={["fas", "sign-out-alt"]} />
      </span>
      <span
        className={styles.community}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <FontAwesomeIcon icon={["fas", "users"]} />
        <span> {connected.length}</span>
        {isShown && <ConnectedUsers />}
      </span>
      <h3>{name}</h3>
    </div>
  );
};

export default ChatRoom;
