import React from "react";
import styles from "./Message.module.scss";

interface IProps {
  name: string,
  message: string,
  yourself: boolean
}

const Message: React.FC<IProps> = ({name, message, yourself}) => {
  const styling = yourself ? `${styles.Message} ${styles.yourself}` : styles.Message;
  return (
    <div className={styling}>
      <p>
        <span className={styles.name}>{name}: </span>
        <span>{message}</span>
      </p>
    </div>
  );
};
export default Message;
