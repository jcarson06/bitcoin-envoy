import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutJeffrey from "@/components/sections/about/AboutJeffrey";
import SEO from "@/components/SEO";
import ErrorBoundary from "@/components/common/ErrorBoundary";

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Jeffrey Carson — Bitcoin Educator",
    "description": "Learn about Jeffrey Carson, founder of Bitcoin Envoy and former U.S. Army Captain, dedicated to Bitcoin education.",
    "url": "https://www.bitcoinenvoy.co/about",
    "mainEntity": {
      "@type": "Person",
      "name": "Jeffrey Carson",
      "jobTitle": "Bitcoin Educator",
      "description": "Former U.S. Army Captain and Iraq War veteran with an MBA and two decades of experience across business, technology, and public policy. Executive Director of the Georgia Bitcoin Council.",
      "url": "https://www.bitcoinenvoy.co/about",
      "image": "https://www.bitcoinenvoy.co/lovable-uploads/jeffrey-carson-headshot.jpg",
      "email": "jeff@bitcoinenvoy.co",
      "sameAs": [
        "https://x.com/jeffreyscarson",
        "https://www.linkedin.com/in/jscarson/"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Bitcoin Envoy",
        "url": "https://www.bitcoinenvoy.co"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="About - Jeffrey Carson, Bitcoin Educator"
        description="Meet Jeffrey Carson, former U.S. Army Captain and founder of Bitcoin Envoy. Learn about his journey from Iraq War veteran to Bitcoin educator."
        keywords="Jeffrey Carson, Bitcoin educator, Bitcoin Envoy founder, Iraq War veteran"
        url="/about"
        structuredData={structuredData}
      />
      <ErrorBoundary>
        <Navbar />
        
        <AboutJeffrey />

        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default About;
