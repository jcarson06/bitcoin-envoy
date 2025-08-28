import React from "react";

const WhyUs = () => {
  // Easily editable content - admin can modify these titles and tags
  const cards = [
    {
      title: "Personalized Bitcoin coaching tailored to your learning style",
      tag: "Personal",
      backgroundImage: "/background-section1.png",
      delay: "0.2s"
    },
    {
      title: "The best educational content on the internet, specifically curated for beginners",
      tag: "Topflight Educational Resources",
      backgroundImage: "/background-section2.png",
      delay: "0.4s"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50" id="why-us">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="mb-8 md:mb-12">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-4">
            Why Choose Us
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-xl opacity-0 animate-fade-in hover:scale-105 transition-transform duration-300"
              style={{
                height: '400px',
                animationDelay: card.delay
              }}
            >
              <div 
                className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80"
                style={{
                  backgroundImage: `url('${card.backgroundImage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay"
                }}
              />
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">{card.tag}</span>
                </div>
              </div>
              
              <div className="relative z-10 p-6 md:p-8 h-full flex items-end">
                <div className="max-w-lg">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display text-white font-bold leading-tight">
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;