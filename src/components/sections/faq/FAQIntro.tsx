import React from 'react';
import { Section } from '@/components/common/Section';
const FAQIntro = () => {
  return <Section spacing="lg" className="pt-20 bg-gradient-to-br from-pulse-50 to-white">
      <div className="section-container text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Bitcoin FAQ+</h1>
        <p className="section-subtitle max-w-3xl mx-auto">Continue your journey with these helpful extras including common questions & answers, essential rules of the road, a recommended reading list, and more.</p>
      </div>
    </Section>;
};
export default FAQIntro;