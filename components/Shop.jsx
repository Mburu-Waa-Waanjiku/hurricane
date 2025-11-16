'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import ContactHurricane from './ContactHurricane';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import Script from 'next/script';

export default function ShopPage() {
  const pathname = usePathname();
  const hasTrackedPageView = useRef(false);
  const sessionStartTime = useRef(Date.now());
  const scrollDepthTracked = useRef({
    25: false,
    50: false,
    75: false,
    100: false
  });

  // Track shop page view on mount
  useEffect(() => {
    if (!hasTrackedPageView.current) {
      trackShopPageView();
      hasTrackedPageView.current = true;
    }
  }, []);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      [25, 50, 75, 100].forEach(milestone => {
        if (scrollPercentage >= milestone && !scrollDepthTracked.current[milestone]) {
          scrollDepthTracked.current[milestone] = true;
          
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'scroll_depth', {
              event_category: 'Shop Engagement',
              event_label: `${milestone}% Scrolled`,
              value: milestone,
              page_path: pathname
            });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Track time spent when user leaves
  useEffect(() => {
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - sessionStartTime.current) / 1000);
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'shop_time_spent', {
          event_category: 'Shop Engagement',
          event_label: 'Time on Shop Page',
          value: timeSpent,
          page_path: pathname
        });
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [pathname]);

  const trackShopPageView = () => {
    // GA4 - Track shop page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Shop',
        page_path: pathname,
        page_location: window.location.href
      });

      // Track view_item_list for all products
      window.gtag('event', 'view_item_list', {
        item_list_id: 'shop_page',
        item_list_name: 'Shop - All Products',
        items: products.map((product, index) => ({
          item_id: product.id || product.name,
          item_name: product.name,
          item_category: product.category || 'Uncategorized',
          price: product.discounts?.seasonal?.percentage > 0
            ? product.priceBase * (1 - product.discounts.seasonal.percentage / 100)
            : product.priceBase,
          index: index,
          quantity: 1
        }))
      });

      // Track total shop metrics
      const totalValue = products.reduce((sum, product) => {
        const price = product.discounts?.seasonal?.percentage > 0
          ? product.priceBase * (1 - product.discounts.seasonal.percentage / 100)
          : product.priceBase;
        return sum + price;
      }, 0);

      window.gtag('event', 'shop_page_view', {
        event_category: 'Shop',
        event_label: 'Shop Page Visited',
        total_products: products.length,
        total_inventory_value: totalValue,
        currency: 'KES'
      });
    }

    // Meta Pixel - Track shop page view
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
      
      window.fbq('track', 'ViewContent', {
        content_type: 'product_group',
        content_ids: products.map(p => p.id || p.name),
        contents: products.map(product => ({
          id: product.id || product.name,
          quantity: 1,
          item_price: product.discounts?.seasonal?.percentage > 0
            ? product.priceBase * (1 - product.discounts.seasonal.percentage / 100)
            : product.priceBase
        })),
        currency: 'KES'
      });
    }
  };

  return (
    <div className="relative">
      <div className='px-4 py-3 flex justify-between items-center'>
        <div className='leading-8 flex gap-2'>
          <ShoppingBag className='mt-2'/>
          <span className='text-3xl  font-bold'>Shop</span>
        </div>
        <div className='flex relative hidden lg:block overflow-hidden h-9 w-9'>
          <Image 
            alt='Hurricane'
            fill
            className='rounded-lg'
            src="/h.png"
          />
        </div>
        <div></div>
        <ContactHurricane/>
      </div>
      
      <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id || product.name} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}