import React from "react";
import { animated } from "react-spring";
import { Transition } from "react-spring/renderprops";
import { Ichat } from "../../../context/chatContext";

interface IProps {
  chat: Ichat[];
}

const Chat: React.FC<IProps> = ({ chat }) => {
  return (
    <section className="chat">
      <Transition
        config={{ mass: 5, tension: 500, friction: 100 }}
        items={chat}
        keys={(item) => chat.indexOf(item)}
        from={{ height: 0, opacity: 0 }}
        enter={{ height: "auto", opacity: 1 }}
        leave={{ height: 0, opacity: 0 }}
      >
        {(item) => (props) => (
          <animated.article style={props}>
            <p>{item.message.message}</p>
          </animated.article>
        )}
      </Transition>
    </section>
  );
};

export default Chat;
