import React from "react";
import { Section } from "@/components/common/Section";
const Testimonials = () => {
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
                <span className="text-pulse-600 font-semibold">MS</span>
              </div>
              <div>
                <p className="font-semibold">Matthew S.</p>
                <p className="text-sm text-gray-500">Advocacy Executive</p>
              </div>
            </div>
            <p className="text-gray-600">
              "The personalized coaching made all the difference. I went from completely confused 
              about bitcoin to confidently managing my own wallet in just a few weeks."
            </p>
          </div>

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
            <p className="text-gray-600">"Bitcoin Envoy helped me get started with a dollar-cost-averaging approach to buying bitcoin. Jeff, the founder, was super helpful and broke everything down for me in clear digestible terms. He made me comfortable and helped me find an approach that works for my age and stage of life. And he's always there to answer all of my questions."</p>
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
            <p className="text-gray-600">
              "The investment in coaching paid for itself quickly. I now have the confidence 
              to make informed decisions about bitcoin for my retirement planning."
            </p>
          </div>
        </div>
      </div>
    </Section>;
};
export default Testimonials;