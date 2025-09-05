import React, { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { logger } from "@/utils/logger";
import { Section } from "@/components/common/Section";

const IndexImageShowcase = () => {
  const { elementRef } = useIntersectionObserver();
  const [showcaseImageError, setShowcaseImageError] = useState(false);

  const handleImageError = () => {
    logger.warn('Showcase image failed to load', { 
      src: '/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png' 
    });
    setShowcaseImageError(true);
  };

  return (
    <Section ref={elementRef} spacing="lg" background="gray">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Don't Let Inflation Eat Your Savings</h2>
          <p className="section-subtitle mx-auto max-w-3xl">
            Over the past century, traditional currency has lost significant purchasing power due to inflation and monetary policy changes. 
            See how Bitcoin offers a different approach to preserving and growing your wealth.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {showcaseImageError ? (
            <div className="w-full h-96 bg-gray-100 rounded-lg shadow-lg flex items-center justify-center">
              <p className="text-gray-500">Image unavailable</p>
            </div>
          ) : (
            <img 
              src="/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png" 
              alt="Bitcoin vs traditional money comparison chart showing Bitcoin's fixed supply versus fiat currency inflation over time" 
              className="w-full h-auto rounded-lg shadow-lg" 
              onError={handleImageError} 
            />
          )}
        </div>
      </div>
    </Section>
  );
};

export default IndexImageShowcase;