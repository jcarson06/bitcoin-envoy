import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Section } from "@/components/common/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink, BookOpen, Users, Compass } from "lucide-react";
import ErrorBoundary from "@/components/common/ErrorBoundary";

// FAQ data for easy editing
const faqData = [
  {
    question: "What is Bitcoin and is it safe?",
    answer: "Bitcoin is a decentralized digital currency that operates without a central bank or single administrator. It has been running continuously since 2009 and is secured by advanced cryptography and a global network of computers. While Bitcoin's price can be volatile, the underlying network has proven to be extremely secure and resilient."
  },
  {
    question: "How do I get started with Bitcoin?",
    answer: "Start by educating yourself (you're already doing that!), then consider setting up a secure wallet, learning about storage options, and starting with small amounts. Always do your own research and never invest more than you can afford to lose."
  },
  {
    question: "Is Bitcoin just for tech-savvy people?",
    answer: "Not at all! While Bitcoin has technical aspects, modern wallets and exchanges have made it much more user-friendly. Millions of regular people worldwide use Bitcoin daily. With proper education and guidance, anyone can learn to use Bitcoin safely."
  },
  {
    question: "How much should I invest in Bitcoin?",
    answer: "This depends entirely on your personal financial situation, risk tolerance, and investment goals. A common approach is to start small and never invest more than you can afford to lose. Consider Bitcoin as part of a diversified investment strategy."
  },
  {
    question: "Can Bitcoin be hacked or shut down?",
    answer: "Bitcoin's decentralized network makes it extremely resistant to hacking or shutdown. While individual exchanges or wallets can be compromised, the Bitcoin network itself has never been successfully attacked. It's designed to be censorship-resistant and operates across thousands of nodes worldwide."
  }
];

// Rules of the Road data
const rulesData = [
  {
    rule: "Bitcoin is NOT a get-rich-quick scheme",
    description: "If that's your intention, this site is not for you. Good luck! Bitcoin is a long-term store of value and monetary technology, not a gambling tool."
  },
  {
    rule: "Do Your Own Research (DYOR)",
    description: "Never invest based solely on someone else's advice, including ours. Take time to understand what you're investing in and verify information from multiple credible sources."
  },
  {
    rule: "Only invest what you can afford to lose",
    description: "Bitcoin can be volatile in the short term. Never invest money you need for essential expenses, emergency funds, or money you cannot afford to see decrease in value."
  },
  {
    rule: "Security is your responsibility",
    description: "Learn about proper wallet security, backup procedures, and safe storage practices. Not your keys, not your coins. Take time to understand how to protect your Bitcoin."
  },
  {
    rule: "Stay humble and keep learning",
    description: "Bitcoin is constantly evolving. Stay curious, ask questions, and be prepared to learn continuously. The Bitcoin space rewards those who remain humble and open to new information."
  }
];

// Reading List data
const readingList = [
  {
    title: "Bitcoin: A Peer-to-Peer Electronic Cash System",
    author: "Satoshi Nakamoto",
    description: "The original Bitcoin whitepaper that started it all. Essential reading for understanding Bitcoin's core concepts.",
    link: "https://bitcoin.org/bitcoin.pdf"
  },
  {
    title: "The Bitcoin Standard",
    author: "Saifedean Ammous",
    description: "A comprehensive look at Bitcoin through the lens of Austrian economics and monetary history.",
    link: "https://saifedean.com/the-book/"
  },
  {
    title: "Mastering Bitcoin",
    author: "Andreas M. Antonopoulos",
    description: "Technical deep-dive into how Bitcoin works, perfect for those wanting to understand the technology.",
    link: "https://github.com/bitcoinbook/bitcoinbook"
  },
  {
    title: "The Internet of Money",
    author: "Andreas M. Antonopoulos",
    description: "Collection of talks explaining why Bitcoin matters and its potential impact on society.",
    link: "https://aantonop.com/"
  }
];

// People to Follow data
const peopleToFollow = [
  {
    name: "Adam Back",
    handle: "@adam3us",
    bio: "CEO of Blockstream, Bitcoin cryptographer, inventor of Hashcash (precursor to Bitcoin's proof-of-work)",
    link: "https://x.com/adam3us"
  },
  {
    name: "Andreas M. Antonopoulos",
    handle: "@aantonop",
    bio: "Bitcoin educator, author of multiple Bitcoin books, renowned speaker and educator",
    link: "https://x.com/aantonop"
  },
  {
    name: "Saifedean Ammous",
    handle: "@saifedean",
    bio: "Author of 'The Bitcoin Standard', economist and Bitcoin advocate",
    link: "https://x.com/saifedean"
  },
  {
    name: "Michael Saylor",
    handle: "@saylor",
    bio: "Executive Chairman of MicroStrategy, prominent Bitcoin advocate and educator",
    link: "https://x.com/saylor"
  }
];

