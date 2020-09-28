import React, { useContext } from "react";
import styles from "./ConnectedStatus.module.scss";
import { ChatContext, Ichat } from "../../context/chatContext";

interface IProps {
}

const ConnectedStatus: React.FC<IProps> = () => {
  const context = useContext(ChatContext);
  const { status } = context;
  const circleStyle = `${styles.circle} ${styles[status]}`;
  return (
    <section className={styles.ConnectedStatus}>
      <div className={circleStyle}></div>
    </section>
  );
};

export default ConnectedStatus;