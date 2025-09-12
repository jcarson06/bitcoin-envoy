import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoachingIntro from "@/components/sections/coaching/CoachingIntro";
import CoachingBenefits from "@/components/sections/coaching/CoachingBenefits";
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
      <Navbar />
      
      {/* Individual Error Boundaries for each section */}
      <ErrorBoundary fallback={<div className="py-12 text-center text-muted-foreground">Unable to load intro section</div>}>
        <CoachingIntro />
      </ErrorBoundary>

      <ErrorBoundary fallback={<div className="py-12 text-center text-muted-foreground">Unable to load benefits section</div>}>
        <CoachingBenefits />
      </ErrorBoundary>

      <ErrorBoundary fallback={<div className="py-12 text-center text-muted-foreground">Unable to load signup section</div>}>
        <CoachingSignUp />
      </ErrorBoundary>

      <ErrorBoundary fallback={<div className="py-12 text-center text-muted-foreground">Unable to load testimonials section</div>}>
        <CoachingTestimonials />
      </ErrorBoundary>

      <ErrorBoundary fallback={<div className="py-12 text-center text-muted-foreground">Unable to load about section</div>}>
        <CoachingAbout />
      </ErrorBoundary>

      <Footer />
    </div>
  );
};

export default Coaching;