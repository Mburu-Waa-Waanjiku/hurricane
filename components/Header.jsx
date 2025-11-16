'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ContactHurricane from './ContactHurricane';

const Header = ({ scrollState = 'initial' }) => {
  const pathname = usePathname();
  const isActive = (path) => pathname.startsWith(path);

  const headerStyleState = scrollState === 'scrolled' ? 'rounded' : 'initial';

  return (
    <>
      <header 
        className={`
          fixed top-0 left-0 right-0 bg-white z-[60] text-black px-4 py-3 shadow-md transition-all duration-300
          ${headerStyleState === 'initial' ? ' mx-1.5 my-1.5 rounded-2xl' : ' mx-4 md:mx-8 py-3 my-5 rounded-full shadow-lg'}
        `}
      >
        <nav className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <Image 
              className={`${headerStyleState === 'rounded' ? 'rounded-full' : 'rounded-lg'} overflow-hidden`} 
              src="/h.png" 
              alt="Logo" 
              width={headerStyleState === 'rounded' ? 40 : 50}
              height={headerStyleState === 'rounded' ? 40 : 50}
              priority
            />
          </div>
          <ContactHurricane view={"custom"} headerStyleState={headerStyleState}/>
        </nav>
      </header>
    </>
  );
};

export default Header;