import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SignUp from "@/components/SignUp";
import IntroCoaching from "@/components/IntroCoaching";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import { Section } from "@/components/common/Section";
import ErrorBoundary from "@/components/common/ErrorBoundary";

const Coaching = () => {
  console.log('Coaching component rendering - URL:', window.location.pathname);
  
  return (
    <div className="min-h-screen">
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