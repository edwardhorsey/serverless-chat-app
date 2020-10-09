import React from "react";
import styles from "./Message.module.scss";

interface IProps {
  name: string;
  message: string;
  yourself: boolean;
  type: string;
  style?: { opacity: number; height?: string | number };
}

const Message: React.FC<IProps> = ({ name, message, yourself, type }) => {
  const styling = () => {
    let style = styles.Message;
    if (yourself) {
      style = `${style} ${styles.yourself}`;
    }
    if (type === "service") {
      style = `${style} ${styles.service}`;
    }
    return style;
  };
  const style = styling();
  return (
    <div className={style}>
      <p>
        {name && <span className={styles.name}>{name.trim()}: </span>}
        <span className={styles.messageContent}>{message}</span>
      </p>
    </div>
  );
};
export default Message;
