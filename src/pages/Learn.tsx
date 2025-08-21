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
              <h3 className="text-xl font-semibold mb-2">Bitcoin Use Cases Overview</h3>
              <p className="text-gray-600">
                An excellent introduction to all the many use cases of Bitcoin and why it's revolutionizing money.
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