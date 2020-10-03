import React, { useContext } from "react";
import styles from "./ConnectedUsers.module.scss";
import { ChatContext } from "../../context/chatContext";

interface IProps {}

const ConnectedUsers: React.FC<IProps> = () => {
  const context = useContext(ChatContext);
  const { connected } = context;
  return (
    <section className={styles.ConnectedUsers}>
      {connected.map((user, index) => (
        <p key={index}>{user.name["S"]}</p>
      ))}
    </section>
  );
};

export default ConnectedUsers;
