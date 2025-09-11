import React from "react";
import { Section } from "@/components/common/Section";
const CoachingTestimonials = () => {
  return <Section spacing="lg" background="white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto">Real stories from people who've transformed their understanding of bitcoin and changed their lives for the better.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-elegant border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-pulse-600 font-semibold">DR</span>
              </div>
              <div>
                <p className="font-semibold">Dara R.</p>
                <p className="text-sm text-gray-500">Nonprofit Strategy & Operations</p>
              </div>
            </div>
            <p className="text-gray-600">"Bitcoin Envoy helped me get started with a dollar-cost-averaging strategy on River. Jeff, the founder, was super helpful and broke everything down for me in clear digestible terms. He made me comfortable and helped me find an approach that works for my age and stage of life. And he's always there to answer all of my questions."</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-elegant border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-pulse-600 font-semibold">MS</span>
              </div>
              <div>
                <p className="font-semibold">Matthew S.</p>
                <p className="text-sm text-gray-500">Advocacy Executive</p>
              </div>
            </div>
            <p className="text-gray-600">"Jeff has an amazing way of making Bitcoin easy to understand. He's patient, insightful, and passionate about helping people succeed. If you've ever wanted to learn about Bitcoin without the confusion, Jeff is the perfect coach to guide you."</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-elegant border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-pulse-600 font-semibold">PW</span>
              </div>
              <div>
                <p className="font-semibold">Pete W.</p>
                <p className="text-sm text-gray-500">Finance Manager</p>
              </div>
            </div>
            <p className="text-gray-600">"Honestly, the educational content is so good that I didn't initially think I would need coaching. But eventually I signed up for a free consultation anyway because I had a few questions, and the rest is history. Jeff is the absolute best. I'm a huge fan of Bitcoin Envoy!"</p>
          </div>
        </div>
      </div>
    </Section>;
};
export default CoachingTestimonials;