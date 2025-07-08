import { useState, useEffect } from "react";
import { MessageCircle, ShoppingBag, Briefcase } from "lucide-react";
import Link from "next/link";



export const QuickAccessButtons = ({ visible, heroRef, currentSentence }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // Show buttons only after 5th sentence (index 4)
    setShowButtons(currentSentence >= 4);
  }, [currentSentence]);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const isHeroFullyVisible = heroRect.top <= 0 && heroRect.bottom >= window.innerHeight;
        setIsExpanded(isHeroFullyVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroRef]);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/254704065652', '_blank');
  };

  // const openShop = () => {
  //   console.log('Opening shop...');
  // };

  // if (!visible || !showButtons) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      <button
        onClick={scrollToServices}
        className={`group flex items-center backdrop-blur-md bg-white/20 border border-[#e6471f]/50 text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/30 hover:border-[#e6471f]/70 ${
          isExpanded ? 'px-6 py-3 text-white' : 'p-3'
        }`}
      >
        <Briefcase size={20} />
        {isExpanded && (
          <span className="ml-3 font-medium whitespace-nowrap">Services</span>
        )}
      </button>

      <Link href="/shop">
        <button
          className={`group flex w-full items-center backdrop-blur-md bg-white/20 border border-blue-600/50 text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/30 hover:border-blue-600/70 ${
            isExpanded ? 'px-6 py-3 text-white' : 'p-3'
          }`}
        >
          <ShoppingBag size={20} />
          {isExpanded && (
            <span className="ml-3 font-medium whitespace-nowrap">Shop</span>
          )}
        </button>
      </Link>

      <button
        onClick={openWhatsApp}
        className={`group flex items-center backdrop-blur-md bg-white/20 border border-green-500/50 text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/30 hover:border-green-500/70 ${
          isExpanded ? 'px-6 py-3 text-white' : 'p-3'
        }`}
      >
        <MessageCircle size={20} />
        {isExpanded && (
          <span className="ml-3 font-medium whitespace-nowrap">WhatsApp</span>
        )}
      </button>
    </div>
  );
};