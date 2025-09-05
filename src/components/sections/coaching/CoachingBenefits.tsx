import React from "react";
import { Section } from "@/components/common/Section";

const CoachingBenefits = () => {
  return <Section spacing="lg" background="white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Why Choose Personal Coaching?</h2>
          <p className="section-subtitle mx-auto">Learning about Bitcoin can be overwhelming. This journey can be challenging at times, and for some, having a guide to help along the way is a smart move.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-pulse-600">
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 1 1-4-4" />
                <path d="M12 8a4 4 0 1 0 4 4" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Personalized Curriculum</h3>
              <p className="text-gray-600">
                Your learning path is customized based on your experience level, goals, and interests.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-pulse-600">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Learn from trusted bitcoin educators with years of practical experience.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-pulse-600">
                <rect width="18" height="11" x="3" y="11" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Sessions scheduled around your availability. You can choose to set up recurring sessions or go with an ad hoc approach.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-pulse-600">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-gray-600">Lifetime access to educational resources and continued support as you grow your bitcoin knowledge.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>;
};

export default CoachingBenefits;