import React, { useState, useEffect } from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { useStateContext } from '../utils/StateContext';
import Image from 'next/image';

const ContactInfo = () => {
    const { openContacts, setOpenContacts } = useStateContext();

  return (
    <>
        <div onClick={() => setOpenContacts(false)} className={`w-full ${ openContacts && 'h-screen fixed top-0 z-10'}`}></div>
        <div
        className={`fixed z-20 px-8 md:px-20 bottom-0 left-0 w-full shadow-lg transition-all duration-500 ease-in-out ${
            openContacts ? '!h-32 md:!h-40' : 'h-0'
        } overflow-hidden`}
        >
        <div className="max-w-7xl bg-white rounded-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative transform -skew-x-12 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden transform -skew-x-10">
                <Image src="/pic.png" alt="Background" layout="fill" objectFit="cover" className="object-center" />
            </div>
            <div className="flex flex-col items-center justify-center h-full relative z-10 transform skew-x-12">
            <div className="flex w-full justify-around space-x-4">
                <a
                    href="tel:+254712345678"
                    className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700"
                >
                    <FaPhone className="mr-2" />
                    Call Now
                </a>
                <a
                    href="https://wa.me/254712345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-green-700"
                >
                    <FaWhatsapp className="mr-2" />
                    WhatsApp
                </a>
            </div>
            </div>
        </div>
        </div>
    </>
  );
};

export default ContactInfo;
