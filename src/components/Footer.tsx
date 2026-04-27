import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-8 pb-4">
      <div className="section-container">
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6" aria-label="Footer navigation">
          <Link to="/" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Home</Link>
          <Link to="/learn" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Learn</Link>
          <Link to="/faq" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">FAQ+</Link>
          <Link to="/coaching" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">Coaching</Link>
          <Link to="/about" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">About</Link>
        </nav>
        <p className="text-center text-gray-600 text-sm">
          © 2026 Bitcoin Envoy. All rights reserved.
          <Link to="/privacy-policy" className="text-pulse-500 hover:underline ml-2">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/terms-of-service" className="text-pulse-500 hover:underline">
            Terms of Service
          </Link>
        </p>
        <p className="text-center text-gray-500 text-xs mt-2">
          This website takes inspiration from DesignJoy's BUILD WARS design, updated with Lovable by Rezaul Arif.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
