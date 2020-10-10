import React, { useState, useContext } from "react";
import Chat from "./Chat";
import "./SpringTest.css";
import { ChatContext } from "../../context/chatContext";
let id = 1;

function SpringTest() {
  const context = useContext(ChatContext);
  const { name, setContext, chatMessages } = context;

  // const [state, setState] = useState([]);
  // const random = () => {
  //   const num = Math.floor(Math.random() * 30) + 1;
  //   return [...Array(num)].map((el) => "hello");
  // };
  // const clickButton = () => {
  //   setState([...state, { word: random(), key: id++ }]);
  // };
  return (
    <section className="SpringTest">
      {/* <button onClick={clickButton}>click me</button> */}
      <Chat chat={chatMessages} />
    </section>
  );
}

export default SpringTest;
