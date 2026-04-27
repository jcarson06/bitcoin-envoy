import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LearnIntro from "@/components/sections/learn/LearnIntro";
import SEO from "@/components/SEO";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import LearnWhatIsBitcoin from "@/components/sections/learn/LearnWhatIsBitcoin";
import LearnWhatIsBitcoinPart2 from "@/components/sections/learn/LearnWhatIsBitcoinPart2";
import LearnWhyBitcoinHasValue from "@/components/sections/learn/LearnWhyBitcoinHasValue";
import LearnWhyBitcoinMatters from "@/components/sections/learn/LearnWhyBitcoinMatters";
import LearnFAQCTA from "@/components/sections/learn/LearnFAQCTA";
const Learn = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Bitcoin Fundamentals for Beginners",
    "description": "A free, self-paced Bitcoin course covering what Bitcoin is, how it works, why it has value, and why it matters — designed for complete beginners. Approximately 30 minutes of curated video and written content.",
    "provider": {
      "@type": "Organization",
      "name": "Bitcoin Envoy",
      "url": "https://bitcoinenvoy.co"
    },
    "educationalLevel": "Beginner",
    "teaches": ["What Bitcoin is", "How Bitcoin works", "Why Bitcoin has value", "Why Bitcoin matters globally"],
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT30M"
    },
    "isAccessibleForFree": true,
    "url": "https://bitcoinenvoy.co/learn"
  };

  return <div className="min-h-screen">
      <SEO
        title="Learn Bitcoin for Beginners — What It Is, How It Works & Why It Matters"
        description="Start your Bitcoin journey with the best educational content curated for beginners. Learn what Bitcoin is, why it matters, and how it works — in about 30 minutes."
        keywords="learn bitcoin, bitcoin education, cryptocurrency basics, intro to bitcoin, bitcoin for beginners, bitcoin basics, bitcoin tutorial"
        url="/learn"
        structuredData={structuredData}
      />
      <ErrorBoundary>
        <Navbar />
        
        {/* LearnIntro Section */}
        <LearnIntro />

        {/* LearnWhatIsBitcoin Section */}
        <LearnWhatIsBitcoin />

        {/* LearnWhatIsBitcoinPart2 Section */}
        <LearnWhatIsBitcoinPart2 />

        {/* LearnWhyBitcoinHasValue Section */}
        <LearnWhyBitcoinHasValue />

        {/* LearnWhyBitcoinMatters Section */}
        <LearnWhyBitcoinMatters />

        {/* LearnFAQCTA Section */}
        <LearnFAQCTA />
        
        <Footer />
      </ErrorBoundary>
    </div>
};
export default Learn;