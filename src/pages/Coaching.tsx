import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignUp from "@/components/SignUp";
import IntroCoaching from "@/components/IntroCoaching";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";
import { Section } from "@/components/common/Section";
import ErrorBoundary from "@/components/common/ErrorBoundary";

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
        {/* IntroCoaching Section */}
        <IntroCoaching />

        {/* Benefits Section */}
        <Benefits />

        {/* Coaching SignUp and Contact Form */}
        <Section spacing="lg" background="gray">
          <SignUp />
        </Section>

        {/* Testimonials Section */}
        <Testimonials />
      </ErrorBoundary>

      <Footer />
    </div>
  );
};

export default Coaching;