import React from 'react';
import { Section } from '@/components/common/Section';
import { Link } from 'react-router-dom';

const LearnFAQCTA = () => {
  return (
    <Section id="faq-cta" spacing="lg" background="gray">
      <div className="section-container text-center">
        <h2 className="section-title mb-4">Have questions? Want help?</h2>
        <p className="section-subtitle mb-8 max-w-2xl mx-auto">Learn more about personalized, one-on-one coaching with real human bitcoin experts. There's no obligation, and your first session is 100% free.</p>
        <Link to="/faq" className="button-primary">
          Learn About FAQ
        </Link>
      </div>
    </Section>
  );
};

export default LearnFAQCTA;