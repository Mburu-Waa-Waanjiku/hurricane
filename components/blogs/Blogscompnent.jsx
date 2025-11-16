'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightCircle } from 'lucide-react';
import { useStateContext } from '../../utils/StateContext';
import { FaChartLine, FaChevronRight, FaGlobe, FaLink, FaMapMarkerAlt, FaMobileAlt, FaSearch, FaStar } from 'react-icons/fa';

const developers = [
  {
    name: "Hurricane Teck",
    summary:
      "Custom web development, digital marketing agency and branding services.",
    strengths: "Best at designing beautyful websites and smooth animations; More business focused with Web design as a service to businesses as part of digital marketing and branding services.",
    website: "https://www.hurricaneteck.co.ke",
    location: "Ruiru Town, Kiambu County",
  },
  {
    name: "Zurihub Technology",
    summary:
      "Web design & development; software & custom systems (ERP, CRM, POS).",
    strengths:
      "Strong portfolio; Ruiru-based; good for businesses needing custom systems.",
    website: "https://www.zurihub.co.ke",
    location: "Kamakis, Ruiru Town, Kiambu County",
  },
  {
    name: "Techkraze Interactive",
    summary:
      "Web design & development, SEO optimization, hosting & maintenance; mobile apps too.",
    strengths:
      "All-round package: SEO + site + support; located in Ruiru (Sunrise Estate).",
    website: "https://www.businesslist.co.ke/company/147452/techkraze-interactive",
    location: "Sunrise Estate, Ruiru Town, Kiambu County",
  },
];

