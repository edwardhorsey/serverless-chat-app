import React, { useContext } from 'react';
import styles from './App.module.scss';
import SetName from './component/SetName';
import ChatRoom from './component/ChatRoom';
import { ChatContext } from './context/chatContext';
import { socket } from './socket/socket';

const App = () => {
  const context = useContext(ChatContext);
  const { name, setContext } = context;
  const setName = (name: string) => {
    setContext({...context, name });
    // const request = { action: 'nameChange', name };
    // socket.send(JSON.stringify(request));
  };

  return (
    <div className={styles.App}>
      {!name ? <SetName setName={setName}/> : <ChatRoom />}
      <p>-= CONNECTED OR NOT COMPONENT GOES HERE =-</p>
    </div>
  );
}

export default App;