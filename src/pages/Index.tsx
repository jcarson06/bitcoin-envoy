import React from "react";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import Navbar from "@/components/Navbar";
import IndexIntro from "@/components/sections/index/IndexIntro";
import IndexCTA from "@/components/sections/index/IndexCTA";
import IndexWhyBitcoin from "@/components/sections/index/IndexWhyBitcoin";
import IndexMission from "@/components/sections/index/IndexMission";

import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const Index = () => {
  // Use custom hook for scroll behavior with proper cleanup
  useScrollToSection({ offset: 80, mobileOffset: 100 });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pulse Robot",
    "description": "Expert Bitcoin coaching and education to help you navigate the cryptocurrency landscape with confidence.",
    "url": "https://pulserobotcoaching.com",
    "logo": "https://pulserobotcoaching.com/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "areaServed": "Worldwide",
    "serviceType": "Bitcoin Coaching and Education"
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Bitcoin Coaching & Education - Expert Guidance for Your Crypto Journey"
        description="Get expert Bitcoin coaching and education to navigate the cryptocurrency landscape with confidence. Professional guidance for beginners and advanced investors."
        keywords="bitcoin coaching, cryptocurrency education, bitcoin investment, crypto guidance, bitcoin expert, digital currency training"
        structuredData={structuredData}
      />
      <ErrorBoundary>
        <Navbar />
        <IndexIntro />
        <IndexMission />
        <IndexWhyBitcoin />
        
        <IndexCTA />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default Index;