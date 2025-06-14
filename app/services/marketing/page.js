'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useStateContext } from '../../../utils/StateContext';
import { motion, AnimatePresence } from 'framer-motion';

// Array of marketing services with their details
const services = [
  { 
    name: 'Package Branding', 
    images: ['/pk1.jpg', '/pk2.jpg', '/pk3.jpg', '/pk4.jpg'],
    transitionDelay: 3000
  },
  { 
    name: 'Business Cards Design and Printing', 
    images: ['/bc1.jpg', '/bc2.jpg', '/bc3.jpg', '/bc4.jpg', '/bc5.jpg'],
    transitionDelay: 2500
  },
  { 
    name: 'Flyers Design and Printing', 
    images: ['/fl1.jpg', '/fl2.jpg', '/fl3.jpg', '/fl4.jpg', '/fl5.jpg'],
    transitionDelay: 2000
  },
  { 
    name: 'Banners Design and Printing', 
    images: ['/bn1.jpg', '/bn2.jpg', '/bn3.jpg', '/bn4.jpg', '/bn5.jpg'],
    transitionDelay: 3000
  },
  { name: 'Merchandising' },
];

// ImageSlider component for displaying rotating images
const ImageSlider = ({ images, index, transitionDelay }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to rotate images at specified interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, transitionDelay);

    return () => clearInterval(interval);
  }, [images, transitionDelay]);

  // Animation variants for different transition effects
  const variants = {
    enter: (direction) => {
      // ... (existing enter animations)
    },
    center: {
      // ... (existing center animations)
    },
    exit: (direction) => {
      // ... (existing exit animations)
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  // Function to change the current image
  const paginate = (newDirection) => {
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            // ... (existing transition properties)
          }}
          drag={index === 0 ? "x" : index === 1 ? "x" : index === 3 ? "y" : false}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute top-0 left-0 w-full h-full"
          style={{ perspective: '1000px' }}
        >
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Main MarketingPage component
function MarketingPage() {
  const { setAniated, setOpenContacts } = useStateContext();

  // Effect to handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setAniated(true);
      } else {
        setAniated(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setAniated]);

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-4xl font-bold text-center mb-8 cute">Our Marketing Services</h1>
      <div className="grid grid-cols-1 lg:grid-rows-2 md:grid-cols-12 lg:grid-cols-9 gap-4 lg:gap-2">
        {services.map((service, index) => (
          <div 
            key={service.name}
            className={`
              p-1 sm:p-1.5 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl
              ${index === 0 ? 'md:col-span-8 lg:col-span-4 md:row-span-2 lg:row-span-6 bg-gradient-to-br from-red-600 to-red-800 text-white aspect-square' : 
                index === 1 ? 'bg-gradient-to-r lg:col-span-2 lg:row-span-1 from-yellow-400 to-orange-500 md:col-span-4 text-white aspect-square' : 
                index === 2 ? 'bg-gradient-to-tl lg:col-span-3 lg:aspect-auto  from-indigo-500 to-purple-600 md:col-span-4 text-white aspect-square' :
                index === 4 ? 'md:col-span-7 bg-gradient-to-bl lg:col-span-3  from-green-400 to-cyan-500 text-white  aspect-[1/1] md:aspect-auto' :
                index === 3 ? 'md:col-span-5 bg-gradient-to-r from-yellow-400 lg:col-span-2  to-orange-500 text-white aspect-[1/1] lg:aspect-auto' :
                'bg-gradient-to-tl from-indigo-500 to-purple-600 md:col-span-4 text-white'}
            `}
          >
            <div className="relative flex flex-col items-center justify-between h-full w-full">
              {/* Render ImageSlider for services with images */}
              {(index === 0 || index === 1 || index === 2 || index === 3) && (
                <>
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <ImageSlider images={service.images} index={index} transitionDelay={service.transitionDelay} />
                  </div>
                  <div className="absolute inset-0 bg-black opacity-20 rounded-3xl overflow-hidden"></div>
                </>
              )}
              <div className="relative z-10 flex flex-col items-center justify-between h-full w-full p-2 sm:p-3">
                {/* Service title */}
                <div className={`absolute top-5 z-10 w-full ${(index === 1 || index === 2) ? 'right-0 pr-1 text-right' : 'left-0 pl-1 text-left'}`}>
                  <h2 className={`relative text-[1.5rem] font-semibold leading-snug text-white max-w-[70%] ${(index === 0) ? 'mr-auto' : (index === 3 || index === 4) ? 'mr-auto md:text-sm' : 'ml-auto md:text-sm'}`}>
                    <span className={`inline-block px-2 py-1 rounded-md ${
                      index === 0 ? 'bg-gradient-to-br from-red-600 to-red-800' : 
                      index === 1 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 
                      index === 2 ? 'bg-gradient-to-tl from-indigo-500 to-purple-600' :
                      index === 4 ? 'bg-gradient-to-bl from-green-400 to-cyan-500' :
                      index === 3 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                      'bg-gradient-to-tl from-indigo-500 to-purple-600'
                    }`}>
                      {service.name}
                    </span>
                    <span className="rounded-corner"></span>
                  </h2>
                </div>
                <div className="w-full h-full"></div>
                {/* Learn More button */}
                <button onClick={()=> setOpenContacts(true)} className={`mt-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors duration-300 ${(index != 0) ? 'text-xs md:text-[10px] lg:text-xs' : 'text-sm sm:text-base lg:text-lg'} font-medium`}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketingPage;