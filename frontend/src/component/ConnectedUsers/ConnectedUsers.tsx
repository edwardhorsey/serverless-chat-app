import React, { useContext } from "react";
import styles from "./ConnectedUsers.module.scss";
import { ChatContext } from "../../context/chatContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/falibrary";

interface IProps {}

const ConnectedUsers: React.FC<IProps> = () => {
  const context = useContext(ChatContext);
  const { connected } = context;
  return (
    <section className={styles.ConnectedUsers}>
      {connected.map((user, index) => (
        <span>
          <FontAwesomeIcon icon={["fas", "user"]} />
          <p key={index}>{user}</p>
        </span>
      ))}
    </section>
  );
};

export default ConnectedUsers;
