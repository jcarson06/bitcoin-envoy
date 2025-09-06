import React from 'react';
import { Section } from '@/components/common/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { additionalResources } from '@/data/faqData';

const FAQAdditionalResources = () => {
  return (
    <Section spacing="lg" background="gray">
      <div className="section-container">
        <div className="text-center mb-12">
          
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
  );
};

export default FAQAdditionalResources;