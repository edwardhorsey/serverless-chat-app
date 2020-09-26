import React, { useContext } from 'react';
import styles from './App.module.scss';
import SetName from './component/SetName';
import ChatRoom from './component/ChatRoom';
import { ChatContext } from './context/chatContext';

function App() {
  const context = useContext(ChatContext);
  const { name, setContext } = context;
  console.log(context);
  const setName = (value: string) => { setContext({...context, name: value}) }

  return (
    <div className={styles.App}>
      {!name ? <SetName setName={setName}/> : <ChatRoom />}
      <p>-= CONNECTED OR NOT COMPONENT GOES HERE =-</p>
    </div>
  );
}

export default App;