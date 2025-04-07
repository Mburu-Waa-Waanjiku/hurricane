import Link from 'next/link';
import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black/80 overflow-hidden border border-white/50 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-md mx-auto ">
        <h2 className="font-humane text-4xl text-center text-white mb-4">
          <span className='text-primary'>DISCOVER</span> our 
          <span className='text-primary'> RENT </span><br/> a 
          <span className='text-primary'> STORE </span> Solution</h2>
          <p className="text-center text-white mb-6 font-bold">Turn your Google Drive into a <br/></p>
          <Link href={'/rent-an-online-store'}>
            <button className=" relative w-full font-bold bg-primary text-white py-2 rounded-lg transition-transform text-base transform hover:scale-105 active:scale-95">
              <span className='text-black'>.co.ke </span> STORE
              <span className='w-full absolute top-0 left-0 h-full bg-primary animate-ping opacity-50'></span>
            </button>
          </Link>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Popup; 