import React from 'react';
import { Section } from '@/components/common/Section';
import { Container } from '@/components/common/Container';
import { OptimizedImage } from '@/components/common/OptimizedImage';
import { ExternalLink, Mail } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
const CoachingAbout = () => {
  const isMobile = useIsMobile();
  return <Section spacing="lg" background="gray">
      <Container>
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">About the Founder</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Jeffrey Carson Photo */}
          <div className="flex justify-center">
            <div className={`${isMobile ? 'w-64 h-64' : 'w-80 h-80'} rounded-full overflow-hidden bg-gradient-to-br from-pulse-100 to-pulse-200`}>
              <OptimizedImage src="/lovable-uploads/jeffrey-carson-headshot.jpg" alt="Jeffrey Carson, founder of Bitcoin Envoy and former U.S. Army Captain" className="w-full h-full object-cover" containerClassName="w-full h-full" />
            </div>
          </div>
          
          {/* Bio content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Jeffrey Carson</h3>
              <p className="text-gray-700 leading-relaxed">Jeff is a former U.S. Army Captain and Iraq War veteran with two decades of professional experience spanning the military, business, tech, and politics. After earning his MBA, he spent time at Google and later devoted much of the past decade to reforming America’s political system — an effort that left him convinced of how deeply broken it has become. Along the way, he has lived abroad, traveled to over 70 countries, and witnessed the human costs of inflation and corruption firsthand, from Zimbabwe to Argentina.

These experiences ultimately led him to Bitcoin, which he sees as a rare source of hope — a way for everyday people to protect their savings, preserve their freedom, and build a brighter future. Today, Jeff is passionate about helping others begin their Bitcoin journey with clarity and confidence. As the saying goes: fix the money, fix the world.</p>
            </div>
            
            {/* Social links */}
            <div className="flex space-x-6">
              <a href="https://x.com/jeffreyscarson" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-pulse-600 hover:text-pulse-700 transition-colors" aria-label="Follow Jeffrey on X">
                <ExternalLink size={20} />
                <span>Follow on X</span>
              </a>
              <a href="https://www.linkedin.com/in/jscarson/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-pulse-600 hover:text-pulse-700 transition-colors" aria-label="Connect on LinkedIn">
                <ExternalLink size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
            
            {/* Contact */}
            <div className="pt-4">
              <a href="mailto:jeff@bitcoinenvoy.co" className="flex items-center space-x-2 text-pulse-600 hover:text-pulse-700 transition-colors mb-4" aria-label="Send email to Jeffrey">
                <Mail size={20} />
                <span>jeff@bitcoinenvoy.co</span>
              </a>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700 text-sm leading-relaxed italic">Thanks for stopping by my website. I hope the time you spent was worthwhile and you were able to learn something new about Bitcoin. If you have any more questions or you have feedback about the site, I'd be glad to hear from you. Feel free to email me using the address above.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>;
};
export default CoachingAbout;