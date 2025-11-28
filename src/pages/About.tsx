import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoachingAbout from "@/components/sections/coaching/CoachingAbout";
import CoachingSignUp from "@/components/sections/coaching/CoachingSignUp";
import SEO from "@/components/SEO";
import ErrorBoundary from "@/components/common/ErrorBoundary";

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Bitcoin Envoy",
    "description": "Learn about Jeffrey Carson, founder of Bitcoin Envoy and former U.S. Army Captain, dedicated to Bitcoin education and coaching.",
    "author": {
      "@type": "Person",
      "name": "Jeffrey Carson",
      "jobTitle": "Bitcoin Coach and Educator",
      "description": "Former U.S. Army Captain and Iraq War veteran with an MBA and two decades of experience across business, tech, and public policy."
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="About - Jeffrey Carson, Bitcoin Coach & Educator"
        description="Meet Jeffrey Carson, former U.S. Army Captain and founder of Bitcoin Envoy. Learn about his journey from Iraq War veteran to Bitcoin educator and coach."
        keywords="Jeffrey Carson, Bitcoin coach, Bitcoin educator, Bitcoin Envoy founder, Iraq War veteran"
        url="/about"
        structuredData={structuredData}
      />
      <ErrorBoundary>
        <Navbar />
        
        <CoachingAbout />
        <CoachingSignUp />

        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default About;
