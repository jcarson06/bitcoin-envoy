import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { logger } from "@/utils/logger";
const IndexIntro = memo(() => {
  const [heroImageError, setHeroImageError] = useState(false);
  const handleImageError = () => {
    logger.warn('Hero image failed to load', {
      src: '/lovable-uploads/22bdecf3-020a-460e-a323-e5fe40a037a9.webp'
    });
    setHeroImageError(true);
  };
  return <section className="overflow-hidden relative bg-cover py-20 md:py-32" id="hero" style={{
    backgroundImage: 'url("/Header-background.webp")',
    backgroundPosition: 'center 30%'
  }}>
    <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
    
    <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
        <div className="w-full lg:w-1/2">
          <h1 className="section-title sm:text-4xl lg:text-5xl xl:text-6xl leading-tight animate-fade-in stagger-1 text-5xl">
            Welcome To Your Bitcoin Journey
          </h1>
          
          <p className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed animate-fade-in stagger-2 text-gray-950 font-normal text-base sm:text-lg text-left">Have you ever been curious about Bitcoin but unsure where to start? If so, you came to the right place. I built this website to help newcomers learn the basics — and to do so in about an hour.                                </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-3">
            <Link to="/learn" className="hero-cta-button group">
              Start Learning
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/about" className="hero-cta-button group">
              About Me
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl animate-fade-in stagger-4">
            {heroImageError ? <div className="hero-image bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <p className="text-sm">Image unavailable</p>
                </div>
              </div> : <img src="/lovable-uploads/22bdecf3-020a-460e-a323-e5fe40a037a9.webp" alt="Bitcoin education - Learn the fundamentals of Bitcoin with expert guidance" className="hero-image" loading="eager" decoding="async" onError={handleImageError} />}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>;
});
IndexIntro.displayName = 'IndexIntro';
export default IndexIntro;