'use client'

import React, { useState, useEffect } from 'react';
import { useStateContext } from '../utils/StateContext';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import Image from 'next/image';
import { BsDashCircle } from "react-icons/bs";
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';

// ContactHurricane component for handling user contact
const ContactHurricane = ({view, headerStyleState, index, moveToSlide, scrollToNextSlide }) => {
    // State management using context
    const [reception, setReception] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isWhatsApp, setIsWhatsApp] = useState(true);
    
    // Get current page path
    const pathname = usePathname();

    useEffect(() => {
        const interval = setInterval(() => {
        setIsWhatsApp(prev => !prev);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // WhatsApp phone number
    const whatsappNumber = '254775758114';

    // Function to get page name from pathname
    const getPageName = () => {
        if (pathname === '/') return 'Home';
        const segments = pathname.split('/').filter(Boolean);
        return segments.map(seg => 
            seg.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')
        ).join(' > ');
    };

    // Track contact button click (modal open)
    const handleContactClick = () => {
        setReception(!reception);
        
        if (!reception) { // Only track when opening
            const pageName = getPageName();
            
            // GA4 Event
            if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'contact_modal_open', {
                    page_path: pathname,
                    page_name: pageName,
                    button_location: view || 'default',
                    event_category: 'Contact',
                    event_label: `Contact Modal Opened - ${pageName}`
                });
            }
            
            // Meta Pixel Event
            if (typeof window !== 'undefined' && window.fbq) {
                window.fbq('track', 'Contact', {
                    content_name: 'Contact Modal Open',
                    content_category: pageName,
                    page_url: pathname
                });
            }
        }
    };

    // Function to open WhatsApp chat with tracking
    const openWhatsAppChat = () => {
        const pageName = getPageName();
        
        // GA4 Event
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'contact_whatsapp_click', {
                page_path: pathname,
                page_name: pageName,
                contact_method: 'WhatsApp',
                event_category: 'Lead',
                event_label: `WhatsApp Click - ${pageName}`,
                phone_number: whatsappNumber
            });
        }
        
        // Meta Pixel Lead Event
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'Lead', {
                content_name: 'WhatsApp Contact',
                content_category: pageName,
                contact_method: 'WhatsApp',
                page_url: pathname
            });
        }
        
        // Open WhatsApp
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    };

    // Track email click
    const handleEmailClick = () => {
        const pageName = getPageName();
        
        // GA4 Event
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'contact_email_click', {
                page_path: pathname,
                page_name: pageName,
                contact_method: 'Email',
                event_category: 'Lead',
                event_label: `Email Click - ${pageName}`,
                email: 'hurricane@outlook.com'
            });
        }
        
        // Meta Pixel Lead Event
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'Lead', {
                content_name: 'Email Contact',
                content_category: pageName,
                contact_method: 'Email',
                page_url: pathname
            });
        }
    };

    // Detect scroll to add background to button
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Render the component
    return (
        <>
            <>
                {/* Floating Contact Button */}
                {view == "footer" ? 
                    <>
                        <button 
                            onClick={handleContactClick}
                            className="px-8 py-2.5 rounded border font-normal transition-colors hover:bg-gray-50"
                            style={{ borderColor: 'rgb(230, 71, 31)', color: 'rgb(230, 71, 31)' }}
                        >
                            Get Started Today
                        </button>
                    </> : view == "custom" ?
                    <>
                        <div className='flex items-center space-x-2'>
                            <div onClick={handleContactClick} className="flex items-center cursor-pointer">
                                <div className={`border-2 border-black rounded-full px-3 py-1.5 flex items-center space-x-2 transition-all duration-300 ${headerStyleState === 'rounded' ? 'bg-black text-white dark:bg-white dark:text-black' : ' hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                                    <span className="text-sm font-medium whitespace-nowrap">Contact Us</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </> : view == "web" ?
                    <>
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                            <svg className="w-8 h-6 mb-2 animate-bounce text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                            <button
                                onClick={() => {
                                    (index === 2 || index === 4 || index === 3) ? moveToSlide(5) : scrollToNextSlide() ;
                                    (index === 4 || index === 2 || index === 3) && handleContactClick();
                                }}
                                className="bg-primary text-white px-6 py-2 rounded-full flex items-center"
                                >
                                    {index === 0 ? `Start Your Journey` : index === 4 ? `Get A Quote Today` : index === 3 ? `Launch Yours Today` : `Consult For Free`}
                            </button>
                        </div>
                    </> : view == "web2" ?
                    <>
                        <div className="relative">
                            <div className="absolute -inset-1 bg-green-500 rounded-full opacity-75 animate-ping"></div>
                            <div  className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center overflow-hidden">
                                <div onClick={handleContactClick} className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isWhatsApp ? 'opacity-100' : 'opacity-0'}`}>
                                <FaWhatsapp className="text-6xl text-green-500" />
                                </div>
                                <div onClick={handleContactClick} className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isWhatsApp ? 'opacity-0' : 'opacity-100'}`}>
                                <FaPhone className="text-5xl text-green-500" />
                                </div>
                            </div>
                        </div>
                    </> : view == "whatsapp" ?
                    <>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <button onClick={handleContactClick} className="px-8 py-3 bg-green-600 text-white rounded-lg text-sm font-normal hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-2">
                                <MessageCircle className="w-4 h-4" />
                                Chat with Us on WhatsApp
                            </button>
                            <button onClick={handleContactClick} className="px-8 py-3 bg-white text-gray-900 rounded-lg text-sm font-normal hover:bg-gray-100 transition-colors">
                                Schedule a Demo
                            </button>
                        </div>
                    </> : view == "whatsappstart" ? 
                    <>
                        <button  onClick={handleContactClick} style={{ borderColor: 'rgb(230, 71, 31)', color: 'rgb(230, 71, 31)' }} className="px-8 py-3 border text-white rounded-lg text-sm font-normal  transition-colors inline-flex items-center gap-2">
                            Start Your Trial
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </> :
                    <>
                        <button 
                            onClick={handleContactClick}
                            className={`fixed top-4 right-4 z-50 px-7 rounded border text-[12px] h-8 font-normal transition-all hover:bg-gray-50 ${
                                isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
                            }`}
                            style={{ borderColor: 'rgb(230, 71, 31)', color: 'rgb(230, 71, 31)' }}
                        >
                            Contact Us
                        </button>
                    </>
                }

                {/* Contact Modal */}
                {reception && (
                    <div className='p-8 bg-white fixed z-[999] bottom-8 rounded-lg right-8 w-[320px] sm:w-[380px] border border-gray-200 shadow-lg flex flex-col gap-4 items-center'>
                        <div className='relative w-full'>
                            <BsDashCircle 
                                onClick={() => setReception(false)} 
                                className='absolute text-xl right-0 cursor-pointer text-gray-400 hover:text-gray-600 transition-colors'
                            />
                        </div>
                        <div className='text-lg font-normal text-gray-900 tracking-tight text-center'>Let's talk about your project</div>
                        <div className='aspect-square rounded-full overflow-hidden w-20 relative border border-gray-200'>
                            <Image
                                fill
                                src={'/h.png'}
                                alt='Mr Kamotho'
                                className='scale-x-[1.4]'
                            />
                        </div>
                        <div className='text-sm font-normal text-gray-700'>
                            <div className='w-full text-center'>Hurricane</div>
                        </div>
                        <div className='w-full flex flex-col gap-3 mt-2'>
                            {/* WhatsApp button */}
                            <button 
                                onClick={openWhatsAppChat} 
                                className='w-full px-6 py-2.5 rounded border text-sm font-normal transition-colors hover:bg-gray-50 flex items-center justify-center gap-2'
                                style={{ borderColor: 'rgb(230, 71, 31)', color: 'rgb(230, 71, 31)' }}
                            >
                                <FaWhatsapp className="text-lg" />
                                WhatsApp
                            </button>
                            {/* Email button */}
                            <Link 
                                href={'mailto:hurricane@outlook.com'}
                                onClick={handleEmailClick}
                                className='w-full px-6 py-2.5 rounded border text-sm font-normal transition-colors hover:bg-gray-50 flex items-center justify-center gap-2'
                                style={{ borderColor: 'rgb(230, 71, 31)', color: 'rgb(230, 71, 31)' }}
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                </svg>
                                Email
                            </Link>
                        </div>
                    </div>
                )}
            </>
        </>
    );
};

export default ContactHurricane;