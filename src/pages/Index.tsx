import React from "react";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import Navbar from "@/components/Navbar";
import IndexIntro from "@/components/sections/index/IndexIntro";
import IndexCTA from "@/components/sections/index/IndexCTA";
import IndexWhyBitcoin from "@/components/sections/index/IndexWhyBitcoin";
import IndexMission from "@/components/sections/index/IndexMission";
import IndexDollarHistory from "@/components/sections/index/IndexDollarHistory";
import IndexBitcoinHistory from "@/components/sections/index/IndexBitcoinHistory";

import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const Index = () => {
  // Use custom hook for scroll behavior with proper cleanup
  useScrollToSection({ offset: 80, mobileOffset: 100 });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bitcoin Envoy",
    "description": "Bitcoin education & coaching designed for beginners to help guide your Bitcoin journey.",
    "url": "https://bitcoinenvoy.co",
    "logo": "https://bitcoinenvoy.co/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "areaServed": "Worldwide",
    "serviceType": "Bitcoin Education & Coaching"
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Bitcoin Education & Coaching - A Trusted Guide for Your Bitcoin Journey"
        description="Bitcoin education designed for beginners to help you understand the basics. Trusted and experienced coaches to help guide your journey."
        keywords="bitcoin coaching, bitcoin for beginners, bitcoin basics, bitcoin education, bitcoin investing, bitcoin guidance, bitcoin expert, bitcoin help, digital currency, digital assets"
        structuredData={structuredData}
      />
      <ErrorBoundary>
        <Navbar />
        <IndexIntro />
        <IndexMission />
        <IndexWhyBitcoin />
        <IndexDollarHistory />
        <IndexBitcoinHistory />
        <IndexCTA />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default Index;