import React, { useEffect } from "react";
import { Container } from "@/components/common/Container";
const CalendlyEmbed = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);
  return <Container>
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          {/* Calendly Card */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Header Section */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start" style={{
            backgroundImage: "url('/background-section2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <div className="inline-block px-4 sm:px-6 py-2 border border-white text-white rounded-full text-xs mb-4">
                Free Consultation
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                Schedule your free coaching session 
              </h2>
            </div>

            {/* Calendly Embed Section */}
            <div className="bg-white border border-gray-100">
              {/* Calendly Inline Widget */}
              <div className="calendly-inline-widget" data-url="https://calendly.com/jeff-bitcoinenvoy/coaching" style={{
              minWidth: "320px",
              height: "700px"
            }} />
            </div>
          </div>
        </div>
      </div>
    </Container>;
};
export default CalendlyEmbed;