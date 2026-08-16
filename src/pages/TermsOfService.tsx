import React from "react";
import SEO from "@/components/SEO";
import ErrorBoundary from "@/components/common/ErrorBoundary";

const TermsOfService: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service",
    url: "https://bitcoinenvoy.co/terms-of-service",
    description:
      "Review Bitcoin Envoy's Terms of Service for using our website and educational resources.",
    publisher: {
      "@type": "Organization",
      name: "Bitcoin Envoy",
      email: "contact@bitcoinenvoy.co",
    },
  };

  return (
    <>
      <SEO
        title="Terms of Service"
        description="Review Bitcoin Envoy's Terms of Service for using our website and educational resources."
        url="/terms-of-service"
        structuredData={structuredData}
      />

      <ErrorBoundary>
        <main className="min-h-screen bg-white">
        <header className="section-container py-12">
          <h1 className="text-3xl font-semibold">Terms of Service</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: August 11, 2025</p>
        </header>
        <section className="section-container pb-16">
          <article className="mx-auto max-w-3xl space-y-6 leading-relaxed">
            <p>
              These Terms of Service ("Terms") govern your use of the Bitcoin Envoy website and educational materials
              (collectively, the "Services"). By accessing or using the Services, you agree to be
              bound by these Terms.
            </p>

            <h2 className="text-xl font-semibold">1. Eligibility & Accounts</h2>
            <p>
              You must be at least 18 years old to use the Services. If account functionality is offered, you are responsible
              for maintaining the confidentiality of any login credentials and for all activities under your account.
            </p>

            <h2 className="text-xl font-semibold">2. Educational Content</h2>
            <p>
              Our content is for educational purposes only. Bitcoin Envoy does not provide financial, investment,
              tax, or legal advice. You are solely responsible for your decisions and actions.
            </p>

            <h2 className="text-xl font-semibold">3. Fees & Refunds</h2>
            <p>
              If fees apply to certain Services, payment terms will be presented at the time of purchase. Unless otherwise
              stated, payments are non-refundable except as required by law.
            </p>

            <h2 className="text-xl font-semibold">4. Acceptable Use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Do not use the Services for unlawful, harmful, or abusive activities.</li>
              <li>Do not attempt to disrupt, reverse engineer, or gain unauthorized access to the Services.</li>
              <li>Respect intellectual property and the rights of others.</li>
            </ul>

            <h2 className="text-xl font-semibold">5. Intellectual Property</h2>
            <p>
              The Services and all related content are owned by or licensed to Bitcoin Envoy and protected by intellectual
              property laws. You may not copy, modify, distribute, or create derivative works without prior written consent.
            </p>

            <h2 className="text-xl font-semibold">6. Third-Party Links</h2>
            <p>
              The Services may include links to third-party websites. We are not responsible for the content, policies, or
              practices of third parties.
            </p>

            <h2 className="text-xl font-semibold">7. Disclaimers</h2>
            <p>
              The Services are provided "as is" and "as available" without warranties of any kind, express or implied, including
              but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>

            <h2 className="text-xl font-semibold">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Bitcoin Envoy will not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
            </p>

            <h2 className="text-xl font-semibold">9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Bitcoin Envoy and its representatives from any claims, liabilities,
              damages, losses, and expenses arising from your use of the Services or violation of these Terms.
            </p>

            <h2 className="text-xl font-semibold">10. Governing Law</h2>
            <p>
              These Terms and any dispute arising out of or related to them are governed by the laws of the State of Georgia,
              without regard to its conflict of laws principles.
            </p>

            <h2 className="text-xl font-semibold">11. Changes to the Services or Terms</h2>
            <p>
              We may update the Services and these Terms from time to time. The updated version will be posted on this page with
              a revised "Last updated" date.
            </p>

            <h2 className="text-xl font-semibold">12. Contact</h2>
            <p>
              For questions about these Terms, contact us at {" "}
              <a className="underline" href="mailto:contact@bitcoinenvoy.co">contact@bitcoinenvoy.co</a>.
            </p>
          </article>
        </section>
        </main>
      </ErrorBoundary>
    </>
  );
};

export default TermsOfService;
