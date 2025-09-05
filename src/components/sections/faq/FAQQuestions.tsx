import React from 'react';
import { Section } from '@/components/common/Section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BookOpen } from 'lucide-react';
import { faqData } from '@/data/faqData';

const FAQQuestions = () => {
  return (
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
  );
};

export default FAQQuestions;