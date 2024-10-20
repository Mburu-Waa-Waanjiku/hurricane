'use client'

import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [animated, setAniated] = useState(false);
    const [openContacts, setOpenContacts] = useState(false);
    return (
        <StateContext.Provider value={{
            animated,
            setAniated,
            openContacts,
            setOpenContacts,
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
