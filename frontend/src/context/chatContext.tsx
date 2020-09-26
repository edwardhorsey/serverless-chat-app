import React, { createContext, useState, Dispatch, SetStateAction, ReactChild } from 'react';
import { socket } from '../socket/socket';

interface iProps {
  children: ReactChild
}

interface Icontext {
  name: string,
  setContext: Dispatch<SetStateAction<Icontext>>
}

const initialState: Icontext = {
  name: '',
  setContext: ()=>{}
}

export const ChatContext = createContext<Icontext>(initialState)

export const ChatProvider = (props: iProps) => {
  const [state, setContext] = useState(initialState)

  return <ChatContext.Provider value={{...state, setContext}}>{props.children}</ChatContext.Provider>
};