import React from "react";
import styles from "./ChatWindow.module.scss";
import { Ichat } from "../../context/chatContext";
import Message from "../Message";
import { animated } from "react-spring";
import { Transition } from "react-spring/renderprops";

interface IProps {
  chat: Ichat[];
}

const ChatWindow: React.FC<IProps> = ({ chat }) => {
  return (
    <section className={styles.ChatWindow}>
      <div className={styles.ChatWindowWrapper}>
        <Transition
          config={{ mass: 5, tension: 10000, friction: 600 }}
          items={chat}
          keys={(msg) => chat.indexOf(msg)}
          from={{ height: 0, opacity: 0 }}
          enter={{ height: "auto", opacity: 1 }}
          leave={{ height: 0, opacity: 0 }}
        >
          {(item) => (props) => (
            <animated.article style={props}>
              <Message
                type={item["message-type"]}
                yourself={item["yourself"]}
                name={item["message"]["name"]}
                message={item["message"]["message"]}
              />
            </animated.article>
          )}
        </Transition>
      </div>
    </section>
  );
};

export default ChatWindow;
