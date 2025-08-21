import React, { useEffect } from "react";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import CTA from "@/components/CTA";
import WhyBitcoin from "@/components/WhyBitcoin";
import WhyUs from "@/components/WhyUs";
import Mission from "@/components/Mission";
import ImageShowcase from "@/components/ImageShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <ErrorBoundary>
        <Navbar />
        <Intro />
        <Mission />
        <WhyBitcoin />
        <WhyUs />
        <ImageShowcase />
        <CTA />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default Index;