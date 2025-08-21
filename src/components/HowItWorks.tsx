import React, { useEffect, useRef } from "react";
const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = document.querySelectorAll(".fade-in-stagger");
    elements.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${0.1 * (index + 1)}s`;
      observer.observe(el);
    });
    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  return <section className="py-20 bg-gradient-to-br from-pulse-50 to-white relative" id="how-it-works" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute -top-20 right-0 w-72 h-72 bg-pulse-50 rounded-full opacity-60 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-gray-50 rounded-full opacity-70 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 fade-in-stagger">
          
          <h2 className="section-title mb-4">How Bitcoin Coaching Works</h2>
          <p className="section-subtitle mx-auto">
            A proven four-step process to master bitcoin fundamentals with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 order-2 lg:order-1 opacity-0 fade-in-stagger">
            <div className="rounded-xl p-6 cursor-pointer transition-all duration-500 border bg-white shadow-elegant border-pulse-200">
              <div className="flex items-start">
                <div className="flex items-center justify-center rounded-full w-10 h-10 mr-4 flex-shrink-0 transition-colors duration-300 bg-pulse-500 text-white">
                  01
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 text-pulse-600">
                    Initial Assessment
                  </h3>
                  <p className="text-gray-600 text-sm">We evaluate your current bitcoin knowledge and define your learning goals and timeline.</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl p-6 cursor-pointer transition-all duration-500 border bg-white/50 hover:bg-white/80 border-transparent">
              <div className="flex items-start">
                <div className="flex items-center justify-center rounded-full w-10 h-10 mr-4 flex-shrink-0 transition-colors duration-300 bg-gray-100 text-gray-500">
                  02
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 text-gray-800">
                    Custom Learning Plan
                  </h3>
                  <p className="text-gray-600 text-sm">Receive a personalized curriculum designed for your experience level and learning style.</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl p-6 cursor-pointer transition-all duration-500 border bg-white/50 hover:bg-white/80 border-transparent">
              <div className="flex items-start">
                <div className="flex items-center justify-center rounded-full w-10 h-10 mr-4 flex-shrink-0 transition-colors duration-300 bg-gray-100 text-gray-500">
                  03
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 text-gray-800">
                    Guided Practice
                  </h3>
                  <p className="text-gray-600 text-sm">Work through hands-on exercises with your coach to build practical bitcoin skills.</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl p-6 cursor-pointer transition-all duration-500 border bg-white/50 hover:bg-white/80 border-transparent">
              <div className="flex items-start">
                <div className="flex items-center justify-center rounded-full w-10 h-10 mr-4 flex-shrink-0 transition-colors duration-300 bg-gray-100 text-gray-500">
                  04
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 text-gray-800">
                    Ongoing Support
                  </h3>
                  <p className="text-gray-600 text-sm">Continue your bitcoin journey with community access and advanced learning opportunities.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden h-[400px] shadow-elegant order-1 lg:order-2 opacity-0 fade-in-stagger">
            <div className="absolute inset-0 transition-opacity duration-1000 opacity-100">
              <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80" alt="Initial Assessment" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-pulse-400 font-medium mb-2 block">01</span>
                  <h3 className="text-2xl font-semibold mb-2">Initial Assessment</h3>
                  <p className="text-white/80">We evaluate your current bitcoin knowledge and define your learning goals and timeline.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;