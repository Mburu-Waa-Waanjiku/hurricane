'use client'; // Need this for useState and useEffect

import { useState, useEffect } from 'react'; // Import hooks
import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard';
import { ThemeToggle } from '../../components/ThemeToggle';
import Header from '../../components/Header'; // Import Header

// export const metadata = { // Cannot export metadata from client component
//   title: 'Shop - Marketing & Branding Services | Hurricane Teck',
//   description: 'Browse our marketing and branding products including banners, business cards, flyers, packaging, and merchandising.',
// };

export default function ShopPage() {
  const [headerState, setHeaderState] = useState('initial');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust threshold as needed
        setHeaderState('scrolled'); 
      } else {
        setHeaderState('initial');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call handler once on mount to set initial state
    handleScroll(); 

    // Cleanup listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Pass headerState to Header - Header needs modification to accept this */}
      <Header scrollState={headerState} /> 
      
      {/* Theme toggle - reused from home page logic */}
      {/* <div className="fixed top-4 right-4 z-[70]">
        <ThemeToggle />
      </div> */}
      
      <div className="container mx-auto px-4 pt-28 pb-16"> {/* Added pt-28 for space below fixed header */}        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-x-6 lg:gap-y-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
