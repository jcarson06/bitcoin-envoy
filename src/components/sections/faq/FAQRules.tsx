import { Section } from '@/components/common/Section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { rulesData } from '@/data/faqData';

const FAQRules = () => {
  return (
    <Section spacing="lg" background="white">
      <div className="section-container">
        <div className="text-center mb-12">
          
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
  );
};

export default FAQRules;