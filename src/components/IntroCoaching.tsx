import React from "react";
import { Section } from "@/components/common/Section";
const IntroCoaching = () => {
  return <Section spacing="lg" className="pt-20 bg-gradient-to-br from-pulse-50 to-white">
      <div className="section-container text-center">
        <div className="pulse-chip mx-auto mb-6">
          <span>Personal Coaching</span>
        </div>
        <h1 className="section-title mb-6">
          One-on-One Bitcoin Coaching
        </h1>
        <p className="section-subtitle mx-auto mb-8 max-w-2xl">Still have questions? Get answers plus personalized guidance from experienced bitcoin educators who want to help you.</p>
      </div>
    </Section>;
};
export default IntroCoaching;