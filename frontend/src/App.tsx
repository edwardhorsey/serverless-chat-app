import React, { useContext } from "react";
import styles from "./App.module.scss";
import SetName from "./component/SetName";
import ChatRoom from "./component/ChatRoom";
import { ChatContext } from "./context/chatContext";
import { socket } from "./socket/socket";
import ConnectedStatus from "./component/ConnectedStatus";
import SpringTest from "./component/SpringTest";

const App = () => {
  const context = useContext(ChatContext);
  const { name, setContext, chatMessages } = context;

  const updateName = (name: string) => {
    const request = { action: "onName", name };
    socket.send(JSON.stringify(request));
  };
  const setName = (name: string) => {
    setContext({ ...context, name });
    updateName(name);
  };

  return (
    <main className={styles.App}>
      {!name ? <SetName setName={setName} /> : <ChatRoom />}
      <ConnectedStatus />
      <SpringTest />
    </main>
  );
};

export default App;
