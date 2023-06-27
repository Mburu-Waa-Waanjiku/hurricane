"use client"

import { createContext, useState, useContext, } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {

  const [openChat, setOpenChat] = useState(false);
  const handleChatopen = () => {
    setOpenChat(true)
  }
  const handleChatcleose = () => {
    setOpenChat(false)
  }

  return (
    <Context.Provider
      value={{
        openChat,
        setOpenChat,
        handleChatopen,
        handleChatcleose
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);