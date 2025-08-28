import React from "react";
const ImageShowcase = () => {
  return <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-[64px]">
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img src="/lovable-uploads/145c7978-4866-4776-bf84-57e5beb97fa8.png?v=1" alt="Family walking in neon city with Bitcoin symbol, representing financial future" loading="lazy" decoding="async" className="w-full h-auto object-cover" />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Bitcoin Education That Works</h3>
            <p className="text-gray-700 text-sm sm:text-base">Our proven approach combines foundational educational resources with expert guidance and personalized support, helping you master the fundamentals at your own pace while building the confidence you need to start stacking sats.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default ImageShowcase;