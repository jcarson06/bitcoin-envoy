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

      {/* What is Bitcoin? Section */}
      <Section spacing="lg" background="gray">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">What is Bitcoin?</h2>
            <p className="section-subtitle mx-auto max-w-2xl">Start with the fundamentals — a clear explanation of what Bitcoin actually is and how it works. [3 min]</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed videoId="okJPiG5s9oU" title="What is Bitcoin? - Foundational Overview" className="mb-6" />
            <div className="text-center">
              <p className="text-gray-600 max-w-3xl mx-auto">This foundational video explains the basics of Bitcoin in simple terms, perfect for beginners who want to understand what Bitcoin is before diving deeper into why it matters. Attribution: iShares, by BlackRock.</p>
            </div>
          </div>
        </div>
      </Section>

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
            <h2 className="section-title mb-4">History of the Dollar</h2>
            <p className="section-subtitle mx-auto max-w-2xl">Understanding monetary history helps explain why Bitcoin offers a superior alternative for preserving and growing wealth over time.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <img src="/lovable-uploads/0108b8ad-fcf1-4944-bed6-da89f90d6703.png" alt="A Dollar's Worth infographic showing the purchasing power decline of the U.S. dollar from $25 in 1920 to $1 in 2020, with historical examples of what $1 could buy in different decades" className="w-full h-auto rounded-lg shadow-lg mb-6" />
            <div className="text-center">
              <p className="text-gray-600 max-w-3xl mx-auto">This infographic demonstrates how the US dollar has lost significant purchasing power over the past century due to monetary policy and inflation. Pay special attention to the bottom row of images and all of the many items that $1 could have afforded you in the past. What can $1 buy you today?</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg" background="white">
        <div className="section-container text-center">
          <h2 className="section-title mb-4">Have questions? Want help?</h2>
          <p className="section-subtitle mb-8 max-w-2xl mx-auto">
            Learn more about personalized, one-on-one coaching with real human bitcoin experts. Your first session is 100% free.
          </p>
          <a href="/coaching" className="button-primary">
            Get Personalized Coaching
          </a>
        </div>
      </Section>

      <Footer />
    </div>;
};
export default Learn;