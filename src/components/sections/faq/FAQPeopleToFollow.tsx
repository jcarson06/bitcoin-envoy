import React from 'react';
import { Section } from '@/components/common/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ExternalLink } from 'lucide-react';
import { peopleToFollow } from '@/data/faqData';

const FAQPeopleToFollow = () => {
  return (
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
  );
};

export default FAQPeopleToFollow;