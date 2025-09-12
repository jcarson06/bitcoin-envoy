import React from 'react';
import { Section } from '@/components/common/Section';
import { Container } from '@/components/common/Container';
import { ExternalLink, Mail } from 'lucide-react';

const CoachingAbout = () => {
  return (
    <Section spacing="lg" background="gray">
      <Container>
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Meet Your Bitcoin Educator</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-pulse-100 to-pulse-200 flex items-center justify-center">
              <span className="text-6xl font-medium text-pulse-600">JC</span>
            </div>
          </div>
          
          {/* Bio content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Jeffrey Carson</h3>
              <p className="text-gray-700 leading-relaxed">
                Jeff is a former U.S. Army Captain and Iraq War veteran with over a decade of experience leading operations and human resources efforts across political campaigns, startups, and nonprofit organizations. He's seen firsthand how utterly broken our political system has become, so he's set out to help build something new. He's passionate about helping others succeed and driven by an innate desire to maximize individual freedom and materially reduce the size and scope of government. As the saying goes, fix the money, fix the world.
              </p>
            </div>
            
            {/* Social links */}
            <div className="flex space-x-6">
              <a 
                href="https://x.com/jeffreyscarson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-pulse-600 hover:text-pulse-700 transition-colors"
                aria-label="Follow Jeffrey on X"
              >
                <ExternalLink size={20} />
                <span>Follow on X</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/jscarson/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-pulse-600 hover:text-pulse-700 transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <ExternalLink size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
            
            {/* Contact */}
            <div className="pt-4">
              <a 
                href="mailto:jeff@bitcoinenvoy.co" 
                className="flex items-center space-x-2 text-pulse-600 hover:text-pulse-700 transition-colors mb-4"
                aria-label="Send email to Jeffrey"
              >
                <Mail size={20} />
                <span>jeff@bitcoinenvoy.co</span>
              </a>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Thanks for stopping by. I hope you liked my website and were able to learn something new today. If you have any more questions or you have feedback for me about the site, I'd be glad to hear from you. Feel free to send me an email. And remember to stay humble and stack sats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CoachingAbout;