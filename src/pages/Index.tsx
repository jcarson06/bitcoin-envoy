import ErrorBoundary from "@/components/common/ErrorBoundary";
import Navbar from "@/components/Navbar";
import IndexIntro from "@/components/sections/index/IndexIntro";
import IndexCTA from "@/components/sections/index/IndexCTA";
import IndexWhyBitcoin from "@/components/sections/index/IndexWhyBitcoin";
import IndexDollarHistory from "@/components/sections/index/IndexDollarHistory";
import IndexBitcoinHistory from "@/components/sections/index/IndexBitcoinHistory";

import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const Index = () => {
  // Use custom hook for scroll behavior with proper cleanup
  useScrollToSection({ offset: 80, mobileOffset: 100 });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bitcoin Envoy",
    "url": "https://bitcoinenvoy.co",
    "description": "Free Bitcoin education for beginners. Learn the most important Bitcoin fundamentals in about one hour — no jargon, no technical background required.",
    "inLanguage": "en-US",
    "author": {
      "@type": "Person",
      "name": "Jeffrey Carson",
      "jobTitle": "Bitcoin Educator",
      "url": "https://bitcoinenvoy.co/about",
      "image": "https://bitcoinenvoy.co/lovable-uploads/jeffrey-carson-headshot.jpg",
      "sameAs": [
        "https://x.com/jeffreyscarson",
        "https://www.linkedin.com/in/jscarson/"
      ]
    },
    "potentialAction": {
      "@type": "ReadAction",
      "target": "https://bitcoinenvoy.co/learn"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Bitcoin for Beginners — Learn Bitcoin Fundamentals in 1 Hour | Bitcoin Envoy"
        description="New to Bitcoin? Bitcoin Envoy teaches you the most important Bitcoin fundamentals in about an hour — no jargon, no fluff. The clearest beginner's guide to Bitcoin on the internet."
        keywords="bitcoin for beginners, bitcoin basics, bitcoin education, bitcoin investing, bitcoin guidance, bitcoin expert, bitcoin help, digital currency, digital assets"
        structuredData={structuredData}
      />
      <ErrorBoundary>
        <Navbar />
        <IndexIntro />
        <IndexWhyBitcoin />
        <IndexDollarHistory />
        <IndexBitcoinHistory />
        <IndexCTA />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default Index;