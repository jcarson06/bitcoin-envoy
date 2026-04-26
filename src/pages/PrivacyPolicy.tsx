import React from "react";
import SEO from "@/components/SEO";
import ErrorBoundary from "@/components/common/ErrorBoundary";

const PrivacyPolicy: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: "https://bitcoinenvoy.co/privacy-policy",
    description:
      "Read Bitcoin Envoy's Privacy Policy to learn how we collect, use, and protect your information.",
    publisher: {
      "@type": "Organization",
      name: "Bitcoin Envoy",
      email: "contact@bitcoinenvoy.co",
    },
  };

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read Bitcoin Envoy's Privacy Policy to learn how we collect, use, and protect your information."
        url="/privacy-policy"
        structuredData={structuredData}
      />

      <ErrorBoundary>
        <main className="min-h-screen bg-white">
        <header className="section-container py-12">
          <h1 className="text-3xl font-semibold">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: August 11, 2025</p>
        </header>
        <section className="section-container pb-16">
          <article className="mx-auto max-w-3xl space-y-6 leading-relaxed">
            <p>
              This Privacy Policy explains how Bitcoin Envoy ("we", "us", or "our") collects, uses, and protects your
              information when you visit our website, engage with our educational content, or request coaching services.
            </p>

            <h2 className="text-xl font-semibold">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Contact information: such as your name and email address when you subscribe to updates or contact us.
              </li>
              <li>
                Usage data: including pages visited, links clicked, and general analytics collected via cookies or similar technologies.
              </li>
              <li>
                Communications: messages and inquiries you send to us regarding coaching or educational materials.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide educational content and optional coaching services you request.</li>
              <li>To communicate with you about updates, resources, or service-related notices.</li>
              <li>To improve our website, content, and user experience through analytics.</li>
              <li>To comply with legal obligations and enforce our Terms of Service.</li>
            </ul>

            <h2 className="text-xl font-semibold">3. Cookies and Tracking</h2>
            <p>
              We may use cookies or similar technologies to understand how visitors use our site and to improve performance.
              You can control cookies through your browser settings; however, disabling cookies may affect site functionality.
            </p>

            <h2 className="text-xl font-semibold">4. Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share information with service providers that help operate our
              website or deliver communications, only as necessary and under appropriate confidentiality obligations. We may
              also disclose information if required by law or to protect our rights and users.
            </p>

            <h2 className="text-xl font-semibold">5. Data Retention</h2>
            <p>
              We retain personal information only as long as necessary for the purposes described in this Policy, unless a
              longer retention period is required or permitted by law.
            </p>

            <h2 className="text-xl font-semibold">6. Your Choices</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You can unsubscribe from communications at any time by following the instructions in our emails.</li>
              <li>You may request access to or deletion of your information by contacting us at the email below.</li>
            </ul>

            <h2 className="text-xl font-semibold">7. Children's Privacy</h2>
            <p>
              Our services are intended for adults. We do not knowingly collect personal information from children under 13.
              If you believe a child has provided us with personal information, please contact us so we can delete it.
            </p>

            <h2 className="text-xl font-semibold">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the updated version on this page and revise
              the "Last updated" date above.
            </p>

            <h2 className="text-xl font-semibold">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our practices, contact us at
              {" "}
              <a className="underline" href="mailto:contact@bitcoinenvoy.co">contact@bitcoinenvoy.co</a>.
            </p>
          </article>
        </section>
        </main>
      </ErrorBoundary>
    </>
  );
};

export default PrivacyPolicy;
