'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { FaShoppingCart, FaHeart, FaShareAlt, FaSpinner, FaWhatsapp } from 'react-icons/fa';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// Helper function to format currency (replace with your preferred method if needed)
const formatCurrency = (amount) => {
  return `KSH ${amount.toLocaleString('en-KE')}`;
};

export default function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false); // Basic state, logic needed
  const [isInCart, setIsInCart] = useState(false);   // Basic state, logic needed
  const [isAddingToCart, setIsAddingToCart] = useState(false); // For loading state
  const [showFavToast, setShowFavToast] = useState(false);
  const [favToastMessage, setFavToastMessage] = useState('');
  const [showCartToast, setShowCartToast] = useState(false);
  const [cartToastMessage, setCartToastMessage] = useState('');
  const sliderRef = useRef(null); // Ref for slider
  const [dragPosition, setDragPosition] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const images = product.images && product.images.length > 0 ? product.images : ['/placeholder.jpg'];

  const hasDiscount = product.discounts?.seasonal?.percentage > 0;
  const discountedPrice = hasDiscount
    ? product.priceBase * (1 - product.discounts.seasonal.percentage / 100)
    : product.priceBase;

  // Image cycling - REMOVED automatic transition
  /*
  useEffect(() => {
    if (images.length > 1 && !isHovering) {
      const intervalId = setInterval(() => {
        nextImage();
      }, 3000);
      return () => clearInterval(intervalId);
    }
  }, [images, isHovering]);
  */

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setIsLoading(true); // Show loading state briefly on change
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsLoading(true); // Show loading state briefly on change
  };

  // --- Placeholder Handlers --- 
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = !isFavorite;
    setIsFavorite(newState);
    setFavToastMessage(newState ? 'Added to favorites' : 'Removed from favorites');
    setShowFavToast(true);
    setTimeout(() => setShowFavToast(false), 2000);
    // TODO: Implement actual favorite logic (e.g., update context, API call)
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAddingToCart) return;

    setIsAddingToCart(true);
    // Simulate API call/logic
    setTimeout(() => {
      const newState = !isInCart;
      setIsInCart(newState);
      setCartToastMessage(newState ? 'Added to cart' : 'Removed from cart');
      setShowCartToast(true);
      setIsAddingToCart(false);
      setTimeout(() => setShowCartToast(false), 2000);
      // TODO: Implement actual cart logic (e.g., update context, API call)
    }, 500); 
  };

  const handleShare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert('Share functionality to be implemented.');
    // TODO: Implement actual share logic
  };

  // --- Touch Handlers for Swipe --- 
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
    setDragPosition(0); // Reset drag position on new touch
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.targetTouches[0].clientX);
    const diff = touchStart - e.targetTouches[0].clientX;
    // Allow some drag visualization, limit if needed
    setDragPosition(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const minSwipeDistance = 50; // Minimum distance for a swipe

    if (Math.abs(touchStart - touchEnd) > minSwipeDistance) {
      if (touchStart - touchEnd > 0) { // Swiped left
        nextImage();
      } else { // Swiped right
        prevImage();
      }
    }
    // Reset visual drag offset after swipe action or if swipe is too short
    setDragPosition(0);
  };
  // --- End Touch Handlers ---

  // Placeholder for quote button action
  const handleGetQuote = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Construct WhatsApp message link (basic example)
    const phoneNumber = "254704065652"; // Replace with your actual WhatsApp number
    const message = encodeURIComponent(`Hi, I'm interested in getting a quote for ${product.name}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    // alert(`Get a quote for: ${product.name}`);
    // TODO: Implement more robust quote logic if needed
  };

  return (
    <div className="relative bg-white px-2 pt-2 pb-4 rounded-3xl group flex flex-col h-full">
      {/* Product Image Slider */}
      <div 
            className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Loading Animation */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"
                />
              )}
            </AnimatePresence>

            <div 
              className="flex transition-transform duration-300 ease-out h-full"
              style={{ 
                transform: `translateX(${-100 * currentImageIndex}%) translateX(${-dragPosition}px)`,
              }}
            >
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  className="min-w-full h-full relative flex-shrink-0"
                >
                  <Image
                    src={image}
                    alt={`${product.name} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    onLoadingComplete={() => setIsLoading(false)}
                  />
                </div>
              ))}
            </div>
            
            {/* Navigation controls - Now only visible on hover */}
            {product.images.length > 1 && (
              <>
                <AnimatePresence>
                  {isHovering && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full text-white hover:bg-black/70 transition-colors z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </motion.button>
                  )}
                </AnimatePresence>
                
                <AnimatePresence>
                  {isHovering && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full text-white hover:bg-black/70 transition-colors z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </>
            )}

            {/* Image Indicators */}
            {product.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
            {hasDiscount && (
              <div className="absolute top-3 left-2 bg-red-600 text-white px-2 py-1 rounded-md text-sm font-bold">
                {product.discounts.seasonal.percentage}% OFF
              </div>
            )}
          </div>

      {/* Product Info */} 
      <div className="mt-3 flex-grow flex flex-col"> {/* Increased margin-top */} 
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 group-hover:text-primary transition-colors mb-1"> {/* Increased font size and margin-bottom */} 
          {product.name}
        </h3>
        <div className="flex items-baseline gap-1.5 flex-wrap mb-2"> {/* Added margin-bottom */} 
          <p className={`text-base font-semibold ${hasDiscount ? 'text-red-600 dark:text-red-500' : 'text-gray-900 dark:text-white'}`}>
            {formatCurrency(discountedPrice)}
          </p>
          {hasDiscount && (
            <p className="text-xs text-gray-500 dark:text-gray-400 line-through">
              {formatCurrency(product.priceBase)}
            </p>
          )}
        </div>
         {product.inventory?.stock === 0 && (
          <p className="text-xs text-red-500 mb-2">Out of Stock</p> // Added margin-bottom
         )} 

        {/* Get Quote Button */} 
        <div className="mt-auto pt-2"> {/* Push button to bottom */} 
          <button 
            onClick={handleGetQuote}
            disabled={product.inventory?.stock === 0} // Optionally disable if out of stock
            className="w-full text-green-600 text-sm font-medium py-2 px-4 rounded-full shadow-sm border-[1px] border-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2" // Added flex, items-center, justify-center, gap-2
          >
            <FaWhatsapp className="w-4 h-4 " /> {/* Added WhatsApp Icon */} 
            Order via WhatsApp
          </button>
        </div>
      </div>

      {/* Add keyframes directly if not in global CSS or Tailwind config */} 
      <style jsx global>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.5; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
} 