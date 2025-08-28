import React, { useEffect, useRef, memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const CTA = memo(() => {
  const ctaRef = useRef<HTMLDivElement>(null);
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
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);
  return <section ref={ctaRef} className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Ready to Start Your Bitcoin Journey?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Join others who've taken steps to secure their financial future by learning about Bitcoin and how it can help.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/learn" className="button-primary">
            Start Learning
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>;
});
CTA.displayName = 'CTA';
export default CTA;