import React from 'react';
import { Section } from '@/components/common/Section';

const FAQHero = () => {
  return (
    <Section spacing="lg" background="white" className="pt-20">
      <div className="section-container text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Bitcoin FAQ+
        </h1>
        <p className="section-subtitle max-w-3xl mx-auto">
          Your comprehensive guide to Bitcoin questions, essential rules, must-read resources, 
          and trusted voices in the Bitcoin space.
        </p>
      </div>
    </Section>
  );
};

export default FAQHero;