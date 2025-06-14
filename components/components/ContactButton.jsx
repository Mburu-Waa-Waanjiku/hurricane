import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { useStateContext } from '../utils/StateContext';

const ContactButton = () => {
  const [isWhatsApp, setIsWhatsApp] = useState(true);
  const { openContacts, setOpenContacts } = useStateContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWhatsApp(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-green-500 rounded-full opacity-75 animate-ping"></div>
      <div  className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center overflow-hidden">
        <div onClick={() => {openContacts ? setOpenContacts(false) : setOpenContacts(true); console.log(openContacts)}} className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isWhatsApp ? 'opacity-100' : 'opacity-0'}`}>
          <FaWhatsapp className="text-6xl text-green-500" />
        </div>
        <div onClick={() => {openContacts ? setOpenContacts(false) : setOpenContacts(true); console.log(openContacts)}} className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isWhatsApp ? 'opacity-0' : 'opacity-100'}`}>
          <FaPhone className="text-5xl text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default ContactButton;


