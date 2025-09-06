import React from "react";
import { Section } from "@/components/common/Section";

const IndexMission = () => {
  return (
    <Section spacing="sm" background="white" id="specifications">
      <div className="section-container">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Main content with text mask image - responsive text sizing */}
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-8 sm:mb-12">
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">Our mission is help everyday people understand, buy, and safely hold bitcoin — empowering them to build generational wealth and achieve financial freedom.</span>
          </h2>
        </div>
      </div>
    </Section>
  );
};

export default IndexMission;