import React from 'react';
import { Section } from '@/components/common/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ExternalLink } from 'lucide-react';
import { recommendedHardwareWallets } from '@/data/faqData';

const FAQRecommendedHardwareWallets = () => {
  return (
    <Section id="recommended-hardware-wallets" spacing="lg" background="white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Hardware Wallets We Recommend</h2>
          <p className="section-subtitle">
            Secure hardware devices to safely store your Bitcoin offline
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {recommendedHardwareWallets.map((wallet, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl">{wallet.name}</CardTitle>
                  <a
                    href={wallet.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-hover transition-colors flex-shrink-0 ml-2"
                    aria-label={`Visit ${wallet.name}`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <CardDescription>{wallet.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {wallet.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQRecommendedHardwareWallets;