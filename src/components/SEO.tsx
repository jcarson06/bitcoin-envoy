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

// Hosted OG image. Replace with a self-hosted /og-social.png (1200×630px) when
// ready — this currently depends on a Lovable-owned bucket we don't control.
const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/R8lQS5PGx5bSJbDtC1fKUQEn4u03/social-images/social-1758109489482-Neon%20Bitcoin%20in%20Cyberpunk%20City.png";

// Canonical and OG URLs are always absolute against production. Deriving them
// from window.location instead would make Netlify deploy previews advertise
// themselves as canonical, which is how preview domains end up indexed.
const PROD_ORIGIN = "https://bitcoinenvoy.co";

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
      <meta property="og:site_name" content="Bitcoin Envoy" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bitcoinenvoy" />
      <meta name="twitter:url" content={fullUrl} />
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
