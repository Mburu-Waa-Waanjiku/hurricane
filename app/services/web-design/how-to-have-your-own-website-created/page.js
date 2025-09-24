'use client';

import { useState, useEffect } from 'react';
import Header from '../../../../components/Header'; 
import RateCard from '../../../../components/RateCard';
import { websiteTypesData } from '../../../../data/webDesignData';
import Image from 'next/image'; // Import Image for background

export const metadata = {
  title: 'Guide on How to own a website in Kenya and the prices for each type',
  description: `Discover expert custom web design services in Nairobi, Kenya, tailored to meet your business needs. At Hurricane Teck, we create responsive, user-friendly websites that enhance your online presence and drive growth. Whether you're a startup or an established business, our affordable web design solutions ensure your brand stands out in the competitive digital market.`,
  icons: {
    icon: '/h.png',
    shortcut: '/h.png',
    apple: '/h.png',
  }
};

export default function WebDesignPage() {
  const [headerState, setHeaderState] = useState('initial');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { 
        setHeaderState('scrolled'); 
      } else {
        setHeaderState('initial');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <Header scrollState={headerState} /> 
      
      <div className="container mx-auto px-4 pt-28 pb-16"> 
        <h1 
          className="text-4xl sm:text-5xl font-bold text-center mb-4 text-primary dark:text-primary"
          style={{ letterSpacing: '0.05em' }}
        >
          Web Design Services in Kenya
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          We build professional, mobile-friendly websites tailored to your needs, serving businesses and organizations in Nairobi, Mombasa, Kisumu, Eldoret, Nakuru, and across Kenya.
        </p>
        
        <div className="space-y-16"> 
          {websiteTypesData.map((websiteType) => (
            <section key={websiteType.id} className="border rounded overflow-hidden text-white relative border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800">
                {/* Background Image and Overlay */}
                <Image 
                    src="/geometric-bg.jpg" // Make sure this path is correct
                    alt="Rate card background"
                    fill
                    className="object-cover " // Behind content
                    quality={75}
                />
              <h2 className="text-2xl relative z-10 sm:text-3xl font-semibold text-primary mb-4">{websiteType.title}</h2>
              <p className="text-base relative z-10 text-gray-300 dark:text-gray-200 mb-4 leading-relaxed">
                {websiteType.description}
              </p>
              <p className="text-sm relative z-10 text-gray-200 dark:text-gray-400 mb-1 italic">
                <span className="font-semibold">Use Cases:</span> {websiteType.useCases}
              </p>
               <p className="text-sm relative z-10 text-gray-200 dark:text-gray-400 mb-6 italic">
                <span className="font-semibold">Keywords:</span> {websiteType.keywords.join(', ')}
              </p>
              
              <RateCard data={websiteType.rateCard} />

            </section>
          ))}
        </div>
      </div>

       <div className="text-center py-10 text-gray-500 dark:text-gray-400">
         Contact Hurricane Teck for your custom web design needs.
       </div>
    </div>
  );
}
