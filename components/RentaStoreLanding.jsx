'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightCircle } from 'lucide-react';
import { useStateContext } from '../utils/StateContext';

export default function RentaStoreLanding({ setRegister }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const { setAnimated } = useStateContext();
  
  // Update the animated state based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(v => {
      // Set animated to true when scroll progress is greater than 0.1
      setAnimated(v > 0.1);
    });
    return () => unsubscribe();
  }, [scrollYProgress, setAnimated]);
  
  // For debugging - optional log of scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(v => console.log("Scroll progress:", v));
    return () => unsubscribe();
  }, [scrollYProgress]);
  
  // Parallax effect for background elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Text and background transitions based on scroll - better distributed for visibility
  const contentOpacity1 = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const contentOpacity2 = useTransform(scrollYProgress, [0.12, 0.16, 0.24, 0.28], [0, 1, 1, 0]);
  const contentOpacity3 = useTransform(scrollYProgress, [0.28, 0.32, 0.4, 0.44], [0, 1, 1, 0]);
  const contentOpacity4 = useTransform(scrollYProgress, [0.44, 0.48, 0.56, 0.6], [0, 1, 1, 0]);
  const contentOpacity5 = useTransform(scrollYProgress, [0.6, 0.64, 0.72, 0.76], [0, 1, 1, 0]);
  const contentOpacity6 = useTransform(scrollYProgress, [0.76, 0.8, 1.0], [0, 1, 1]);
  
  return (
    <div 
      ref={containerRef} 
      className="h-[800vh] relative bg-black"
    > {/* Added relative positioning */}
      {/* First background - Google Account */}
      <motion.div 
        className="fixed h-screen w-full top-0 left-0 z-0"
        style={{ opacity: contentOpacity1, y: backgroundY }}
      >
        <div className="absolute inset-0 !h-[150vh] -translate-y-[50vh] bg-gradient-to-b from-black/40 to-black/70 z-10"></div>
        <Image
          src="/Z.jpg"
          alt="Background"
          fill
          priority
          className="object-cover !h-[150vh] -translate-y-[50vh]"
        />
      </motion.div>

      {/* Second background - Business */}
      <motion.div 
        className="fixed h-screen w-full top-0 left-0 z-0"
        style={{ opacity: contentOpacity2, y: backgroundY }}
      >
        <div className="absolute inset-0 !h-[150vh] -translate-y-[50vh] bg-gradient-to-b from-black/40 to-black/70 z-10"></div>
        <Image
          src="/ZZ.png"
          alt="Business Background"
          fill
          priority
          className="object-cover !h-[150vh] -translate-y-[50vh]"
        />
      </motion.div>

      {/* Third background - Store Video */}
      <motion.div 
        className="fixed h-screen w-full top-0 left-0 z-0"
        style={{ opacity: contentOpacity3, y: backgroundY }}
      >
        <div className="absolute inset-0 !h-[150vh] -translate-y-[50vh] bg-gradient-to-b from-black/40 to-black/70 z-10"></div>
        <Image
          src="/ZZZ.png"
          alt="Google Drive Background"
          fill
          priority
          className="object-cover !h-[150vh] -translate-y-[50vh]"
        />
      </motion.div>

      {/* Fourth background */}
      <motion.div 
        className="fixed h-screen w-full top-0 left-0 z-0"
        style={{ opacity: contentOpacity4, y: backgroundY }}
      >
        <div className="absolute inset-0 !h-[150vh] -translate-y-[50vh] bg-gradient-to-b from-black/40 to-black/70 z-10"></div>
        <Image
          src="/ZZZZ.png"
          alt="Google Drive Background"
          fill
          priority
          className="object-cover !h-[130vh] -translate-y-[30vh]"
        />
      </motion.div>

      {/* Fifth background */}
      <motion.div 
        className="fixed h-screen w-full top-0 left-0 z-0"
        style={{ opacity: contentOpacity5, y: backgroundY }}
      >
        <div className="absolute inset-0 !h-[150vh] -translate-y-[50vh] bg-gradient-to-b from-black/40 to-black/70 z-10"></div>
        <Image
          src="/Z5.jpg"
          alt="M-Pesa Background"
          fill
          priority
          className="object-cover !h-[110vh] -translate-y-[10vh]"
        />
      </motion.div>

      {/* Sixth background */}
      <motion.div 
        className="fixed h-screen w-full top-0 left-0 z-0"
        style={{ opacity: contentOpacity6, y: backgroundY }}
      >
        <div className="absolute inset-0 !h-[150vh] -translate-y-[50vh] bg-gradient-to-b from-black/40 to-black/70 z-10"></div>
        <Image
          src="/bg.jpg"
          alt="CTA Background"
          fill
          priority
          className="object-cover !h-[150vh] -translate-y-[50vh]"
        />
      </motion.div>

      {/* Text Section */}
      <div className="fixed top-1/2 left-0 py-16 transform -translate-y-1/2 z-10 flex items-center justify-start w-full overflow-hidden">
        {/* First text - Google Account */}
        <motion.h1
          style={{ opacity: contentOpacity1 }}
          className={`font-humane px-8 font-bold tracking-wide text-white/60 w-full text-6xl leading-tight tracking-wide transition-all duration-1000`}
        >
          <span className="text-[5.5rem] text-white mr-2 inline-block animate-slide-in-left">
            DO
          </span>
          <span className="animate-slide-in-right">YOU </span> 
          <span className="text-primary text-6xl lg:text-[5.5rem] mr-2 inline-block animate-slide-in-left">
             HAVE
          </span>
          <span className="animate-slide-in-right"> A</span>
          <br />
          <span className="text-primary text-[5.5rem] mr-2 inline-block animate-slide-in-left">
            GOOGLE
          </span>
          <span className="inline-block animate-slide-in-bottom"> ACCOUNT</span>
        </motion.h1>
        
        {/* Second text - Business */}
        <motion.h1
          style={{ opacity: contentOpacity2 }}
          className={`font-humane px-8 font-bold tracking-wide text-white/60 w-full text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-wide transition-all duration-1000`}
        >
          <span className="text-[5.5rem] text-white mr-2 inline-block animate-slide-in-left">
            DO
          </span>
          <span className="animate-slide-in-right">YOU </span> 
          <span className="text-primary mr-2 inline-block animate-slide-in-left">
             HAVE
          </span>
          <span className="animate-slide-in-right"> A </span>
          <br />
          <span className="text-6xl text-primary mr-2 inline-block animate-slide-in-left">
            BUSINESS
          </span>
          <span className="inline-block animate-slide-in-bottom">?</span>
        </motion.h1>
        
        {/* Third text - Store */}
        <motion.h1
          style={{ opacity: contentOpacity3 }}
          className={`font-humane px-8 absolute left-0 w-full font-bold tracking-wide text-white/60 text-5xl leading-tight tracking-wide transition-all duration-1000 overflow-visible`}
        >
          <span className="text-7xl  text-white mr-2 inline-block animate-slide-in-left">
            WOULD
          </span>
          <span className="animate-slide-in-right">YOU </span> 
          <span className="text-4xl sm:text-5xl lg:text-[5.5rem] text-primary mr-2 inline-block animate-slide-in-left">
             LIKE
          </span>
          <br />
          <span className="animate-slide-in-right"> A </span>
          <span className="text-4xl sm:text-5xl lg:text-[5.5rem] text-primary mr-2 inline-block animate-slide-in-left">
            STORE
          </span>
          <br />
          <span className=" animate-slide-in-bottom">FOR </span>
          <span className="text-7xl  text-white mr-2 inline-block animate-slide-in-left">
            CUSTOMERS 
          </span>
          <span className=" inline-block pr-1.5 animate-slide-in-bottom">TO </span>
          <span className="text-7xl text-primary mr-2 inline-block animate-slide-in-left">
            SHOP
          </span>
          <span className="text-5xl  animate-slide-in-bottom">?</span>
          <br/>
          <motion.div
            className=" font-normal text-white flex items-center font-bold rounded-full text-4xl tracking-wide transform transition-all hover:scale-105 animate-bounce"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setRegister(true)}
          >
            CHECK THIS  
            <Link
              href={'https://www.atkevs.com/'}
              className=''
            >
              <ArrowRightCircle
               className='text-primary ml-3 scale-[1.3]'
              />
            </Link>
          </motion.div>
        </motion.h1>
        
        {/* Fourth text - Google Drive */}
        <motion.h1
          style={{ opacity: contentOpacity4 }}
          className={`font-humane px-8 absolute left-0 w-full font-bold tracking-wide text-white/60 text-4xl leading-tight tracking-wide transition-all duration-1000 max-w-6xl mx-auto overflow-visible`}
        >
          <span className="text-7xl text-white mr-2 inline-block animate-slide-in-left">
            LET 
          </span>
          <span className="text-5xl inline-block animate-slide-in-bottom">YOUR </span>
          <br />
          <span className="text-4xl  text-primary mr-2 inline-block animate-slide-in-left">
            GOOGLE DRIVE
          </span>
          <br />
          <span className="text-5xl pr-1.5 animate-slide-in-bottom">
            MAKE YOU 
          </span>
          <span className="text-6xl text-white mr-2 animate-slide-in-left">
            MONEY
          </span>
          <br />
          <span className="text-4xl pr-1.5 animate-slide-in-bottom">
            BY CONVERTING 
          </span>
          <span className="text-4xl text-white inline-block animate-slide-in-bottom">
            YOUR IMAGES INTO A FULL WEBSITE
          </span>
          <br />
          <span className="text-5xl inline-block text-primary animate-slide-in-bottom">
            STOREFRONT FOR YOUR BUSINESS
          </span>
        </motion.h1>
        
        {/* Fifth text */}
        <motion.h1
          style={{ opacity: contentOpacity5 }}
          className={`font-humane px-8 absolute left-0 w-full font-bold tracking-wide text-white/60 text-5xl  leading-tight tracking-wide transition-all duration-1000 max-w-6xl mx-auto overflow-visible`}
        >
          <span className="text-6xl text-white mr-2 inline-block animate-slide-in-left">
            GET YOUR
          </span>
          <br />
          <span className="text-4xl sm:text-7xl lg:text-8xl text-primary mr-2 inline-block animate-slide-in-left">
            .CO.KE DOMAIN
          </span>
          <br />
          <span className="text-4xl inline-block animate-slide-in-bottom">
            AND START TO RECEIVE PAYMENTS
          </span>
          <br />
          <span className="text-4xl pr-1.5 sm:text-5xl lg:text-6xl inline-block animate-slide-in-bottom">
            USING 
          </span>
          <span className="text-5xl pr-1.5 text-white inline-block animate-slide-in-bottom">
            M-PESA 
          </span>
          <span className="text-4xl pr-1.5  inline-block animate-slide-in-bottom">
            TO YOUR 
          </span>
          <span className="text-5xl text-primary inline-block animate-slide-in-bottom">
            TILL,
          </span>
          <br />
          <span className="text-5xl pr-1.5 text-primary inline-block animate-slide-in-bottom">
            PAYBILL,
          </span>
          <span className="text-4xl pr-1.5 sm:text-5xl lg:text-6xl inline-block animate-slide-in-bottom">
            OR 
          </span>
          <span className="text-5xl pr-1.5 text-primary inline-block animate-slide-in-bottom">
            BANK ACCOUNT
          </span>
        </motion.h1>
        
        {/* Sixth section - Just CTA button */}
        <motion.div
          style={{ opacity: contentOpacity6 }}
          className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-auto flex flex-col items-center justify-center"
        >
          {/* Sixth text */}
          <motion.h1
            className={`font-humane px-8 left-0 w-full font-bold tracking-wide text-white/60 text-5xl  leading-tight tracking-wide transition-all duration-1000 max-w-6xl mx-auto overflow-visible`}
          >
            <span className="text-6xl text-white mr-2 inline-block animate-slide-in-left">
              BOOK 
            </span>
            <br />
            <span className="text-8xl text-primary mr-2 inline-block animate-slide-in-left">
              YOUR STORE
            </span>
            <br />
            <span className="text-4xl inline-block animate-slide-in-bottom">
              TODAY
            </span>
          </motion.h1>
          <motion.button
            className="bg-primary hover:bg-primary/80 text-white font-bold py-6 px-16 rounded-full text-5xl md:text-6xl font-humane tracking-wide shadow-xl transform transition-all hover:scale-105 animate-bounce"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setRegister(true)}
          >
            FOR FREE
          </motion.button>
        </motion.div>
      </div>

      {/* Add a visual marker at the bottom to ensure scrolling reaches the end */}
      <div className="absolute bottom-0 w-full h-screen bg-transparent" aria-hidden="true"></div>
    </div>
  );
}