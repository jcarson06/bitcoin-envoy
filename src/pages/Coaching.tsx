import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoachingIntro from "@/components/sections/coaching/CoachingIntro";
import CoachingPricing from "@/components/sections/coaching/CoachingPricing";
import CoachingTestimonials from "@/components/sections/coaching/CoachingTestimonials";
import SEO from "@/components/SEO";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import CoachingSignUp from "@/components/sections/coaching/CoachingSignUp";

const Coaching = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Free Bitcoin Coaching Sessions",
    "description": "Free 30-minute 1-on-1 Bitcoin coaching sessions with Jeffrey Carson. Get personalized guidance on buying your first Bitcoin, setting up secure storage, and building confidence as a beginner.",
    "provider": {
      "@type": "Person",
      "name": "Jeffrey Carson",
      "jobTitle": "Bitcoin Coach and Educator",
      "url": "https://bitcoinenvoy.co/about",
      "sameAs": [
        "https://x.com/jeffreyscarson",
        "https://www.linkedin.com/in/jscarson/"
      ]
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free 30-minute Bitcoin coaching session"
    },
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceType": "Online Video Call",
      "serviceUrl": "https://calendly.com/jeff-bitcoinenvoy/coaching"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Dara R." },
        "reviewBody": "Bitcoin Envoy helped me get started with a dollar-cost-averaging strategy on River. Jeff, the founder, was super helpful and broke everything down for me in clear digestible terms. He made me comfortable and helped me find an approach that works for my age and stage of life."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Matthew S." },
        "reviewBody": "Jeff has an amazing way of making Bitcoin easy to understand. He's patient, insightful, and super passionate about helping people. If you've ever wanted to learn about Bitcoin without the confusion or hype, Jeff is the perfect guide."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Pete W." },
        "reviewBody": "Honestly, the educational content is so good that I didn't think I'd need coaching. But eventually I signed up for a session anyway because I had a few questions, and the rest is history. Jeff is the absolute best."
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Free Bitcoin Coaching - 1-on-1 Guidance for Beginners"
        description="Book a free 30-minute Bitcoin coaching session with Jeffrey Carson. Get personalized answers to your Bitcoin questions — buying your first Bitcoin, secure storage, and building confidence."
        keywords="bitcoin coaching services, crypto coaching, cryptocurrency guidance, bitcoin investment coaching, digital currency education"
        url="/coaching"
        structuredData={structuredData}
      />
      <ErrorBoundary>
        <Navbar />
        
        <CoachingIntro />
        <CoachingPricing />
        <CoachingTestimonials />
        <CoachingSignUp />

        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default Coaching;