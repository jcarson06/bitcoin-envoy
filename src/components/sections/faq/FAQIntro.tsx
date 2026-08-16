import { Section } from '@/components/common/Section';
import { Link } from 'react-router-dom';
const FAQIntro = () => {
  return <Section spacing="lg" className="pt-20 bg-gradient-to-br from-pulse-50 to-white">
      <div className="section-container text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Bitcoin FAQ for Beginners — Questions Answered, Reading List &amp; Resources</h1>
        <p className="section-subtitle max-w-3xl mx-auto mb-6">Common questions answered clearly, rules of the road for new Bitcoiners, an essential reading list, recommended exchanges, hardware wallets, and notable people to follow.</p>
        <p className="text-sm text-gray-500">New to Bitcoin? <Link to="/learn" className="text-orange-500 hover:underline">Start with the Learn page</Link> for a 30-minute introduction before diving in here.</p>
      </div>
    </Section>;
};
export default FAQIntro;