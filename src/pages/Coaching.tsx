import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoachingIntro from "@/components/sections/coaching/CoachingIntro";
import CoachingBenefits from "@/components/sections/coaching/CoachingBenefits";
import CoachingTestimonials from "@/components/sections/coaching/CoachingTestimonials";
import SEO from "@/components/SEO";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import CoachingSignUp from "@/components/sections/coaching/CoachingSignUp";

const Coaching = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bitcoin Coaching Services",
    "description": "Professional Bitcoin coaching and cryptocurrency education services. Get personalized guidance for your crypto investment journey.",
    "provider": {
      "@type": "Organization",
      "name": "Pulse Robot"
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
        title="Bitcoin Coaching Services - Professional Crypto Guidance"
        description="Get professional Bitcoin coaching services with personalized guidance for your cryptocurrency investment journey. Expert coaching for all levels."
        keywords="bitcoin coaching services, crypto coaching, cryptocurrency guidance, bitcoin investment coaching, digital currency education"
        url="/coaching"
        structuredData={structuredData}
      />
      <Navbar />
      
      <ErrorBoundary>
        {/* CoachingIntro Section */}
        <CoachingIntro />

        {/* CoachingBenefits Section */}
        <CoachingBenefits />

        {/* CoachingSignUp Section */}
        <CoachingSignUp />

        {/* CoachingTestimonials Section */}
        <CoachingTestimonials />
      </ErrorBoundary>

      <Footer />
    </div>
  );
};

export default Coaching;