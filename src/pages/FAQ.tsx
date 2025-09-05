import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import FAQHero from "@/components/sections/faq/FAQHero";
import FAQQuestions from "@/components/sections/faq/FAQQuestions";
import FAQRules from "@/components/sections/faq/FAQRules";
import FAQReadingList from "@/components/sections/faq/FAQReadingList";
import FAQPeopleToFollow from "@/components/sections/faq/FAQPeopleToFollow";
import FAQAdditionalResources from "@/components/sections/faq/FAQAdditionalResources";
import { faqData } from "@/data/faqData";

// Data is now imported from centralized data file

const FAQ = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Bitcoin FAQ+ - Questions, Rules, Resources & Reading List"
        description="Complete Bitcoin FAQ with frequently asked questions, rules of the road, essential reading list, people to follow, and additional resources for your Bitcoin journey."
        keywords="bitcoin faq, bitcoin rules, bitcoin reading list, bitcoin resources, bitcoin questions, bitcoin education"
        url="/faq"
        structuredData={structuredData}
      />
      <Navbar />
      
      <ErrorBoundary>
        {/* FAQHero Section */}
        <FAQHero />
        
        {/* FAQQuestions Section */}
        <FAQQuestions />
        
        {/* FAQRules Section */}
        <FAQRules />
        
        {/* FAQReadingList Section */}
        <FAQReadingList />
        
        {/* FAQPeopleToFollow Section */}
        <FAQPeopleToFollow />
        
        {/* FAQAdditionalResources Section */}
        <FAQAdditionalResources />
      </ErrorBoundary>

      <Footer />
    </div>
  );
};

export default FAQ;