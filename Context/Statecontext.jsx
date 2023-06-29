"use client"

import { createContext, useState, useEffect, useContext, } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {

  const [spashPage, setSplashPage] = useState(true);
  useEffect(() => {
    if (typeof window !== 'undefined') {
            const loader = document.getElementById('splasher');
        if (loader)
          loader.style.display = 'none';
          setSplashPage(false) 
        }
    }, []);

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