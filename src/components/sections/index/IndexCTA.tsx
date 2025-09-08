import React, { useRef, memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useSharedIntersectionObserver } from "@/hooks/useSharedIntersectionObserver";

const IndexCTA = memo(() => {
  const { elementRef } = useSharedIntersectionObserver();

  return <section ref={elementRef} className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Ready to Start Your Bitcoin Journey?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Join our community of everyday people who've taken steps to secure their financial future by learning about Bitcoin.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/learn" className="button-primary">
            Start Learning
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>;
});

IndexCTA.displayName = 'IndexCTA';

export default IndexCTA;