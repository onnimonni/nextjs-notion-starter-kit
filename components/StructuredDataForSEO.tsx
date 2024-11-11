import { socialLinks } from '@/components/PageSocial'
import * as config from '@/lib/config'


export function StructuredDataForSEO() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_STRUCTURED_DATA) }}
    />
  )
}

// FIXME: Add configurable address and the products so that we can use this same data elsewhere
const JSON_LD_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${config.host}/#webpage`,
      "url": `${config.host}/`,
      "name": config.name,
      "isPartOf": { "@id": `${config.host}/#website` },
      "about": { "@id": `${config.host}/#organization` },
      "datePublished": "2023-12-16T21:29:41+00:00",
      "dateModified": "2024-11-10T13:02:01+00:00",
      "description": config.description,
      "inLanguage": {
        "@type": "Language",
        "alternateName": config.language
      },
      "potentialAction": [
        { "@type": "ReadAction", "target": [`${config.host}/`] }
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${config.host}/#website`,
      "url": `${config.host}/`,
      "name": config.name,
      "description": config.description,
      "publisher": { "@id": `${config.host}/#organization` },
      "inLanguage": {
        "@type": "Language",
        "alternateName": config.language
      }
    },
    {
      "@type": "Organization",
      "@id": `${config.host}/#organization`,
      "name": config.legal_name,
      "url": `${config.host}/`,
      "logo": `${config.host}/favicon.svg`,
      "email": config.email,
      "telephone": config.telephone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jyväskylä",
        "addressCountry": "FI",
        "addressRegion": "Keski-Suomi",
        "postalCode": "40100",
        "streetAddress": "Kauppakatu 25"
      },
      "vatID": config.company_vat_id,
      "sameAs": socialLinks.map(link => link.href),
    },
    {
      "@context": "https://schema.org/",
      "@type": "LocalBusiness",
      "@id": `${config.host}/#localbusiness`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jyväskylä",
        "addressCountry": "FI",
        "addressRegion": "Keski-Suomi",
        "postalCode": "40100",
        "streetAddress": "Kauppakatu 25"
      },
      "url": `${config.host}/`,
      "description": config.description,
      "name": config.name,
      "priceRange": "35-50€",
      "telephone": config.telephone
    },
    {
      "@context": "https://schema.org/",
      "@type": "Service",
      "@id": `${config.host}/#service`,
      "serviceType": "Private Tutor",
      "provider": {
        "@type": "LocalBusiness",
        "@id": `${config.host}/#localbusiness`,
      },
      "areaServed": {
        "@type": "Country",
        "name": "Finland"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Etäopetus",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Oppitunnit peruskoululaisille",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "1h yksityisopetus",
                  "price": "35",
                  "priceCurrency": "EUR"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "1h tukiopetus",
                  "price": "35",
                  "priceCurrency": "EUR"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "1h oppimisen tuki",
                  "price": "35",
                  "priceCurrency": "EUR"
                }
              }
            ]
          }
        ]
      }
    },
    {
        "@type": "Product",
        "@id": `${config.host}/#product`,
        "name": "Tukiopetusta etänä",
        "image": `${config.host}/favicon.svg`,
        "description": "Tukiopetusta etänä erityisopetuksen asiantuntijalta suomen kielellä Google Meet -alustalla",
        "keywords": "Tukiopetus, Erityisopettaja, Etäopetus, Suomi, Peruskoulu, Yläaste, Matematiikka, Äidinkieli",
        "sku": "keksi-labs-tukiopetus",
        "brand": {
            "@type": "Brand",
            "name": "Keksi Labs"
        },
        "offers": {
            "@type": "Offer",
            "url": `${config.host}/ajanvaraus`,
            "priceValidUntil": "2024-12-31T22:00",
            "priceCurrency": "EUR",
            "price": "35",
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "@id": `${config.host}/#organization`
            }
        },
        "review": [{
          "@type": "Review",
          "datePublished": "2024-09-02",
          "name": "Ei tarvinnut jäädä yksin läksyjen kanssa",
          "reviewBody": "Motivaatio oli nuorella vähän hakusessa ja yhdessä Merin kanssa hän löysi ihan uuden vaihteen koulutöiden tekemiseen ja ovet mieluisaan lukioon aukesivat.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5
          },
          "author": {
            "@type": "Person",
            "name": "Johanna",
          }
        }],
        "aggregateRating": {
            "@type": "AggregateRating",
            "bestRating": 5,
            "worstRating": 1,
            "ratingCount": 4,
            "ratingValue": 5
        }
    }
  ]
};
