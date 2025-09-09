import React from 'react';
import { Section } from '@/components/common/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { readingList } from '@/data/faqData';
const FAQReadingList = () => {
  return <Section spacing="lg" background="gray">
      <div className="section-container">
        <div className="text-center mb-12">
          
          <h2 className="section-title mb-4">Reading List</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Must-read books and papers to deepen your understanding of Bitcoin.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {readingList.map((book, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <span>{book.title}</span>
                  <ExternalLink className="ml-2 flex-shrink-0 text-primary" size={20} />
                </CardTitle>
                <p className="text-sm text-muted-foreground">by {book.author}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{book.description}</p>
                <a href={book.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                  Read More <ExternalLink className="ml-1" size={16} />
                </a>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </Section>;
};
export default FAQReadingList;