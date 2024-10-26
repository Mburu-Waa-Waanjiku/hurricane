'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useStateContext } from '@/utils/StateContext';
import ContactInfo from './ContactInfo';

const Header = () => {
  const pathname = usePathname();
  const [headerState, setHeaderState] = useState('initial');
  const { animated, openContacts, setOpenContacts } = useStateContext();
  const isActive = (path) => pathname.startsWith(path);

  useEffect(() => {
    if (animated) {
      setHeaderState('rounded');
    } else {
      setHeaderState('initial');
    }
  }, [animated]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 bg-white z-20 text-black px-4 py-3 shadow-md transition-all duration-300
        ${headerState === 'initial' ? '' : ' mx-4 md:mx-8 py-3 my-5 rounded-full'}
      `}
    >
      <nav className="flex justify-center space-x-4">
        <div className={"flex justify-start items-center min-w-12 min-h-12"}>
          <Image className={headerState === 'rounded' ? 'rounded-full md:ml-3 overflow-hidden' : ''} src="/h.png" alt="Logo" width={50} height={50} />
        </div>
        <div className='flex w-full justify-between items-center'>
          {/* Desktop Menu */}
          <div className='hidden md:flex grow justify-center items-center'>
            <div className={`max-w-md rounded-md bg-gray-100 w-full flex justify-between items-center ${headerState === 'rounded' ? '!rounded-full' : ''}`}>
                {[
                  { name: 'Services', path: '/' },
                  { name: 'Explore', path: '/explore' },
                ].map(({ name, path }) => (
                  <Link
                    key={path}
                    href={path}
                    className={`px-4 py-2 w-48 rounded-md w-42 flex justify-center transition-all whitespace-nowrap duration-300 ${
                      isActive(path)
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-black hover:bg-primary hover:text-white'
                    } ${ headerState === 'rounded' ? '!rounded-full' : ''}`}
                  >
                    {name}
                  </Link>
                ))}
            </div>
          </div>
          {/* Mobile Menu */}
          <div className={`md:hidden fixed top-4 right-0 z-50 bg-white transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-[120%]'} transition-transform duration-300 ease-in-out w-2/3 h-1/2 rounded-l-lg shadow-xl`}>
            <div className='flex flex-col h-full justify-center items-center space-y-8'>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className='absolute top-4 right-4 text-black focus:outline-none'
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {[
                { name: 'Services', path: '/' },
                { name: 'Explore', path: '/explore' },
              ].map(({ name, path }) => (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-bold ${isActive(path) ? 'text-primary' : 'text-black'}`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div onClick={() => openContacts ? setOpenContacts(false) : setOpenContacts(true)} className="flex justify-end grow md:grow-0  items-center">
            <div className="border-2 border-black mr-4 md:mr-0 rounded-full px-4 py-2 flex items-center space-x-2">
              <span className="text-center whitespace-nowrap">Contact Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='text-black focus:outline-none'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <ContactInfo />
    </header>
  );
};

export default Header;