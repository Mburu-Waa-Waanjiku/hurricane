"use client"

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import ContactHurricane from './ContactHurricane'
import Link from 'next/link';
import {homeData} from '../data/homeData'

const LandingPage = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const softwareRef = useRef(null);
  const productRef = useRef(null);


  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleNavigation = (link) => {
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = link;
    }
  };

  const CarouselButton = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 p-2 rounded-full shadow-sm transition-all border border-gray-200"
      style={{ [direction === 'prev' ? 'left' : 'right']: '-16px' }}
      aria-label={direction}
    >
      {direction === 'prev' ? 
        <ChevronLeft className="w-4 h-4 text-gray-700" /> : 
        <ChevronRight className="w-4 h-4 text-gray-700" />
      }
    </button>
  );

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* Minimalist Header */}
      <div className='px-4 py-3 flex justify-between items-center'>
        <div className=''><span className='font-humane text-5xl'>H</span><span className='text-2xl font-bold'>urricane</span></div>
        <div className='flex relative hidden lg:block overflow-hidden h-9 w-9'>
          <Image 
            alt='Hurricane'
            fill
            className='rounded-lg'
            src="/h.png"
          />
        </div>
        <div className='opacity-0'><span className='font-humane text-5xl'>H</span><span className='text-2xl font-bold'>urricane</span></div>
        <ContactHurricane/>
      </div>
      {/* Hero Carousel Section */}
      <section className="pb-16  px-4 md:px-8">
        <div className="max-w-7xl mx-auto relative">
          <div 
            ref={heroRef}
            className="flex overflow-x-auto gap-5 scroll-smooth snap-x snap-mandatory hide-scrollbar pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {homeData.hero.map((slide, idx) => (
              <div key={idx} className="flex-shrink-0 w-full md:w-[450px] snap-center">
                <div className="relative rounded-lg overflow-hidden shadow-sm border border-gray-100 h-72">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div className="relative h-full flex flex-col items-center justify-center text-white px-8 text-center">
                    <h2 className="text-2xl font-normal mb-2 tracking-tight">{slide.title}</h2>
                    <p className="text-xs leading-relaxed opacity-90 font-light mb-4">{slide.description}</p>
                    <button 
                      onClick={() => handleNavigation(slide.link)}
                      className="px-6 py-2 rounded border border-white text-sm font-normal transition-colors hover:bg-white/10 backdrop-blur-sm"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <CarouselButton direction="prev" onClick={() => scroll(heroRef, 'left')} />
          <CarouselButton direction="next" onClick={() => scroll(heroRef, 'right')} />
        </div>
      </section>

      {/* Learn Marketing Tips Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-normal mb-8 tracking-tight text-black">
            Learn Marketing 
          </h2>
          
          <div className="relative">
            <div 
              ref={videoRef}
              className="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory hide-scrollbar pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {homeData.videos.map((video, idx) => (
                <div key={idx} className="flex-shrink-0 w-48 snap-center">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="relative bg-black" style={{ paddingBottom: '177.78%' }}>
                      <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center p-3">
                          <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                            <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                          <p className="text-[10px] opacity-60 font-light">TikTok</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-[11px] text-gray-700 mb-2 line-clamp-2 leading-relaxed font-light">{video.description}</p>
                      <button 
                        onClick={() => window.location.href = video.blogUrl}
                        className="w-full px-3 py-1.5 rounded border text-[11px] font-normal transition-colors hover:bg-gray-50"
                        style={{ borderColor: 'rgb(230, 71, 31)', color: 'rgb(230, 71, 31)' }}
                      >
                        Read Article
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <CarouselButton direction="prev" onClick={() => scroll(videoRef, 'left')} />
            <CarouselButton direction="next" onClick={() => scroll(videoRef, 'right')} />
          </div>
        </div>
      </section>

      {/* Marketing Software Section */}
      <section id="marketing-softwares" className="py-16 px-4 md:px-8 bg-gray-50/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-normal mb-8 tracking-tight text-black">
            Marketing Software
          </h2>
          
          <div className="relative">
            <div 
              ref={softwareRef}
              className="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory hide-scrollbar pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {homeData.software.map((item, idx) => (
                <div key={idx} className="flex-shrink-0 w-72 snap-center">
                  <div 
                    className="relative rounded-lg shadow-sm h-48 flex flex-col justify-between border border-gray-100 hover:shadow-md transition-shadow overflow-hidden group"
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 flex flex-col justify-end gap-5 h-full">
                      <h3 className="text-2xl font-normal text-white tracking-tight drop-shadow-lg">
                        {item.title}
                      </h3>
                      <button 
                        onClick={() => window.location.href = item.url}
                        className="px-5 py-2 rounded border border-white text-sm font-normal transition-colors hover:bg-white hover:text-gray-900 self-start text-white"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <CarouselButton direction="prev" onClick={() => scroll(softwareRef, 'left')} />
            <CarouselButton direction="next" onClick={() => scroll(softwareRef, 'right')} />
          </div>
        </div>
      </section>

      {/* Marketing Products Section */}
      <section id="marketing-products" className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-normal mb-8 tracking-tight text-black">
            Marketing Products
          </h2>
          
          <div className="relative">
            <div 
              ref={productRef}
              className="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory hide-scrollbar pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {homeData.products.map((item, idx) => (
                <div key={idx} className="flex-shrink-0 w-72 snap-center">
                  <div 
                    className="relative rounded-lg shadow-sm h-48 flex flex-col justify-between border border-gray-100 hover:shadow-md transition-shadow overflow-hidden group"
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 flex flex-col justify-end gap-5 h-full">
                      <h3 className="text-2xl font-normal text-white tracking-tight drop-shadow-lg">
                        {item.title}
                      </h3>
                      <button 
                        onClick={() => window.location.href = item.url}
                        className="px-5 py-2 rounded border border-white text-sm font-normal transition-colors hover:bg-white hover:text-gray-900 self-start text-white"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <CarouselButton direction="prev" onClick={() => scroll(productRef, 'left')} />
            <CarouselButton direction="next" onClick={() => scroll(productRef, 'right')} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-4 md:px-8 mt-16 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
            Ready to transform your marketing?
          </h3>
          <p className="text-gray-400 text-sm md:text-base mb-10 font-light max-w-2xl mx-auto">
            Let's create something exceptional together. Get in touch to start your journey.
          </p>
          <ContactHurricane view={"footer"}/>
          
          {/* Divider */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-xs text-gray-500 font-light">
              © 2024 Your Marketing Business. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;