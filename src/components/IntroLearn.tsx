import React from "react";
import { Section } from "@/components/common/Section";

const IntroLearn = () => {
  return (
    <Section spacing="lg" className="pt-20 bg-gradient-to-br from-pulse-50 to-white">
      <div className="section-container text-center">
        <h1 className="section-title mb-6">
          Master Bitcoin Fundamentals
        </h1>
        <p className="section-subtitle mx-auto mb-8 max-w-2xl">
          Comprehensive bitcoin education designed for beginners. Learn at your own pace with 
          expert guidance and practical exercises that build real understanding.
        </p>
      </div>
    </Section>
  );
};

export default IntroLearn;