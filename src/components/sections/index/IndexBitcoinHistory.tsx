import { Section } from '@/components/common/Section';
import { OptimizedImage } from '@/components/common/OptimizedImage';
const IndexBitcoinHistory = () => {
  return <Section spacing="lg" className="bg-gradient-to-br from-white to-pulse-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Bitcoin's Purchasing Power</h2>
          <p className="section-subtitle mx-auto max-w-2xl">Unlike the Dollar, Bitcoin's purchasing power has actually increased over time, offering a superior store of value.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <OptimizedImage src="/lovable-uploads/e937ee56-d44e-4461-a995-dbcd4eaef7d9.webp" alt="Price of a Home: U.S. Dollars vs. Bitcoin comparison showing the same house requiring 664 BTC in 2016, 45 BTC in 2020, and only 6.6 BTC in 2024" className="w-full h-auto rounded-lg shadow-elegant mb-6" containerClassName="mb-6" />
          <div className="text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">Notice how home prices have gone up when priced in Dollars, but have gone down when priced in Bitcoin. If you're not sure what that means or why it's happening, don't worry! You're not alone, and you came to the right place.</p>
          </div>
        </div>
      </div>
    </Section>
};
export default IndexBitcoinHistory;