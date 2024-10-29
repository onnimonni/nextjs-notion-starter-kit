import * as React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { IconContext } from '@react-icons/all-files'

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='fi'>
          <Head>
            {/* These were generated with https://favicon.inbrowser.app/tools/favicon-generator */}
            <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
            <link rel="icon" href="/favicon.ico" sizes="48x48"/>
            <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml"/>
            <link rel="manifest" href="/site.webmanifest"/>

            {/* Remember to keep the key="" attributes here if you change favicon and theme colors */}
            <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fefffe" key="theme-color-light"/>
            <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#2d3439" key="theme-color-dark"/>

            {/* Try to get better Google visibility by adding the machine readable version here */}
            {(
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                      {
                        "@type": "WebPage",
                        "@id": "https://keksi.io/",
                        "url": "https://keksi.io/",
                        "name": "Tukiopetusta etänä erityisopetuksen asiantuntijalta",
                        "isPartOf": { "@id": "https://keksi.io/#website" },
                        "about": { "@id": "https://keksi.io/#organization" },
                        "datePublished": "2023-12-16T21:29:41+00:00",
                        "dateModified": "2024-10-29T13:02:01+00:00",
                        "description": "Yksilöllistettyä opetusta erityispedagogiikan ammattilaiselta - Keksi Labs Oy",
                        "breadcrumb": { "@id": "https://keksi.io/#breadcrumb" },
                        "inLanguage": "fi",
                        "potentialAction": [
                          { "@type": "ReadAction", "target": ["https://keksi.io/"] }
                        ]
                      },
                      {
                        "@type": "BreadcrumbList",
                        "@id": "https://keksi.io/#breadcrumb",
                        "itemListElement": [
                          { "@type": "ListItem", "position": 1, "name": "Etusivu" }
                        ]
                      },
                      {
                        "@type": "WebSite",
                        "@id": "https://keksi.io/#website",
                        "url": "https://keksi.io/",
                        "name": "Keksi Labs",
                        "description": "Yksilöllistä tukiopetusta etänä",
                        "publisher": { "@id": "https://keksi.io/#organization" },
                        "inLanguage": "fi"
                      },
                      {
                        "@type": "Organization",
                        "@id": "https://keksi.io/#organization",
                        "name": "Keksi Labs",
                        "url": "https://keksi.io/",
                        "logo": "https://keksi.io/favicon.svg",
                        "email": "meri@keksi.io",
                        "telephone": "+47-99-999-9999",
                        "address": {
                          "@type": "PostalAddress",
                          "addressLocality": "Tampere",
                          "addressCountry": "FI",
                          "addressRegion": "Pirkanmaa"
                        },
                        "vatID": "FI27345244",
                        "sameAs": [
                          "https://www.instagram.com/keksi_labs",
                          "https://www.linkedin.com/company/keksilabs"
                        ]
                      },
                      {
                          "@type": "Product",
                          "@id": "https://keksi.io/#product",
                          "name": "Tukiopetusta etänä",
                          "image": "https://keksi.io/favicon.svg",
                          "description": "Tukiopetusta etänä erityisopetuksen asiantuntijalta suomen kielellä Google Meet -alustalla",
                          "keywords": "Tukiopetus, Erityisopettaja, Etäopetus, Suomi, Peruskoulu, Yläaste, Matematiikka, Äidinkieli",
                          "sku": "",
                          "brand": {
                              "@type": "Brand",
                              "name": "Keksi Labs"
                          },
                          "offers": {
                              "@type": "Offer",
                              "url": "https://keksi.io/ajanvaraus",
                              "priceCurrency": "EUR",
                              "price": "50",
                              "availability": "https://schema.org/InStock",
                              "seller": {
                                  "@type": "Organization",
                                  "@id": "https://keksi.io/#organization"
                              }
                          },
                          "review": [{
                            "@type": "Review",
                            "datePublished": "2024-09-02",
                            "name": "Ei tarvinnut jäädä yksin läksyjen kanssa",
                            "reviewBody": "Motivaatio oli nuorella vähän hakusessa ja yhdessä Merin kanssa hän löysi ihan uuden vaihteen koulutöiden tekemiseen ja ovet mieluisaan lukioon aukesivat. ",
                            "reviewRating": {
                              "@type": "Rating",
                              "ratingValue": 5
                            },
                            "author": {
                              "@type": "Person",
                              "name": "Johanna Kivistö",
                              "sameAs": [
                                "https://www.linkedin.com/in/johanna-kivist%C3%B6-she-her-90b0942/"
                              ]
                            }
                          }],
                          "aggregateRating": {
                              "@type": "AggregateRating",
                              "bestRating": 5,
                              "worstRating": 1,
                              "ratingCount": 3,
                              "ratingValue": 5
                          }
                      }
                    ]
                  }),
                }}
              />
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
