import React from "react";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import CTA from "@/components/CTA";
import WhyBitcoin from "@/components/WhyBitcoin";
import Mission from "@/components/Mission";
import ImageShowcase from "@/components/ImageShowcase";
import Footer from "@/components/Footer";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const Index = () => {
  console.log('Index component rendering - URL:', window.location.pathname);
  
  // Use custom hook for scroll behavior with proper cleanup
  useScrollToSection({ offset: 80, mobileOffset: 100 });

  return (
    <div className="min-h-screen">
      <ErrorBoundary>
        <Navbar />
        <Intro />
        <Mission />
        <WhyBitcoin />
        <ImageShowcase />
        <CTA />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default Index;