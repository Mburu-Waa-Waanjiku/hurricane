'use client'

import React, { useState, useEffect, useRef } from 'react';
import { useStateContext } from '../utils/StateContext';
import Image from 'next/image';
import ContactButton from './ContactButton';
import ContactInfo from './ContactInfo';
import Header from './Header';

// WebDesign component for displaying a series of slides about web design services
const WebDesign = () => {
  // State for managing current slide, window height, and countdown
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Refs for managing slides and touch events
  const slidesRef = useRef([]);
  const touchStartY = useRef(null);

  // Context for managing global state
  const { setAnimated, setOpenContacts } = useStateContext();

  // Effect for updating animation state based on current slide
  useEffect(() => {
    setAnimated(currentSlide !== 0);
  }, [currentSlide, setAnimated]);

  // Effect for handling window resize and setting initial height
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    handleResize(); // Set initial height
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect for handling scroll events and updating current slide
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      slidesRef.current.forEach((slide, index) => {
        if (slide) {
          const slideTop = slide.offsetTop;
          const slideBottom = slideTop + slide.offsetHeight;

          if (currentScrollPosition >= slideTop && currentScrollPosition < slideBottom) {
            setCurrentSlide(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect for handling keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowDown' && currentSlide < 6) {
        event.preventDefault();
        moveToSlide(currentSlide + 1);
      } else if (event.key === 'ArrowUp' && currentSlide > 0) {
        event.preventDefault();
        moveToSlide(currentSlide - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // Effect for managing countdown timer
  useEffect(() => {
    const countdownDate = new Date('April 30, 2025 00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const countdownTimer = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownTimer);
  }, []);

  // Function to move to a specific slide
  const moveToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    slidesRef.current[slideIndex].scrollIntoView({ behavior: 'smooth' });
  };

  // Handler for wheel events
  const handleWheel = (event) => {
    event.preventDefault();
    if (event.deltaY > 0 && currentSlide < 6) {
      moveToSlide(currentSlide + 1);
    } else if (event.deltaY < 0 && currentSlide > 0) {
      moveToSlide(currentSlide - 1);
    }
  };

  // Handlers for touch events
  const handleTouchStart = (event) => {
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    event.preventDefault(); // Prevent default scrolling behavior
    if (!touchStartY.current) {
      return;
    }
    const touchEndY = event.touches[0].clientY;
    const touchDiff = touchStartY.current - touchEndY;

    if (touchDiff > 50 && currentSlide < 6) {
      moveToSlide(currentSlide + 1);
      touchStartY.current = null;
    } else if (touchDiff < -50 && currentSlide > 0) {
      moveToSlide(currentSlide - 1);
      touchStartY.current = null;
    }
  };

  const handleTouchEnd = () => {
    touchStartY.current = null;
  };

  // Function to scroll to the next slide
  const scrollToNextSlide = () => {
    if (currentSlide < 6) {
      moveToSlide(currentSlide + 1);
    }
  };

  // Array of slide content
  const slides = [
    { title: 'Welcome to Hurricane Teck Web Design Studio in Nairobi', content: 'Looking for expert web design in Nairobi? At Hurricane Teck Web Design Studio, we create responsive, custom websites that reflect your brand and help your business grow. Specializing in local markets, We provide tailored solutions for businesses in Kenya.', image: '/homenairobi.jpg' },
    { title: 'Explore Our Web Design Portfolio in Kenya', content: ` We have helped businesses in Nairobi, Mombasa, Kisumu, and across Kenya build their online presence. Each website is designed with the user in mind, ensuring a mobile-friendly experience, fast loading times, and SEO optimization to attract customers locally and internationally. Check out our most recent works.`, image: '/templates2.jpg' },
    { title: 'Our Web Design Process – Built for Kenyan Businesses', content: `Our process is simple: Consultation, Custom Design, Development, and Launch. We keep you involved every step of the way to ensure your website meets your expectations and business goals.`, image: '/Designer.jpg' },
    { title: 'Why Kenyan Businesses Trust Our Web Design Services', content: `Why choose Hurricane Web Design Studio? we offer personalized services, ensuring each website reflects the client's vision while meeting the specific demands of the Kenyan market. Unlike other agencies, we provide focused attention to detail and affordability without compromising on quality.`, image: '/viewnairobi.jpg' },
    { title: 'Web Design Services for Kenyan Businesses', content: 'We specialize in full web design, web pages redesigning to give your site a fresh & eye-catching look,  SEO and website maintenance for businesses in Kenya. From e-commerce to corporate sites, we deliver solutions tailored to the local market.', image: '/work.jpg' },
    { title: 'Contact Us for a Free Web Design Consultation', content: `Contact us for a free consultation. Let us help you create a custom website that drives business growth in Nairobi, Kenya and beyond.`, image: '/consult.jpg' },
    { title: 'Limited-Time Web Design Offer for Kenyan Businesses', content: 'Take advantage of our 2nd quater season offer for affordable web design in Kenya. Get in touch now for discounted rates on new website builds!', image: '/offers.jpg' },
  ];

  // Render the component
  return (
    <>
      <Header/>
      <ContactInfo/>
      <div 
        className="web-design-slides overflow-hidden"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', touchAction: 'none', height: `${windowHeight}px` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={el => slidesRef.current[index] = el}
            className="slide w-full relative"
            style={{ height: `${windowHeight}px` }}
          >
            {/* Background image */}
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white-40 to-white/10  dark:from-black/90 dark:"></div>
            {/* Slide content */}
            <div className="absolute inset-0 flex justify-start items-center md:translate-y-8">
              <div className={`w-3/4 md:w-2/3 px-4 md:px-12 lg:px-20 ${index === 6 && '-translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl lg:text-4xl mb-4 text-primary font-bold">{slide.title}</h2>
                <p className="dark:text-white font-medium dark:font-normal text-base md:text-lg lg:text-xl">{slide.content}</p>
              </div>
              {/* Contact button for slide 5 */}
              {index === 5 && (
                <div className="relative w-1/3 md:w-1/4 flex justify-center items-center">
                  <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/4 md:-translate-x-0">
                    <ContactButton />
                  </div>
                </div>
              )}
              {/* Scroll indicator for slide 1 */}
              {index === 1 && (
                <div className="hidden md:flex items-center -rotate-90 justify-center">
                  <svg className="w-8 h-8 text-white animate-bounce " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 9l7 7 7-7" />
                  </svg>
                </div>
              )}
              {/* Portfolio links for slide 1 */}
              {index === 1 && (
                <div className="hidden flex-col w-1/3 md:pr-12 lg:pr-20 gap-20 md:flex md:justify-center items-center md:space-x-4 md:mt-8">
                  <a href="https://ruirucollegerccms.ac.ke" target="_blank" rel="noopener noreferrer" className="inline-block text-center w-40 px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out whitespace-nowrap">
                    Ruiru College
                  </a>
                  <a href="https://atkevs.com" target="_blank" rel="noopener noreferrer" className="inline-block px-6 text-center py-3 !ml-0 w-40 text-white font-semibold rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition duration-300 ease-in-out whitespace-nowrap">
                    atkevs.com
                  </a>
                </div>
              )}
            </div>
            {/* Countdown timer for last slide */}
            {index === 6 && (
              <div className="absolute bottom-8 left-0 right-0 text-white flex flex-col items-center">
                <div className="flex space-x-4 justify-center">
                  <div className="text-center">
                    <div className="bg-black border-2 border-primary rounded-lg p-2 shadow-lg flip-animation">
                      <span className="text-4xl font-bold text-primary">{countdown.days}</span>
                      <p className="text-white">Days</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-black border-2 border-primary rounded-lg p-2 shadow-lg flip-animation">
                      <span className="text-4xl font-bold text-primary">{countdown.hours}</span>
                      <p className="text-white">Hours</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-black border-2 border-primary rounded-lg p-2 shadow-lg flip-animation">
                      <span className="text-4xl font-bold text-primary">{countdown.minutes}</span>
                      <p className="text-white">Minutes</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-black border-2 border-primary rounded-lg p-2 shadow-lg flip-animation">
                      <span className="text-4xl font-bold text-primary">{countdown.seconds}</span>
                      <p className="text-white">Seconds</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    moveToSlide(5);
                    setOpenContacts(true);
                  }}
                  className="mt-6 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 text-lg rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                >
                  Redeem Offer Now
                </button>


              </div>
            )}
            {/* Mobile portfolio links for slide 1 */}
            {index === 1 && (
              <div className="absolute md:hidden bottom-14 left-1/2 transform -translate-x-1/2 flex  gap-4 items-center">
                <a href="https://ruirucollegerccms.ac.ke" target="_blank" rel="noopener noreferrer" className="inline-block w-40 px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out whitespace-nowrap text-center animate-pulse">
                  Ruiru College
                </a>
                <a href="https://atkevs.com" target="_blank" rel="noopener noreferrer" className="inline-block w-40 px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition duration-300 ease-in-out whitespace-nowrap text-center animate-pulse">
                  atkevs.com
                </a>
              </div>
            )}
            {/* Navigation buttons for specific slides */}
            {(index === 0 || index === 4 || index === 2 || index === 3) && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <svg className="w-8 h-6 mb-2 animate-bounce text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <button
                  onClick={() => {
                    (index === 2 || index === 4 || index === 3) ? moveToSlide(5) : scrollToNextSlide() ;
                    (index === 4 || index === 2 || index === 3) && setOpenContacts(true);
                  }}
                  className="bg-primary text-white px-6 py-2 rounded-full flex items-center"
                >
                  {index === 0 ? `Start Your Journey` : index === 4 ? `Get A Quote Today` : index === 3 ? `Launch Yours Today` : `Consult For Free`}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default WebDesign;
