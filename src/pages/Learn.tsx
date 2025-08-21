import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroLearn from "@/components/IntroLearn";
import LearningContent from "@/components/LearningContent";
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
            <p className="section-subtitle mx-auto max-w-2xl">
              Start your Bitcoin journey with this comprehensive overview of Bitcoin's many use cases 
              and why it's important for the future of money.
            </p>
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

      {/* Learning Modules Section */}
      <Section spacing="lg" background="white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Learning Modules</h2>
            <p className="section-subtitle mx-auto">
              Structured curriculum that takes you from beginner to confident bitcoin user
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-elegant border border-gray-100">
              <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-pulse-600 font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Bitcoin Basics</h3>
              <p className="text-gray-600 mb-4">
                Understand what bitcoin is, how it works, and why it matters for your financial future.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• What is Bitcoin?</li>
                <li>• Blockchain fundamentals</li>
                <li>• Digital scarcity</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-elegant border border-gray-100">
              <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-pulse-600 font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Security & Storage</h3>
              <p className="text-gray-600 mb-4">
                Learn how to safely store and protect your bitcoin with industry best practices.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Wallet types</li>
                <li>• Private keys</li>
                <li>• Hardware wallets</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-elegant border border-gray-100">
              <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-pulse-600 font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Investment Strategy</h3>
              <p className="text-gray-600 mb-4">
                Develop a personalized bitcoin investment approach that fits your goals and timeline.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Dollar-cost averaging</li>
                <li>• Risk management</li>
                <li>• Portfolio allocation</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Learning Content Section */}
      <LearningContent />

      {/* CTA Section */}
      <Section spacing="lg" background="gray">
        <div className="section-container text-center">
          <h2 className="section-title mb-4">Have questions? Want help?</h2>
          <p className="section-subtitle mb-8 max-w-2xl mx-auto">
            Learn more about one-on-one video coaching sessions with real human bitcoin experts.
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