export default function Blogscomponent({ setRegister }) {

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
        <div className="absolute inset-0 !h-[150vh] -translate-y-[50vh] bg-gradient-to-b from-black/70 to-black/70 z-10"></div>
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
        <div className="absolute inset-0 !h-[150vh] -translate-y-[50vh] bg-gradient-to-b from-black/70 to-black/70 z-10"></div>
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
        <div className="absolute inset-0 !h-[150vh] -translate-y-[50vh] bg-gradient-to-b from-black/70 to-black/70 z-10"></div>
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
        <div className="absolute inset-0 !h-[150vh] -translate-y-[50vh] bg-gradient-to-b from-black/70 to-black/70 z-10"></div>
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
        <div className="absolute inset-0 !h-[150vh] -translate-y-[50vh] bg-gradient-to-b from-black/70 to-black/70 z-10"></div>
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
        style={{ opacity: contentOpacity5, y: backgroundY }}
      >
        <div className="absolute inset-0 !h-[150vh] -translate-y-[50vh] bg-gradient-to-b from-black/70 to-black/70 z-10"></div>
        <Image
          src="/Z5.jpg"
          alt="M-Pesa Background"
          fill
          priority
          className="object-cover !h-[110vh] -translate-y-[10vh]"
        />
      </motion.div>

      {/* Text Section - Developers Showcase */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        
        {/* Section 1: Introduction */}
        <motion.div 
          style={{ opacity: contentOpacity1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="max-w-6xl mx-auto px-6 text-center pointer-events-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
              Find Your Perfect
              <span className="block text-primary">
                Web Developer In Ruiru
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto drop-shadow-lg">
              Discover top-rated web development agencies in Ruiru, Kenya
            </p>
          </div>
        </motion.div>

          {/* Section 2: First Developer - Hurricane Teck */}
          <motion.div 
            style={{ opacity: contentOpacity2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="max-w-4xl mx-auto px-6 pointer-events-auto">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary p-4 rounded-2xl">
                    <FaStar className="text-white text-3xl" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-4xl font-bold text-white mb-2">{developers[0].name}</h2>
                    <p className="text-blue-300 flex items-center gap-2">
                      <FaMapMarkerAlt /> {developers[0].location}
                    </p>
                  </div>
                </div>
                <p className="text-xl text-gray-200 mb-4">{developers[0].summary}</p>
                <div className="bg-white/5 rounded-xl p-4 mb-6">
                  <p className="text-gray-300"><strong className="text-white">Strengths:</strong> {developers[0].strengths}</p>
                </div>
                <a 
                  href={developers[0].website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  <FaGlobe /> Visit Website <FaChevronRight />
                </a>
            </div>
            </div>
          </motion.div>

          {/* Section 3: Second Developer - Zurihub Technology */}
          <motion.div 
            style={{ opacity: contentOpacity3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="max-w-4xl mx-auto px-6 pointer-events-auto">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary p-4 rounded-2xl">
                    <FaStar className="text-white text-3xl" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-4xl font-bold text-white mb-2">{developers[1].name}</h2>
                    <p className="text-blue-300 flex items-center gap-2">
                      <FaMapMarkerAlt /> {developers[1].location}
                    </p>
                  </div>
                </div>
                <p className="text-xl text-gray-200 mb-4">{developers[1].summary}</p>
                <div className="bg-white/5 rounded-xl p-4 mb-6">
                  <p className="text-gray-300"><strong className="text-white">Strengths:</strong> {developers[1].strengths}</p>
                </div>
                <a 
                  href={developers[1].website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  <FaGlobe /> Visit Website <FaChevronRight />
                </a>
            </div>
            </div>
          </motion.div>

          {/* Section 4: Third Developer - Techkraze Interactive */}
          <motion.div 
            style={{ opacity: contentOpacity4 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="max-w-4xl mx-auto px-6 pointer-events-auto">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary p-4 rounded-2xl">
                    <FaStar className="text-white text-3xl" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-4xl font-bold text-white mb-2">{developers[2].name}</h2>
                    <p className="text-blue-300 flex items-center gap-2">
                      <FaMapMarkerAlt /> {developers[2].location}
                    </p>
                  </div>
                </div>
                <p className="text-xl text-gray-200 mb-4">{developers[2].summary}</p>
                <div className="bg-white/5 rounded-xl p-4 mb-6">
                  <p className="text-gray-300"><strong className="text-white">Strengths:</strong> {developers[2].strengths}</p>
                </div>
                <a 
                  href={developers[2].website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  <FaGlobe /> Visit Website <FaChevronRight />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Section 5: Comparison */}
          <motion.div 
            style={{ opacity: contentOpacity5 }}
            className="absolute inset-0 flex items-center flex-col px-6 justify-center"
          >
            <h2 className="text-5xl font-bold text-white mb-8 drop-shadow-2xl">
              Why Choose Local?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <FaMobileAlt className="text-xl sm:text-5xl text-blue-400 mx-auto mb-4" />
                <h3 className="text-sm sm:text-xl font-bold text-white mb-2">Local Expertise</h3>
                <p className="text-sm sm:text-base text-gray-300">Understanding of the Kenyan market and business needs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <FaLink className="text-xl sm:text-5xl text-green-400 mx-auto mb-4" />
                <h3 className="text-sm sm:text-xl font-bold text-white mb-2">Easy Communication</h3>
                <p className="text-sm sm:text-base text-gray-300">Same timezone and easy face-to-face meetings</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <FaChartLine className="text-xl sm:text-5xl text-purple-400 mx-auto mb-4" />
                <h3 className="text-sm sm:text-xl font-bold text-white mb-2">Cost Effective</h3>
                <p className="text-sm sm:text-base text-gray-300">Competitive pricing with quality results</p>
              </div>
            </div>
          </motion.div>

          {/* Section 6: Call to Action */}
          <motion.div 
            style={{ opacity: contentOpacity6 }}
            className="absolute inset-0 flex items-center px-6 flex-col justify-center"
          >
            <h2 className="text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              Ready to Start?
            </h2>
            <p className="text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact any of these agencies today and bring your vision to life
            </p>
            <button 
              onClick={() => setRegister(true)}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:scale-110 transition-transform shadow-2xl"
            >
              Get Started <ArrowRightCircle size={28} />
            </button>
          </motion.div>

        </div>
      </div>
  );
}