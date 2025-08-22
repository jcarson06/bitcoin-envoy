import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroLearn from "@/components/IntroLearn";
import YouTubeEmbed from "@/components/common/YouTubeEmbed";
import { Section } from "@/components/common/Section";
const Learn = () => {
  return <div className="min-h-screen">
      <Navbar />
      
      {/* IntroLearn Section */}
      <IntroLearn />

      {/* Featured Content Section */}
      <Section spacing="lg" background="white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Why Bitcoin Matters</h2>
            <p className="section-subtitle mx-auto max-w-2xl">Start your Bitcoin journey with this helpful overview of Bitcoin's many use cases and why it's important for the future of money.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed videoId="R4gyS5mb9dE" title="Why Bitcoin is Important - Complete Overview" className="mb-6" />
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Alex Gladstein, Human Rights Foundation</h3>
              <p className="text-gray-600">An excellent introduction to all the many use cases of Bitcoin and how it's changing the world. This is hands down the best 20 min you'll spend learning about Bitcoin. Highly recommended!</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Traditional Money Loses Value Section */}
      <Section spacing="lg" background="gray">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Why Traditional Money Loses Value</h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              Understanding the problem with fiat currency helps explain why Bitcoin offers a superior alternative for preserving and growing wealth over time.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/d6e48a76-6347-4e37-80e0-321b54411aef.png" 
              alt="Dollar debasement infographic showing how traditional money loses purchasing power over time compared to Bitcoin and other assets"
              className="w-full h-auto rounded-lg shadow-lg mb-6"
            />
            <div className="text-center">
              <p className="text-gray-600 max-w-3xl mx-auto">
                This infographic demonstrates how the US dollar has lost significant purchasing power over decades due to monetary policy and inflation. 
                Bitcoin offers a fixed supply alternative that has historically preserved and increased purchasing power over time.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg" background="gray">
        <div className="section-container text-center">
          <h2 className="section-title mb-4">Have questions? Want help?</h2>
          <p className="section-subtitle mb-8 max-w-2xl mx-auto">
            Learn more about personalized, one-on-one coaching with real human bitcoin experts. Your first session is 100% free.
          </p>
          <a href="/coaching" className="inline-flex items-center px-8 py-4 bg-pulse-500 hover:bg-pulse-600 text-white font-medium rounded-full transition-colors duration-300">
            Get Personalized Coaching
          </a>
        </div>
      </Section>

      <Footer />
    </div>;
};
export default Learn;