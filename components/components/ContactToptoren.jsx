'use client'

import React, { useState, useEffect } from 'react';
import { useStateContext } from '../utils/StateContext';
import { FaArrowRight, FaArrowLeft, FaWhatsapp, FaPhoneSquare, FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Calendar from '../components/Calendar';
import Image from 'next/image';
import { BsDashCircle } from "react-icons/bs";
import { ArrowBigDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// ContactInfo component for handling user service selection and questionnaire
const ContactToptoren = () => {
    // State management using context
    const [isWhatsApp, setIsWhatsApp] = useState(true);
    const { openContacts, setOpenContacts } = useStateContext();
    const pathname = usePathname()
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIsWhatsApp(prev => !prev);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    // Local state management
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [currentOptionIndex, setCurrentOptionIndex] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showSelected, setShowSelected] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [answers, setAnswers] = useState({});
    const [showBooking, setShowBooking] = useState(false);
    const [reception, setReception] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // WhatsApp phone number
    const whatsappNumber = '254713857620';

    // Function to open WhatsApp chat
    const openWhatsAppChat = () => {
      window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    };


    // Render the component
    return (
        <>
            {!openContacts &&
                <>
                    {!reception ? 
                        <>
                          <div onClick={() => reception ? setReception(false) : setReception(true)} className="fixed bottom-8 right-8 z-10">
                            <div className="absolute -inset-1 bg-green-500 rounded-full opacity-75 animate-ping"></div>
                            <div  className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden">
                              <div  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isWhatsApp ? 'opacity-100' : 'opacity-0'}`}>
                                <FaWhatsapp className="text-4xl text-green-500" />
                              </div>
                              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isWhatsApp ? 'opacity-0' : 'opacity-100'}`}>
                                <FaPhone className="text-3xl text-green-500" />
                              </div>
                            </div>
                          </div>
                        </>:
                        <div className='p-8 text-white fixed z-[999] bottom-8 rounded-xl right-8 w-[300px] sm:w-[400px] bg-blue-900/30 backdrop-filter backdrop-blur-sm border border-white/40 gap-3 shadow-lg flex flex-col justify-around items-center'>
                            <div className='relative w-full'>
                                <BsDashCircle onClick={() => reception ? setReception(false) : setReception(true)} className='absolute text-xl right-0'/>
                            </div>
                            <div className='cute text-xl  font-medium'>Let's talk about your project</div>
                            <div className='aspect-square rounded-full overflow-hidden w-24 relative'>
                                <Image
                                    fill
                                    src={'/toptoren/martin.jpeg'}
                                    alt='developer'
                                    className='scale-x-[1.4]'
                                />
                            </div>
                            <div className='text-base font-[500]'>
                                <div className='w-full text-center'>Mr Kamotho</div>
                            </div>
                            <div className='mx-4 flex justify-around w-full'>
                                {/* WhatsApp button */}
                                <Link 
                                  href={'tell:0713857620'}
                                    className=' rounded-full flex justify-center  bg-green-600 hover:bg-green-700 text-white text-center mt-3 p-3 flex items-center justify-center cursor-pointer transition-colors duration-300'
                                >
                                    <FaPhone className="text-3xl aspect-square" />
                                </Link>
                                {/* WhatsApp button */}
                                <div 
                                    onClick={openWhatsAppChat} 
                                    className='rounded-full font-[480] justify-center bg-green-600 hover:bg-green-700 text-white text-center mt-3 p-3 flex items-center justify-center cursor-pointer transition-colors duration-300'
                                >
                                    <FaWhatsapp className=" text-4xl" />
                                </div>
                            </div>
                        </div>
                    }
                </>
            }
        </>
    );
};

export default ContactToptoren;
