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

      {/* Understanding Money & Inflation Section */}
      <Section spacing="lg" background="gray">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Why Traditional Money Loses Value</h2>
            <p className="section-subtitle mx-auto max-w-2xl">Understanding how inflation erodes purchasing power helps explain why Bitcoin's fixed supply of 21 million coins makes it an attractive store of value.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-elegant">
              <img 
                src="/lovable-uploads/c28f3428-bc87-4af3-9dbc-3ffa15ce8b48.png" 
                alt="Infographic showing the declining purchasing power of the US dollar from 1913 to 2020, with examples of what $1 could buy including Hershey's bars, Coca-Cola, and other items throughout different time periods"
                className="w-full h-auto rounded-xl"
                loading="lazy"
                decoding="async"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold mb-2">The Hidden Tax of Inflation</h3>
                <p className="text-gray-600">This chart shows how the US dollar has lost over 96% of its purchasing power since 1913. Bitcoin's fixed supply cap of 21 million coins was designed to be deflationary, protecting against this systematic debasement of money.</p>
              </div>
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