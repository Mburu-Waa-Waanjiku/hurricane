"use client"

import { createContext, useState, useContext, } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {

  const [spashPage, setSplashPage] = useState(true);
  window.onload = async function () { 
    await new Promise(resolve => setTimeout(resolve, 5000));
    setSplashPage(false) 
  };

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
        handleChatcleose,
        spashPage
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);