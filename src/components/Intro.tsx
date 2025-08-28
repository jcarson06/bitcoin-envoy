import React, { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Intro = memo(() => {
  return <section 
    className="overflow-hidden relative bg-cover py-20 md:py-32 will-change-transform" 
    id="hero" 
    style={{
      backgroundImage: 'url("/Header-background.webp")',
      backgroundPosition: 'center 30%'
    }}
  >
    <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full will-change-transform"></div>
    
    <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
        <div className="w-full lg:w-1/2">
          <h1 
            className="section-title sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in text-5xl" 
            style={{ animationDelay: "0.3s" }}
          >
            Welcome To Your Bitcoin Journey
          </h1>
          
          <p 
            className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-950 font-normal text-base sm:text-lg text-left" 
            style={{ animationDelay: "0.5s" }}
          >
            Have you ever been curious about bitcoin but unsure where or how to get started? Bitcoin Envoy was built for beginners. We're here to help you understand the basics and gain the necessary confidence to get started on your journey.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.7s" }}
          >
            <Link to="/learn" className="hero-cta-button">
              Start Learning
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
          <div 
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.9s" }}
          >
            <img 
              src="/lovable-uploads/22bdecf3-020a-460e-a323-e5fe40a037a9.png" 
              alt="Bitcoin education and coaching - Learn the fundamentals of Bitcoin with expert guidance" 
              className="hero-image"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>;
});

Intro.displayName = 'Intro';

export default Intro;