import { useState, useEffect, useRef } from "react";
import { Monitor, Palette, Search, Printer, ChevronLeft, ChevronRight } from "lucide-react";
import { SampleCarousel } from "./SampleCarousel";

const services = [
  {
    id: "web-design",
    name: "Web Design",
    icon: Monitor,
    description: "We create visually stunning, mobile-responsive, and SEO-friendly websites that don’t just look good — they convert and leave our clients happy. Our web design services are ideal for businesses looking to establish or upgrade their online presence. Our Web Design Services Include Business websites & portfolios, E-commerce platforms and many more",
    samples: [
      { title: "Corporate Website", url: "https://toptorenconsultancy.co.ke", image: "/corporate.png" },
      { title: "E-commerce Store", url: "https://atkevs.com", image: "/rentastoreweb.png" },
      { title: "Shool Website", url: "https://ruirucollegerccms.ac.ke", image: "/schoolwebsite.png" },
    ]
  },
  {
    id: "graphic-design",
    name: "Graphic Design",  
    icon: Palette,
    description: "We offer high-quality graphic design solutions for both digital and physical media, tailored to help you communicate your message effectively and memorably. We Design Posters, flyers, and brochures, Roll-up banners & teardrop banners, Event backdrops and business signage & Branding materials (logos, business cards, brand guidelines)",
    samples: [
      { title: "Business Flyers", image: "/fl1.jpg" },
      { title: "Roll-up Banners", image: "/bn5.jpg" },
      { title: "Markeing Content", image: "/https://res.cloudinary.com/dddx5qpji/video/upload/v1741767155/WhatsApp_Video_2025-03-12_at_11.05.58_AM_igbydj.mp4" }
    ]
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    icon: Search,
    description: "We help businesses reach more customers and grow online through effective digital marketing strategies tailored to your brand and target audience. ",
    samples: [
      { title: "Social Media Content", image: "https://res.cloudinary.com/dddx5qpji/video/upload/v1741768242/WhatsApp_Video_2025-03-12_at_11.15.48_AM_ip8df4.mp4" },
      { title: "Video Marketing", image: "https://res.cloudinary.com/dddx5qpji/video/upload/v1751888680/WhatsApp_Video_2025-07-03_at_9.31.31_AM_trwyhz.mp4" },
      { title: "SEO Campaign Results", image: "/seo.webp" },
    ]
  },
  {
    id: "printing",
    name: "Printing Services",
    icon: Printer,
    description: "Get end-to-end service from design to print. We print high-quality marketing materials for businesses and events using vibrant, durable finishes. Our Printing Services Cover Flyers, posters, and banners, Roll-up and teardrop banners, Event backdrops, Business cards, brochures, and product labels",
    samples: [
      { title: "Business Cards", image: "/bc5.jpg" },
      { title: "Large Format Prints", image: "/bn3.jpg" },
      { title: "Promotional Materials", image: "/bn1.jpg" }
    ]
  }
];

