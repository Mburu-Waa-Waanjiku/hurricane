'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ContactInfo from './ContactInfo';

const Header = ({ scrollState = 'initial' }) => {
  const pathname = usePathname();
  const [openContacts, setOpenContacts] = useState(false);
  const isActive = (path) => pathname.startsWith(path);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerStyleState = scrollState === 'scrolled' ? 'rounded' : 'initial';

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleContacts = () => {
    setOpenContacts(prev => !prev);
  };

  return (
    <>
      <header 
        className={`
          fixed top-0 left-0 right-0 bg-white z-[60] text-black px-4 py-3 shadow-md transition-all duration-300
          ${headerStyleState === 'initial' ? ' mx-1 my-1 rounded-lg' : ' mx-4 md:mx-8 py-3 my-5 rounded-full shadow-lg'}
        `}
      >
        <nav className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <Image 
              className={`${headerStyleState === 'rounded' ? 'rounded-full' : ''} overflow-hidden`} 
              src="/h.png" 
              alt="Logo" 
              width={headerStyleState === 'rounded' ? 40 : 50}
              height={headerStyleState === 'rounded' ? 40 : 50}
              priority
            />
          </div>
          <div className='flex items-center space-x-2'>
            <div onClick={toggleContacts} className="flex items-center cursor-pointer">
              <div className={`border-2 border-black rounded-full px-3 py-1.5 flex items-center space-x-2 transition-all duration-300 ${headerStyleState === 'rounded' ? 'bg-black text-white dark:bg-white dark:text-black' : ' hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                <span className="text-sm font-medium whitespace-nowrap">Contact Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className='md:hidden'>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className='text-black  p-1 rounded-md hover:bg-gray-100 focus:outline-none'
                aria-label="Toggle mobile menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
      
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-[55]" onClick={closeMobileMenu}></div>
      )}
      <div className={`md:hidden fixed top-0 right-0 z-[70] bg-white dark:bg-gray-800 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out w-3/4 max-w-sm h-full shadow-xl flex flex-col p-6`}>
        <button
          onClick={closeMobileMenu}
          className='absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none'
          aria-label="Close mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className='flex flex-col space-y-6 mt-12'>
          {[ 
            { name: 'Shop', path: '/shop' }, 
            { name: 'Marketing', path: '/services/marketing' },
            { name: 'Web Design', path: '/services/web-design' }
          ].map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              onClick={closeMobileMenu}
              className={`text-xl font-medium ${isActive(path) ? 'text-primary dark:text-primary-dark' : 'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-dark'}`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>

      {openContacts && <ContactInfo />}
    </>
  );
};

export default Header;