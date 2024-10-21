'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { useStateContext } from '../utils/StateContext';

const ClientContainer = ({ name, path, description }) => {

  const services = [
    { name: 'Web Design', path: '/services/web-design', description: 'Transform your online presence with stunning, responsive websites. Let\'s create your digital masterpiece today!', image: '/webdesign.jpg' },
    { name: 'Mobile App', path: '/services/mobile-app', description: 'Bring your ideas to life with cutting-edge mobile apps. Ready to revolutionize the app store? Let\'s get started!', image: '/mobileapp.jpg' },
    { name: 'Marketing', path: '/services/marketing', description: 'Elevate your brand with our comprehensive marketing solutions. From eye-catching packaging to strategic campaigns, we\'ll help you stand out. Boost your visibility now!', image: '/marketing.jpg' },
    { name: 'SaaS', path: '/services/saas', description: 'Streamline your business with custom SaaS solutions. Ready to increase efficiency and scale your operations? Let\'s build your perfect SaaS product!', image: '/saas.jpg' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const { setAniated } = useStateContext();

  const navigateSlide = useCallback((direction) => {
    const totalSlides = services.length;
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    } else if (direction === 'prev') {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    } else if (typeof direction === 'number') {
      setCurrentSlide(direction);
    }
  }, [services.length]);

  useEffect(() => {
    const container = document.getElementById('slidesContainer');
    const slideWidth = container.clientWidth;
    container.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }, [currentSlide]);

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      navigateSlide('next');
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoplayInterval);
  }, [navigateSlide]);
  
  const [activeTab, setActiveTab] = useState('reviews');
  const [currentReviewSlide, setCurrentReviewSlide] = useState(0);
  const reviewsPerSlide = 1;

  const reviews = [
    { id: 1, name: "Lewis Mwiti", content: "Great service! Highly recommended.", rating: 5, image: "/customer1.jpeg" },
    { id: 2, name: "Johanson Owiti", content: "Excellent work and professional team.", rating: 4, image: "/customer2.jpeg" },
    { id: 3, name: "Mike Johnson", content: "Very satisfied with the results.", rating: 5, image: "/whiteman.jpg" },
    { id: 4, name: "Emily kanini", content: "Outstanding quality and attention to detail.", rating: 5, image: "/customer3.jpeg" },
    { id: 5, name: "David Lenana", content: "Responsive and helpful throughout the process.", rating: 4, image: "/customer4.jpeg" },
  ];

  const partners = [
    { id: 1, name: "DPO PAY", logo: "/dpo.svg" },
    { id: 2, name: "SAFARICOM", logo: "/safaricom.png" },
    { id: 3, name: "AFRICA'S TALKING", logo: "/talkingafrica.png" },
    { id: 4, name: "AIRTEL", logo: "/airtel.svg" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const navigateReviewSlide = useCallback((direction) => {
    const totalReviewSlides = reviews.length;
    if (direction === 'next') {
      setCurrentReviewSlide((prev) => (prev + 1) % totalReviewSlides);
    } else if (direction === 'prev') {
      setCurrentReviewSlide((prev) => (prev - 1 + totalReviewSlides) % totalReviewSlides);
    }
  }, [reviews.length]);

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      if (activeTab === 'reviews') {
        navigateReviewSlide('next');
      }
    }, 5000); // Change review slide every 5 seconds

    return () => clearInterval(autoplayInterval);
  }, [navigateReviewSlide, activeTab]);

  return (
    <>
      <div className="flex-grow overflow-hidden relative">
        <div className="absolute inset-0 transition-transform duration-500 ease-in-out" id="slideContainer">
          {/* Slides Container */}
          <div className="h-screen relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" id="slidesContainer">
              {services.map((service, index) => (
                <div key={index} className="h-screen w-screen flex-shrink-0 relative">
                  <Image
                    src={service.image}
                    alt={service.name}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 md:bg-opacity-30 z-10"></div>
                  <div className="absolute inset-0 z-20 flex items-center justify-between pl-5 md:px-16">
                    <div className="w-2/3 md:w-1/2 text-white">
                      <h2 className="text-4xl font-bold mb-4">{service.name}</h2>
                      <p className="text-xl md:text-lg mb-8">{service.description}</p>
                      <Link href={service.path}>
                        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-10 rounded-full transition duration-300">
                          Start Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none transition duration-300 z-30"
              onClick={() => navigateSlide('prev')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none transition duration-300 z-30"
              onClick={() => navigateSlide('next')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full bg-white transition duration-300 ${
                    currentSlide === index ? 'bg-opacity-100' : 'bg-opacity-50 hover:bg-opacity-75'
                  }`}
                  onClick={() => navigateSlide(index)}
                ></button>
              ))}
            </div>
          </div>
          
          {/* Second Slide */}
          <div className="h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 overflow-hidden pt-16">
            <div className="flex justify-center gap-4 md:gap-12 space-x-4 p-4 mb-4">
              <button
                className={`px-4 py-2 rounded-full w-48 whitespace-nowrap transition-all duration-300 ${
                  activeTab === 'reviews'
                    ? 'bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:from-gray-900 text-white'
                    : 'bg-white bg-opacity-50 text-gray-700 hover:bg-opacity-75'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Customer Reviews
              </button>
              <button
                className={`px-4 py-2 rounded-full w-48 whitespace-nowrap transition-all duration-300 ${
                  activeTab === 'partners'
                    ? 'bg-gradient-to-r text-white from-gray-700 via-gray-900 to-black hover:from-gray-900'
                    : 'bg-white bg-opacity-50 text-gray-700 hover:bg-opacity-75'
                }`}
                onClick={() => setActiveTab('partners')}
              >
                Our Partners
              </button>
            </div>
            
            <div className="flex-1 transition-opacity duration-500 ease-in-out">
              <div className={`h-full ${activeTab === 'reviews' ? 'block' : 'hidden'}`}>
                <div className="relative h-full overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentReviewSlide * 100}%)` }}
                  >
                    {reviews.map((review, index) => (
                      <div key={index} className="flex-shrink-0 w-full h-full flex -translate-y-24 items-center justify-center px-4 sm:px-8">
                        <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-4 sm:p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4 max-w-2xl w-full transition-all duration-300 hover:shadow-xl">
                          <div className="flex-shrink-0">
                            <Image src={review.image} alt={review.name} width={64} height={64} className="rounded-full border-2 border-purple-300" />
                          </div>
                          <div className="flex flex-col items-center text-center">
                            <p className="font-semibold text-indigo-700">{review.name}</p>
                            <div className="flex-grow">
                              <div className="relative">
                                <svg className="absolute top-0 left-0 w-4 h-4 sm:w-6 sm:h-6 text-purple-300 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className="text-gray-600 text-sm sm:text-lg mb-2 sm:mb-4 px-4 sm:px-8">{review.content}</p>
                                <svg className="absolute bottom-0 right-0 w-4 h-4 sm:w-6 sm:h-6 text-purple-300 transform translate-x-1/2 translate-y-1/2" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                                </svg>
                              </div>
                              <div className="flex items-center justify-center mt-2 sm:mt-4">
                                {[...Array(review.rating)].map((_, i) => (
                                  <svg key={i} className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    className="absolute -translate-y-28 top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-1 sm:p-2 focus:outline-none transition duration-300"
                    onClick={() => navigateReviewSlide('prev')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    className="absolute -translate-y-28 top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-1 sm:p-2 focus:outline-none transition duration-300"
                    onClick={() => navigateReviewSlide('next')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className={`h-full ${activeTab === 'partners' ? 'block' : 'hidden'}`}>
                <div className="h-3/4 flex items-center overflow-hidden">
                  <div className="flex animate-scroll" style={{ animation: 'scroll 5s linear infinite' }}>
                    {partners.concat(partners).map((partner, index) => (
                      <div key={index} className="flex-shrink-0 w-48 h-48 mx-4 bg-white bg-opacity-50 rounded-lg p-4 transition-all duration-300 hover:bg-opacity-75 hover:shadow-lg">
                        <Image src={partner.logo} alt={partner.name} width={192} height={192} className="w-full h-full object-contain" />
                      </div>
                    ))}
                  </div>
                  <style jsx>{`
                    @keyframes scroll {
                      0% {
                        transform: translateX(0);
                      }
                      100% {
                        transform: translateX(-50%);
                      }
                    }
                    .animate-scroll {
                      min-width: 100%;
                    }
                  `}</style>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full">
        <button 
          id="slideButton"
          className="w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:from-gray-900 hover:to-black text-white font-bold py-2 px-4 flex items-center justify-center transition duration-300"
          onClick={() => {
            const container = document.getElementById('slideContainer');
            const button = document.getElementById('slideButton');
            const arrowDown = button.querySelector('.arrow-down');
            const arrowUp = button.querySelector('.arrow-up');
            if (container.style.transform === 'translateY(-100%)') {
              container.style.transform = 'translateY(0)';
              button.querySelector('span').textContent = 'Our Happy Clients';
              arrowDown.classList.remove('hidden');
              arrowUp.classList.add('hidden');
              setAniated(false);
            } else {
              container.style.transform = 'translateY(-100%)';
              button.querySelector('span').textContent = 'Return to the top';
              arrowDown.classList.add('hidden');
              arrowUp.classList.remove('hidden');
              setAniated(true);
            }
          }}
        >
          <span>Our Happy Clients</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 arrow-down" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 arrow-up hidden" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ClientContainer;