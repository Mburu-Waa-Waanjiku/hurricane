import { useState, useEffect, forwardRef, useRef } from "react";

const messages = [
  <>Welcome to <span className="text-[#e6471f]">Hurricane Teck </span> & <br/> Marketing Solutions</>,
  <>We Offer <span className="text-[#e6471f]">Professional</span> Web <br/> Design <span className="text-[#e6471f]">Services</span></>,
  <>Graphic Design Services for <br/> Your <span className="text-[#e6471f]">Branding</span> and <br/> <span className="text-[#e6471f]">Marketing</span> Needs</>,
  <>Digital Marketing for Your <br/> <span className="text-[#e6471f]">Website (SEO)</span> and Platform-based <br/> <span className="text-[#e6471f]">Online</span> Campaigns</>,
  <>Printing <span className="text-[#e6471f]">Services</span> for All <br/> Your <span className="text-[#e6471f]">Merchandising</span> and <br/> Product Needs</>,
  <><span className="text-[#e6471f]">Get in Touch</span> With Us <br/> for a <span className="text-[#e6471f]">Free Design</span> <br/> Sample</>
];

const animations = [
  "animate-[fadeInUp_0.8s_ease-out]",
  "animate-[fadeInLeft_0.8s_ease-out]",
  "animate-[fadeInUp_0.8s_ease-out]",
  "animate-[fadeInLeft_0.8s_ease-out]",
  "animate-[fadeInUp_0.8s_ease-out]",
  "animate-[fadeInLeft_0.8s_ease-out]"
];

export const HeroSection = forwardRef(({ onComplete, onSentenceChange }, ref) => {
    const [currentMessage, setCurrentMessage] = useState(0);
    const [showMessage, setShowMessage] = useState(false);
    const [scrollEnabled, setScrollEnabled] = useState(false);
    const [visibleImages, setVisibleImages] = useState([]);
    const intervalRef = useRef();
    const previousMessageRef = useRef(-1); // Track previous message to avoid unnecessary calls

    // Handle sentence changes and image visibility together to maintain synchronization
    useEffect(() => {
      // Only call onSentenceChange if the message actually changed
      if (currentMessage !== previousMessageRef.current) {
        previousMessageRef.current = currentMessage;
        
        // Use setTimeout to defer the state update to the next tick
        setTimeout(() => {
          onSentenceChange(currentMessage);
        }, 0);
      }
      
    }, [currentMessage, onSentenceChange]);

    // Initialize the component and start the interval
    useEffect(() => {
      setShowMessage(true);
      
      intervalRef.current = setInterval(() => {
        setCurrentMessage(prev => {
          if (prev < messages.length - 1) {
            return prev + 1;
          } else {
            setScrollEnabled(true);
            // Use setTimeout to defer onComplete call
            setTimeout(() => {
              onComplete();
            }, 0);
            return prev;
          }
        });
      }, 4000); // Changed to 4 seconds

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, [onComplete]);

    // Handle scroll and keyboard events
    useEffect(() => {
      const handleWheel = (e) => {
        if (!scrollEnabled) {
          e.preventDefault();
          
          if (e.deltaY > 0 && currentMessage < messages.length - 1) {
            setCurrentMessage(prev => prev + 1);
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
          } else if (e.deltaY < 0 && currentMessage > 0) {
            setCurrentMessage(prev => prev - 1);
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
          }
          
          if (currentMessage === messages.length - 1) {
            setScrollEnabled(true);
            setTimeout(() => {
              onComplete();
            }, 0);
          }
        }
      };

      const handleKeyDown = (e) => {
        if (!scrollEnabled) {
          e.preventDefault();
          
          if ((e.key === 'ArrowDown' || e.key === 'PageDown') && currentMessage < messages.length - 1) {
            setCurrentMessage(prev => prev + 1);
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
          } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentMessage > 0) {
            setCurrentMessage(prev => prev - 1);
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
          }
          
          if (currentMessage === messages.length - 1) {
            setScrollEnabled(true);
            setTimeout(() => {
              onComplete();
            }, 0);
          }
        }
      };

      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('keydown', handleKeyDown, { passive: false });
      
      return () => {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [currentMessage, scrollEnabled, onComplete]);

    return (
      <div 
        ref={ref}
        className="h-screen w-full cute flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/hurricane-teck-background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className=" px-6 w-full h-full mx-auto mt-12 sm:!ml-12  p-8 relative z-10">
          <div
            key={currentMessage}
            className={`text-4xl md:text-6xl font-bold text-white leading-[4rem] sm:!leading-[6rem] ${animations[currentMessage]}`}
          >
            {messages[currentMessage]}
          </div>
        </div>
        
        <div className="absolute hidden sm:flex bottom-8 left-1/2 transform -translate-x-1/2 space-x-2 z-10">
          {currentMessage === messages.length - 1 && (
            <div className="mt-8 animate-fade-in">
              <button className="backdrop-blur-md bg-white/30 border border-[#e6471f] text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-white/50 hover:border-[#e6471f]/70 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started Today
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
);

HeroSection.displayName = "HeroSection";