import React, { useLayoutEffect } from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

/**
 * Set or replace a <meta> tag in <head> by attribute key+value.
 * Used to guarantee the prerender snapshot picks up per-page metadata,
 * since react-helmet-async writes asynchronously.
 */
function setMetaTag(attr: "name" | "property", key: string, content: string) {
  if (typeof document === "undefined") return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkTag(rel: string, href: string) {
  if (typeof document === "undefined") return;
  // Remove any default placeholder tag first (e.g. the canonical baked
  // into index.html at build time) so we don't end up with duplicates.
  document.head
    .querySelectorAll<HTMLLinkElement>(`link[rel="${rel}"][data-default-canonical]`)
    .forEach((n) => n.remove());
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setStructuredData(data: object | undefined, id = "seo-structured-data") {
  if (typeof document === "undefined") return;
  let el = document.head.querySelector<HTMLScriptElement>(`script[data-seo="${id}"]`);
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-seo", id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = "/og-image-update.png",
  url,
  type = "website",
  structuredData,
}) => {
  const siteTitle = "Bitcoin Envoy - Bitcoin Education & Coaching";
  const fullTitle = title.includes("Bitcoin Envoy") ? title : `${title} | ${siteTitle}`;
  // Use the production origin for canonical/OG URLs so prerendered HTML
  // doesn't leak the puppeteer/dev host (e.g. http://localhost:45678).
  // For images we still allow the runtime origin as a fallback.
  const PROD_ORIGIN = "https://bitcoinenvoy.co";
  const runtimeOrigin =
    typeof window !== "undefined" ? window.location.origin : PROD_ORIGIN;
  const isLocalhost =
    runtimeOrigin.includes("localhost") || runtimeOrigin.includes("127.0.0.1");
  const siteUrl = isLocalhost ? PROD_ORIGIN : runtimeOrigin;
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  // Synchronously mirror metadata into <head> on every render so that
  // (a) react-snap captures the correct per-page tags during prerender, and
  // (b) client-side route changes update tags immediately.
  useLayoutEffect(() => {
    document.title = fullTitle;
    setMetaTag("name", "title", fullTitle);
    setMetaTag("name", "description", description);
    if (keywords) setMetaTag("name", "keywords", keywords);
    setLinkTag("canonical", fullUrl);
    setMetaTag("property", "og:type", type);
    setMetaTag("property", "og:url", fullUrl);
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", fullImageUrl);
    setMetaTag("property", "og:site_name", "Bitcoin Envoy");
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:url", fullUrl);
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", fullImageUrl);
    setStructuredData(structuredData);
  }, [
    fullTitle,
    description,
    keywords,
    fullUrl,
    type,
    fullImageUrl,
    structuredData,
  ]);

  // Helmet kept for consistency / future SSR; the useLayoutEffect above is the
  // source of truth for the DOM head during prerender + client navigation.
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="Bitcoin Envoy" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
