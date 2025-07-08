'use client'

import { useState, useEffect, useRef } from "react";
import { HeroSection } from "./HeroSection";
import { QuickAccessButtons } from "./QuickAccessButtons";
import { ServicesSection } from "./ServicesSection";
import { Footer } from "./Footer";

const Index = () => {
  const [heroComplete, setHeroComplete] = useState(false);
  const [currentService, setCurrentService] = useState("web-design");
  const [currentSentence, setCurrentSentence] = useState(0);
  const heroRef = useRef(null); 

  return (
    <div className="min-h-screen bg-white">
      <HeroSection 
        ref={heroRef}
        onComplete={() => setHeroComplete(true)}
        onSentenceChange={setCurrentSentence}
      />
      
      <QuickAccessButtons 
        visible={heroComplete}
        heroRef={heroRef}
        currentSentence={currentSentence}
      />
      
      <ServicesSection 
        currentService={currentService}
        setCurrentService={setCurrentService}
      />
      
      <Footer />
    </div>
  );
};

export default Index;