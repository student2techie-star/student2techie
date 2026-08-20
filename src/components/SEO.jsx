import { Helmet } from 'react-helmet-async';
import { defaultKeywords } from '../Data/seoKeywords';

export default function SEO({ title, description, url, type = "website", keywords, schemaMarkup }) {
  const siteUrl = "https://student2techie.in";
  const canonicalUrl = url ? `${siteUrl}${url}` : siteUrl;

  // Use provided keywords array or default back to the general ones
  const metaKeywords = keywords ? keywords.join(", ") : defaultKeywords.join(", ");

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph tags for social media sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD Schema Markup */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
}
