import React from 'react';
import { Section } from '@/components/common/Section';
import { Container } from '@/components/common/Container';
import { OptimizedImage } from '@/components/common/OptimizedImage';
import { ExternalLink, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
const CoachingAbout = () => {
  const isMobile = useIsMobile();
  return <Section spacing="lg" background="gray">
      <Container>
        <div className="text-center mb-12">
          <h1 className="section-title mb-4">About Jeffrey Carson — Bitcoin Coach &amp; Educator</h1>
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
              <p className="text-gray-700 leading-relaxed">Jeff is a former U.S. Army Captain and Iraq War veteran with an MBA and two decades of experience across business, tech, and public policy. He’s lived abroad, traveled to 70+ countries, and experienced firsthand the real-world costs of broken money — most notably in Zimbabwe and Argentina. These experiences helped shape his worldview and eventually led him to Bitcoin as a practical solution. Today, he works as an educator and advocate serving as the executive director of the Georgia Bitcoin Council, an organization dedicated to advancing responsible Bitcoin policy in the state of Georgia.</p>
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
                <p className="text-gray-700 text-sm leading-relaxed italic">Thanks for stopping by my website. I hope the time you spent was worthwhile and you were able to learn something new about Bitcoin. If you have any questions or feedback about the site, I'd be glad to hear from you!</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link to="/learn" className="button-primary text-center">Start Learning</Link>
                <Link to="/faq" className="button-secondary text-center">Browse FAQ+</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>;
};
export default CoachingAbout;