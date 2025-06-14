'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Award, Zap, Users, Building, Heart, Briefcase, Star, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const ToptorenBrandedWaterPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);

  const heroImages = [
    {
      src: "/toptoren/4.jpeg",
      alt: "Premium branded water bottles for corporate events"
    },
    {
      src: "/toptoren/19.jpeg",
      alt: "Premium branded water bottles for corporate events"
    },
    {
      src: "/toptoren/17.jpeg",
      alt: "Custom labeled water bottles for weddings"
    },
    {
      src: "/toptoren/23.jpeg",
      alt: "Elegant water bottle branding for hospitality"
    }
  ];
  // Hero background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Disable right-click and developer tools
  useEffect(() => {
    const handleRightClick = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.shiftKey && e.key === 'C') ||
          (e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
      }
    };
    const handleSelectStart = (e) => e.preventDefault();

    document.addEventListener('contextmenu', handleRightClick);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);

    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, []);

  // Sample branded water images (you'll replace these with your actual images)
  const brandedWaterImages = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    src: `/toptoren/${i + 1}.jpeg`,
    alt: `Branded bottled water sample ${i + 1}`,
    title: `Custom Brand ${i + 1}`,
    description: 'Premium branded water bottle with custom label design'
  }));

  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Corporate Branding",
      description: "Impress clients and boost brand recall at conferences, seminars, and business meetings",
      features: ["Custom logo design", "Professional labeling", "Bulk orders available", "Fast turnaround"],
      image: "/toptoren/4.jpeg"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Weddings & Events",
      description: "Add personalized elegance to your special occasions with custom-labeled water bottles",
      features: ["Elegant designs", "Personalized labels", "Wedding favors", "Anniversary gifts"],
      image: "/toptoren/24.jpeg"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Clubs, Hotels & Hospitality",
      description: "Enhance guest experience with premium branded water bottles",
      features: ["Room amenities", "Conference supplies", "Event catering", "Brand reinforcement"],
      image: "/toptoren/30.jpeg"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Business Services",
      description: "Comprehensive business compliance and advisory services",
      features: ["KRA Returns Filing", "Business Licensing", "Tax Advisory", "EGMS Management"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    }
  ];

  const businessServices = [
    "KRA Returns Filing",
    "Water Business Licensing",
    "EGMS Management",
    "Water Security Bond",
    "SKU & Barcode Registration",
    "Brand Registration",
    "Tax Planning",
    "Excise License Application"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % brandedWaterImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + brandedWaterImages.length) % brandedWaterImages.length);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12  rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  <img
                    src={'/Toptoren.png'}
                    alt={'Toptoren'}
                    className="w-full h-full object-cover"
                    style={{ userSelect: 'none' }}
                  />
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">TOPTOREN</h1>
                <p className="text-sm text-gray-600">CONSULTANCY</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-700 hover:text-cyan-600 transition-colors">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-cyan-600 transition-colors">Gallery</a>
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">Contact Us</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === heroSlideIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                onDragStart={(e) => e.preventDefault()}
                style={{ userSelect: 'none' }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          ))}
        </div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 to-blue-900/30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
              style={{ 
                background: 'linear-gradient(45deg, #22d3ee, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Premium Branded Bottled Water
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed opacity-90">
              Elevate your brand with Kenya's leading custom branded bottled water solutions. 
              Make every sip count with professional labeling and premium quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
                onClick={() => scrollToSection('contact')}
              >
                Get Custom Quote
              </button>
              <button 
                className="border-2 border-cyan-500 text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-50 transition-all"
                onClick={() => scrollToSection('gallery')}
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom branded water bottles to comprehensive business solutions, 
              we're your one-stop partner for success in Kenya.
            </p><br/>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every bottle tells a story. What story do you want yours to tell? 
              Here's how we've helped businesses across Kenya make lasting impressions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative rounded-t-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={service.image}
                      alt={`${service.title} service visualization`}
                      className="w-full h-56 object-cover"
                      onDragStart={(e) => e.preventDefault()}
                      style={{ userSelect: 'none' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-b-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="text-cyan-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Work Gallery</h2>
            <p className="text-xl text-gray-600">See the quality and creativity in our branded water bottle designs</p>
          </div>
          
          {/* Main Image Display */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src={brandedWaterImages[currentImageIndex].src}
                alt={brandedWaterImages[currentImageIndex].alt}
                className="w-full h-96 object-cover"
                onDragStart={(e) => e.preventDefault()}
                style={{ userSelect: 'none', pointerEvents: 'none' }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-between p-4">
                <button 
                  onClick={prevImage}
                  className="bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextImage}
                  className="bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">Our Customers</h3>
                <p className="text-white/90">{brandedWaterImages[currentImageIndex].description}</p>
              </div>
            </div>
          </div>

          {/* Thumbnail Carousel */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4 overflow-x-auto pb-4 max-w-full">
              {brandedWaterImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index ? 'border-cyan-500 scale-110' : 'border-gray-300'
                  }`}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    onDragStart={(e) => e.preventDefault()}
                    style={{ userSelect: 'none', pointerEvents: 'none' }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Comprehensive Business Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond branded water, we offer complete business compliance and advisory services 
              to help your business thrive in Kenya's regulatory environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessServices.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-cyan-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{service}</h3>
                <p className="text-sm text-gray-600">Professional assistance with all regulatory requirements</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Toptoren Consultancy?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We combine premium quality with exceptional service to deliver results that exceed expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Quality</h3>
              <p className="opacity-90">High-quality bottled water with vibrant, durable custom labels that capture your brand's essence perfectly.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fast Delivery</h3>
              <p className="opacity-90">Seamless process from design consultation to timely delivery, ensuring your branded water makes the desired impact.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Service</h3>
              <p className="opacity-90">Comprehensive business solutions from branding to regulatory compliance - your trusted partner for success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Get Started Today</h2>
            <p className="text-xl text-gray-600">Ready to elevate your brand with custom bottled water? Contact us for a free consultation.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-cyan-600 mr-4" />
                    <span className="text-gray-700">+254 XXX XXX XXX</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-cyan-600 mr-4" />
                    <span className="text-gray-700">info@toptorenConsultancy.co.ke</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-cyan-600 mr-4" />
                    <span className="text-gray-700">Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Quick Quote</h3>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-4 rounded-lg border border-gray-300 focus:border-cyan-500 focus:outline-none"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-4 rounded-lg border border-gray-300 focus:border-cyan-500 focus:outline-none"
                  />
                  <textarea 
                    placeholder="Tell us about your project..." 
                    rows="4"
                    className="w-full p-4 rounded-lg border border-gray-300 focus:border-cyan-500 focus:outline-none"
                  ></textarea>
                  <button 
                    onClick={() => alert('Thank you for your interest! We will contact you soon.')}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Get Free Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  <img
                    src={'/Toptoren.png'}
                    alt={'Toptoren'}
                    className="w-full h-full object-cover"
                    style={{ userSelect: 'none' }}
                  />
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">TOPTOREN CONSULTANCY</h3>
                <p className="text-gray-400">Your Premier Branded Water Partner</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Elevating brands through premium custom bottled water solutions and comprehensive business services across Kenya.
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Toptoren Consultancy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ToptorenBrandedWaterPage;