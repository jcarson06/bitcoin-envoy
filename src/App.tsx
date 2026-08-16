import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Learn from "./pages/Learn";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";

export const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

interface AppProps {
  /** Optional children to wrap routes in a custom router (e.g. StaticRouter for SSR). */
  children?: React.ReactNode;
  /** Helmet context for SSR head extraction. */
  helmetContext?: Record<string, unknown>;
}

const App = ({ children, helmetContext }: AppProps = {}) => {
  return (
    <HelmetProvider context={helmetContext}>
      {children ?? (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      )}
    </HelmetProvider>
  );
};

export default App;
