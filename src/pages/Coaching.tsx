import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoachingIntro from "@/components/sections/coaching/CoachingIntro";
import CoachingBenefits from "@/components/sections/coaching/CoachingBenefits";
import CoachingPricing from "@/components/sections/coaching/CoachingPricing";
import CoachingTestimonials from "@/components/sections/coaching/CoachingTestimonials";
import SEO from "@/components/SEO";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import CoachingSignUp from "@/components/sections/coaching/CoachingSignUp";
import CoachingAbout from "@/components/sections/coaching/CoachingAbout";

const Coaching = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bitcoin Coaching Services",
    "description": "Professional Bitcoin coaching and education services. Get personalized guidance for your bitcoin journey.",
    "provider": {
      "@type": "Organization",
      "name": "Bitcoin Envoy"
    },
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceType": "Online Consultation"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Bitcoin Coaching Services - Professional Guidance"
        description="Get professional coaching services with personalized guidance for your Bitcoin investment journey. Expert coaching for all levels."
        keywords="bitcoin coaching services, crypto coaching, cryptocurrency guidance, bitcoin investment coaching, digital currency education"
        url="/coaching"
        structuredData={structuredData}
      />
      <ErrorBoundary>
        <Navbar />
        
        <CoachingIntro />
        <CoachingBenefits />
        <CoachingPricing />
        <CoachingSignUp />
        <CoachingTestimonials />
        <CoachingAbout />

        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default Coaching;