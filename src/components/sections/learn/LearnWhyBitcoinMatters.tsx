import React from 'react';
import { Section } from '@/components/common/Section';
import YouTubeEmbed from '@/components/common/YouTubeEmbed';
const LearnWhyBitcoinMatters = () => {
  return <Section id="why-bitcoin-matters" spacing="lg" background="white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Why Bitcoin Matters</h2>
          <p className="section-subtitle mx-auto max-w-2xl">Continue your journey with this insightful overview of Bitcoin's many use cases and how it's supporting freedom around the world. [20 min]</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <YouTubeEmbed videoId="R4gyS5mb9dE" title="Why Bitcoin is Important - Complete Overview" className="mb-6" />
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">Alex Gladstein, Human Rights Foundation</h3>
            <p className="text-gray-500 text-sm">Attribution: Bitcoin Policy Institute</p>
          </div>
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Why does Bitcoin matter beyond investing?</h3>
            <p className="text-gray-700 leading-relaxed">
              For most people in wealthy countries, Bitcoin is primarily a savings tool — a way to protect money from inflation. But for roughly 1.4 billion people worldwide who lack access to a reliable bank account, and for millions more living under authoritarian regimes with unstable currencies, Bitcoin is something far more fundamental: financial freedom. A dissident in a country that freezes political opponents' bank accounts can hold Bitcoin in a self-custody wallet that no government can seize. A migrant worker can send money home to family in seconds for a fraction of the cost Western wire transfers charge. A Venezuelan or Argentine family can protect their savings from hyperinflation without permission from any institution. Bitcoin is not just a new form of money — it is the first money in history that no single person, company, or government can control, censor, or confiscate.
            </p>
          </div>
        </div>
      </div>
    </Section>
};
export default LearnWhyBitcoinMatters;
