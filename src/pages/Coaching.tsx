import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Details from "@/components/Details";
import HowItWorks from "@/components/HowItWorks";
import IntroCoaching from "@/components/IntroCoaching";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import { Section } from "@/components/common/Section";
import ErrorBoundary from "@/components/common/ErrorBoundary";

const Coaching = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <ErrorBoundary>
        {/* IntroCoaching Section */}
        <IntroCoaching />

        {/* Benefits Section */}
        <Benefits />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Coaching Details and Contact Form */}
        <Section spacing="lg" background="gray">
          <Details />
        </Section>

        {/* Testimonials Section */}
        <Testimonials />
      </ErrorBoundary>

      <Footer />
    </div>
  );
};

export default Coaching;