export const ServicesSection = ({ currentService, setCurrentService }) => {
  const [showMiniNav, setShowMiniNav] = useState(false);
  const [showNavButtons, setShowNavButtons] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  
  const carouselRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const sectionRefs = useRef({});

  // Check if navigation buttons are needed
  useEffect(() => {
    const checkOverflow = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const hasOverflow = container.scrollWidth > container.clientWidth;
        setShowNavButtons(hasOverflow);
        
        // Update scroll button states
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  // Handle scroll events to update navigation button states
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const carouselRect = carouselRef.current.getBoundingClientRect();
        // Show mini nav only when carousel is completely out of view (scrolled past it)
        const isCarouselOutOfView = carouselRect.bottom < 0;
        setShowMiniNav(isCarouselOutOfView);
      }

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const service of services) {
        const element = sectionRefs.current[service.id];
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setCurrentService(service.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setCurrentService]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  const scrollToService = (serviceId) => {
    const element = sectionRefs.current[serviceId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div id="services" className="bg-white">
      {/* Services Carousel - Responsive with Navigation */}
      <div ref={carouselRef} className="relative rounded-3xl shadow-md mx-3 px-3 mt-8 z-40 backdrop-blur-md bg-white/80 border-b border-gray-200/30">
        {/* Navigation Buttons */}
        {showNavButtons && (
          <>
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`absolute text-black left-2 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full transition-all duration-300 shadow-lg ${
                canScrollLeft 
                  ? 'bg-white/95 text-gray-700 hover:bg-white hover:shadow-xl' 
                  : 'bg-gray-100/50 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="" size={20} />
            </button>
            
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`absolute right-2 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full transition-all duration-300 shadow-lg ${
                canScrollRight 
                  ? 'bg-white/95 text-gray-700 hover:bg-white hover:shadow-xl' 
                  : 'bg-gray-100/50 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="text-black" size={20} />
            </button>
          </>
        )}
        
        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className={`overflow-x-auto scrollbar-hide py-4 relative z-10 ${
            showNavButtons ? 'px-12' : 'px-6'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className={`flex gap-4 ${showNavButtons ? 'justify-start' : 'justify-center'} ${showNavButtons ? '' : 'w-full'}`}>
            {services.map((service) => {
              const IconComponent = service.icon;
              const isActive = currentService === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => scrollToService(service.id)}
                  className={`relative flex items-center min-w-fit gap-3 px-6 py-4 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden ${
                    showNavButtons ? ' ' : ' m-auto'
                  } ${
                    isActive ? 'text-[#e6471f] button-active' : 'text-gray-600'
                  }`}
                >
                  <span className="relative z-10 flex items-center whitespace-nowrap gap-3">
                    <IconComponent size={24} />
                    {service.name}
                  </span>

                  {/* SVG Glowing Border */}
                  <svg className="buttonn-svg-border" viewBox="0 0 180 50" preserveAspectRatio="none">
                    <rect x="0" y="0" width="180" height="50" rx="12" ry="12" />
                  </svg>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mini Navigation - Only shows when carousel scrolled past */}
      {showMiniNav && (
        <div className="fixed bottom-[200px] right-6 z-50 animate-fade-in">
          <div className="flex flex-col space-y-2">
            {services.map((service) => {
              const IconComponent = service.icon;
              const isActive = currentService === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => scrollToService(service.id)}
                  className={`relative p-3 transition-all duration-300 backdrop-blur-md bg-white/20 rounded-full border border-gray-300/30 ${
                    isActive
                      ? 'text-[#e6471f] button-active'
                      : 'text-gray-600'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <IconComponent size={24} />
                  </span>

                  {/* SVG Glowing Border */}
                  <svg className="button-svg-border" viewBox="0 0 50 50" preserveAspectRatio="none">
                    <rect x="0" y="0" width="50" height="50" rx="64" ry="64" />
                  </svg>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="pt-16 px-6 font-semibold text-sm cute">
        <p className="text-center text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed">Welcome to Hurricane Teck & Marketing Solutions — your trusted partner for creative design, digital marketing, and print solutions. Based on a deep understanding of modern branding, we provide tailor-made services that help businesses stand out, grow their presence, and attract more customers.</p>
        <p className="text-center text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed">We bring together cutting-edge web development, eye-catching graphic design, strategic digital campaigns, and premium printing services under one roof. Whether you're a startup, small business, or established brand, we’re here to turn your ideas into powerful visual and digital experiences.</p>
        <p className="text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">At Hurricane Teck & Marketing Solutions, expect a comprehensive journey from idea to implementation. We take time to understand your needs and deliver results-driven solutions that reflect your brand's vision and purpose.</p>
      </div>

      {/* Service Sections */}
      {services.map((service) => (
        <div
          key={service.id}
          ref={(el) => (sectionRefs.current[service.id] = el)}
          className="min-h-screen flex items-center pt-16"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center flex gap-4 justify-center items-center mb-8">
                <div className="flex justify-center ">
                  <div className="backdrop-blur-md bg-white/30 border border-[#e6471f] text-[#e6471f] p-4 rounded-full">
                    <service.icon size={32} />
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 ">
                  {service.name}
                </h2>
              </div>

              <SampleCarousel 
                samples={service.samples} 
                serviceType={service.id}
              />
              
              <div className="text-center mt-8">
                <button className="backdrop-blur-md bg-white/30 border border-[#e6471f] text-[#e6471f] px-8 py-2 rounded-full text-base font-semibold hover:bg-white/50 hover:border-[#e6471f]/70 transition-all duration-300 shadow-lg hover:shadow-xl">
                  View More {service.name} Work
                </button>
              </div>
              <p className="text-xl mt-16 text-gray-600 max-w-3xl mb-16 mx-auto leading-relaxed">
                {service.description}
              </p>
              {service.id === "digital-marketing" &&
                <div className="pt-6 text-gray-800 flex flex-col justify-center items-center">
                  <h3 className="text-2xl font-bold">Our Digital Marketing Services:</h3>
                  <h4 className="text-xl py-3 font-semibold">Platform-Based Campaigns:</h4>
                  <ul className="list-disc px-4">
                    <li>Facebook, Instagram, and YouTube ad campaigns</li>
                    <li>Video design and ad asset creation</li>
                    <li>Custom content calendars & campaign planning</li>
                    <li>Performance tracking and reports</li>
                  </ul>
                  <h4 className="text-2xl font-bold pt-6 pb-2">SEO (Search Engine Optimization):</h4>
                  <ul className="list-disc px-4">
                    <li>On-page SEO optimization</li>
                    <li>Keyword research and content recommendations</li>
                    <li>Google ranking improvement strategies</li>
                    <li>Blog/article creation and optimization</li>
                  </ul>
                  <h4 className="text-2xl font-bold pt-6 pb-2">Why Digital Marketing With Us Works:</h4>
                  <ul className="list-disc px-4">
                    <li>We combine visual storytelling with data-driven targeting</li>
                    <li>Fully managed campaigns — we handle everything from <br/> design  to reporting</li>
                    <li>Custom campaign assets like short videos and animations</li>
                    <li>Designed to increase visibility, engagement, and ROI</li>
                  </ul>
                </div>
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};