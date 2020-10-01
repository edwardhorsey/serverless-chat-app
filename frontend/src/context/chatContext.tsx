import React, { createContext, useState, Dispatch, SetStateAction, ReactChild } from 'react';
import { socket } from '../socket/socket';

interface iProps {
  children: ReactChild
}

export interface Ichat {
  action: string,
  name: string,
  message: string
}

interface Icontext {
  name: string,
  chatMessages: Ichat[],
  status: string,
  setContext: Dispatch<SetStateAction<Icontext>>
}

const initialState: Icontext = {
  name: '',
  chatMessages: [],
  status: "disconnected",
  setContext: ()=>{}
}

export const ChatContext = createContext<Icontext>(initialState)

export const ChatProvider = (props: iProps) => {
  const [state, setContext] = useState(initialState)

  socket.onopen = () => {
    console.log('connected to server');
    setContext({...state, status: "connected"})
  }

  socket.onclose = () => {
    console.log('disconnected from server');
    setContext({...state, status: "disconnected"}) 
}

  socket.onerror = (event) => {
    console.log("WebSocket error observed:", event);
    setContext({...state, status: "error"})
  }

  socket.onmessage = (event) => {
    const response = JSON.parse(event.data);
    console.log(response);

    if (response['type'] === 'chatMessage') {
      const chatMessages = [...state.chatMessages, response];
      setContext({...state, chatMessages });
    }
  }

  return <ChatContext.Provider value={{...state, setContext}}>{props.children}</ChatContext.Provider>
};