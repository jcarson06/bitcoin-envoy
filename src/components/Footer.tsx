
import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="w-full bg-white py-4">
      <div className="section-container">
        <p className="text-center text-gray-600 text-sm">
          © 2025 Bitcoin Envoy. All rights reserved. 
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
};
export default Footer;
