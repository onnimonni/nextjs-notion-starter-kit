import Document, { Head, Html, Main, NextScript } from 'next/document'
import { IconContext } from 'react-icons'

import { socialLinks } from '@/components/PageSocial'
import * as config from '@/lib/config'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
            <link rel="icon" href="/favicon.ico" sizes="48x48"/>
            <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml"/>
            <link rel="manifest" href="/site.webmanifest"/>

            {/* Remember to keep the key="" attributes here if you change favicon and theme colors */}
            <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fefffe" key="theme-color-light"/>
            <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#2d3439" key="theme-color-dark"/>

            {/* Try to get better Google visibility by adding the machine readable version here */}
            {(
              <script type="application/ld+json">
                {JSON.stringify({
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
                                    "price": "50",
                                    "priceCurrency": "EUR"
                                  }
                                },
                                {
                                  "@type": "Offer",
                                  "itemOffered": {
                                    "@type": "Service",
                                    "name": "1h tukiopetus",
                                    "price": "50",
                                    "priceCurrency": "EUR"
                                  }
                                },
                                {
                                  "@type": "Offer",
                                  "itemOffered": {
                                    "@type": "Service",
                                    "name": "1h oppimisen tuki",
                                    "price": "50",
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
                              "priceCurrency": "EUR",
                              "price": "50",
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
                  })
                }
              </script>
            )}
          </Head>

          <body>
            <script
              dangerouslySetInnerHTML={{
                __html: `
/** Inlined version of noflash.js from use-dark-mode */
;(function () {
  var storageKey = 'darkMode'
  var classNameDark = 'dark-mode'
  var classNameLight = 'light-mode'
  function setClassOnDocumentBody(darkMode) {
    document.body.classList.add(darkMode ? classNameDark : classNameLight)
    document.body.classList.remove(darkMode ? classNameLight : classNameDark)
  }
  var preferDarkQuery = '(prefers-color-scheme: dark)'
  var mql = window.matchMedia(preferDarkQuery)
  var supportsColorSchemeQuery = mql.media === preferDarkQuery
  var localStorageTheme = null
  try {
    localStorageTheme = localStorage.getItem(storageKey)
  } catch (err) {}
  var localStorageExists = localStorageTheme !== null
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme)
  }
  // Determine the source of truth
  if (localStorageExists) {
    // source of truth from localStorage
    setClassOnDocumentBody(localStorageTheme)
  } else if (supportsColorSchemeQuery) {
    // source of truth from system
    setClassOnDocumentBody(mql.matches)
    localStorage.setItem(storageKey, mql.matches)
  } else {
    // source of truth from document.body
    var isDarkMode = document.body.classList.contains(classNameDark)
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode))
  }
})();
`
              }}
            />
            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
