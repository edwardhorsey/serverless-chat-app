import React, { useContext } from "react";
import styles from "./App.module.scss";
import SetName from "./component/SetName";
import ChatRoom from "./component/ChatRoom";
import { ChatContext } from "./context/chatContext";
import { socket } from "./socket/socket";
import ConnectedStatus from "./component/ConnectedStatus";

const App = () => {
  const context = useContext(ChatContext);
  const { name, setContext } = context;

  const updateName = (name: string) =>
    socket.send(JSON.stringify({ action: "onName", name }));

  const setName = (name: string) => {
    setContext({ ...context, name });
    updateName(name);
  };

  return (
    <main className={styles.App}>
      {!name ? <SetName setName={setName} /> : <ChatRoom />}
      <ConnectedStatus />
    </main>
  );
};

export default App;
