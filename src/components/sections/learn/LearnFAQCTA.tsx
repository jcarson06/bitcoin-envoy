import React from 'react';
import { Section } from '@/components/common/Section';
import { Link } from 'react-router-dom';
const LearnFAQCTA = () => {
  return <Section id="faq-cta" spacing="lg" background="gray">
      <div className="section-container text-center">
        <h2 className="section-title mb-4">Have questions?</h2>
        <p className="section-subtitle mb-8 max-w-2xl mx-auto">Check out our FAQ+ page for a wealth of free resources including frequently asked questions, rules of the road, reading list, and more.</p>
        <Link to="/faq" className="button-primary">
          Learn About FAQ
        </Link>
      </div>
    </Section>;
};
export default LearnFAQCTA;