// Additional Resources data
const additionalResources = [
  {
    title: "Bitcoin.org",
    description: "Official Bitcoin website with wallets, documentation, and getting started guides",
    link: "https://bitcoin.org/",
    category: "Official"
  },
  {
    title: "What Bitcoin Did Podcast",
    description: "Popular Bitcoin podcast hosted by Peter McCormack covering all aspects of Bitcoin",
    link: "https://www.whatbitcoindid.com/",
    category: "Podcast"
  },
  {
    title: "Bitcoin Magazine",
    description: "The oldest and most established Bitcoin news publication",
    link: "https://bitcoinmagazine.com/",
    category: "News"
  },
  {
    title: "River Learn",
    description: "Comprehensive Bitcoin education platform with guides and resources",
    link: "https://river.com/learn/",
    category: "Education"
  },
  {
    title: "Swan Bitcoin",
    description: "Bitcoin-only platform focused on education and dollar-cost averaging",
    link: "https://www.swanbitcoin.com/",
    category: "Platform"
  },
  {
    title: "Casa",
    description: "Bitcoin security company offering self-custody solutions and education",
    link: "https://casa.io/",
    category: "Security"
  }
];

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
        {/* Hero Section */}
        <Section spacing="lg" background="white" className="pt-20">
          <div className="section-container text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Bitcoin FAQ+
            </h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              Your comprehensive guide to Bitcoin questions, essential rules, must-read resources, 
              and trusted voices in the Bitcoin space.
            </p>
          </div>
        </Section>

        {/* Frequently Asked Questions Section */}
        <Section spacing="lg" background="gray">
          <div className="section-container">
            <div className="text-center mb-12">
              <BookOpen className="mx-auto mb-4 text-primary" size={48} />
              <h2 className="section-title mb-4">Frequently Asked Questions</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                Common questions about Bitcoin answered clearly and simply.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg shadow-sm border">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="text-left font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Section>

        {/* Rules of the Road Section */}
        <Section spacing="lg" background="white">
          <div className="section-container">
            <div className="text-center mb-12">
              <Compass className="mx-auto mb-4 text-primary" size={48} />
              <h2 className="section-title mb-4">Rules of the Road</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                Essential principles to guide your Bitcoin journey safely and responsibly.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {rulesData.map((rule, index) => (
                  <AccordionItem key={index} value={`rule-${index}`} className="bg-gray-50 rounded-lg shadow-sm border">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="text-left font-medium">{rule.rule}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{rule.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Section>

        {/* Reading List Section */}
        <Section spacing="lg" background="gray">
          <div className="section-container">
            <div className="text-center mb-12">
              <BookOpen className="mx-auto mb-4 text-primary" size={48} />
              <h2 className="section-title mb-4">Essential Reading List</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                Must-read books and papers to deepen your understanding of Bitcoin.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
              {readingList.map((book, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between">
                      <span>{book.title}</span>
                      <ExternalLink className="ml-2 flex-shrink-0 text-primary" size={20} />
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">by {book.author}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{book.description}</p>
                    <a 
                      href={book.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                    >
                      Read More <ExternalLink className="ml-1" size={16} />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* People to Follow Section */}
        <Section spacing="lg" background="white">
          <div className="section-container">
            <div className="text-center mb-12">
              <Users className="mx-auto mb-4 text-primary" size={48} />
              <h2 className="section-title mb-4">People to Follow on X</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                Trusted voices and thought leaders in the Bitcoin space.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
              {peopleToFollow.map((person, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between">
                      <div>
                        <div>{person.name}</div>
                        <p className="text-sm text-primary font-normal">{person.handle}</p>
                      </div>
                      <ExternalLink className="ml-2 flex-shrink-0 text-primary" size={20} />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{person.bio}</p>
                    <a 
                      href={person.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                    >
                      Follow on X <ExternalLink className="ml-1" size={16} />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Additional Resources Section */}
        <Section spacing="lg" background="gray">
          <div className="section-container">
            <div className="text-center mb-12">
              <Compass className="mx-auto mb-4 text-primary" size={48} />
              <h2 className="section-title mb-4">Additional Resources</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                Curated tools, platforms, and resources to support your Bitcoin journey.
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {additionalResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between text-lg">
                      <span>{resource.title}</span>
                      <ExternalLink className="ml-2 flex-shrink-0 text-primary" size={18} />
                    </CardTitle>
                    <div className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {resource.category}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    <a 
                      href={resource.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
                    >
                      Visit Site <ExternalLink className="ml-1" size={14} />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      </ErrorBoundary>

      <Footer />
    </div>
  );
};

export default FAQ;