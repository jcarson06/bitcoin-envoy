import { Section } from '@/components/common/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, CheckCircle } from 'lucide-react';
import { recommendedExchanges } from '@/data/faqData';
const FAQRecommendedExchanges = () => {
  return <Section spacing="lg" background="gray">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Exchanges I Recommend                </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Trusted platforms to safely buy, sell, and manage your Bitcoin.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {recommendedExchanges.map((exchange, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <span>{exchange.name}</span>
                  <ExternalLink className="ml-2 flex-shrink-0 text-primary" size={20} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{exchange.description}</p>
                
                <div className="space-y-2 mb-4">
                  {exchange.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </div>)}
                </div>
                
                <a href={exchange.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                  Visit {exchange.name} <ExternalLink className="ml-1" size={16} />
                </a>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </Section>;
};
export default FAQRecommendedExchanges;