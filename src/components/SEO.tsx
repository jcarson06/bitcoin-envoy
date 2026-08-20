import React from "react";
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

// Self-hosted OG card, 1200×630 — the 2:1 ratio X requires for
// summary_large_image. Regenerate with build/README.md if the wording changes;
// the declared og:image:width/height below must keep matching the real file.
const DEFAULT_OG_IMAGE = "/og-image.jpg";

// Canonical and OG URLs are always absolute against production. Deriving them
// from window.location instead would make Netlify deploy previews advertise
// themselves as canonical, which is how preview domains end up indexed.
const PROD_ORIGIN = "https://www.bitcoinenvoy.co";

/**
 * Per-page document head.
 *
 * Helmet is the single source of truth. This component used to *also* mirror
 * every tag into the DOM imperatively from a layout effect — a leftover from
 * the react-snap era, when the prerenderer scraped a real browser DOM. The
 * current prerenderer (scripts/prerender.mjs) renders with renderToString and
 * reads Helmet's server state directly, so that second path was pure
 * duplication. It also re-ran on every single render: `structuredData` is built
 * as a fresh object literal by each page, so it never compared equal in the
 * dependency array, costing a JSON.stringify and ~17 DOM writes per render.
 */
const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = DEFAULT_OG_IMAGE,
  url,
  type = "website",
  structuredData,
}) => {
  const siteTitle = "Bitcoin Envoy - Bitcoin Education";
  const fullTitle = title.includes("Bitcoin Envoy") ? title : `${title} | ${siteTitle}`;
  const fullUrl = url ? `${PROD_ORIGIN}${url}` : PROD_ORIGIN;
  const fullImageUrl = image.startsWith("http") ? image : `${PROD_ORIGIN}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content="Bitcoin Envoy — Bitcoin for Beginners" />
      <meta property="og:site_name" content="Bitcoin Envoy" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bitcoinenvoy" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content="Bitcoin Envoy — Bitcoin for Beginners" />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
