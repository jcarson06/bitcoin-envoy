import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LearnIntro from "@/components/sections/learn/LearnIntro";
import SEO from "@/components/SEO";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import LearnWhatIsBitcoin from "@/components/sections/learn/LearnWhatIsBitcoin";
import LearnWhatIsBitcoinPart2 from "@/components/sections/learn/LearnWhatIsBitcoinPart2";
import LearnDollarHistory from "@/components/sections/learn/LearnDollarHistory";
import LearnWhyBitcoinHasValue from "@/components/sections/learn/LearnWhyBitcoinHasValue";
import LearnWhyBitcoinMatters from "@/components/sections/learn/LearnWhyBitcoinMatters";
import LearnFAQCTA from "@/components/sections/learn/LearnFAQCTA";
const Learn = () => {
  return <div className="min-h-screen">
      <SEO title="Learn Bitcoin - Free Educational Content" description="Start your Bitcoin journey with the best educational content curated for beginners. Learn what Bitcoin is, why it matters, and how it works." keywords="learn bitcoin, bitcoin education, cryptocurrency basics, bitcoin tutorial" />
      <ErrorBoundary>
        <Navbar />
        
        {/* LearnIntro Section */}
        <LearnIntro />

        {/* LearnWhatIsBitcoin Section */}
        <LearnWhatIsBitcoin />

        {/* LearnWhatIsBitcoinPart2 Section */}
        <LearnWhatIsBitcoinPart2 />

        {/* LearnDollarHistory Section */}
        <LearnDollarHistory />

        {/* LearnWhyBitcoinHasValue Section */}
        <LearnWhyBitcoinHasValue />

        {/* LearnWhyBitcoinMatters Section */}
        <LearnWhyBitcoinMatters />

        {/* LearnFAQCTA Section */}
        <LearnFAQCTA />
        
        <Footer />
      </ErrorBoundary>
    </div>;
};
export default Learn;