import React from 'react';
import { Section } from '@/components/common/Section';
import { Link } from 'react-router-dom';
const FAQCoachingCTA = () => {
  return <Section id="faq-coaching-cta" spacing="lg" background="gray">
      <div className="section-container text-center">
        <h2 className="section-title mb-4">More questions? We can help.</h2>
        <p className="section-subtitle mb-8 max-w-2xl mx-auto">Learn more about one-on-one coaching with real human bitcoin educators. There's no obligation and your first session is 100% free.</p>
        <Link to="/coaching" className="button-primary">
          Learn About Coaching
        </Link>
      </div>
    </Section>;
};
export default FAQCoachingCTA;