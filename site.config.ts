import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '0f7d9b7aec8b4d16a064886b245badef',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Keksi Tukiopetus',
  legal_name: 'Keksi Labs Oy',
  company_vat_id: 'FI27345244',
  company_identifier: '2734524-4',
  domain: 'keksi.io',
  author: 'Meri Jyrävä',
  language: 'fi', // override the default english language

  // Analytics and advertising
  google_tag_manager_id: 'GTM-MNWBDNWQ',
  google_adwords_id: 'AW-16758350058',

  // open graph metadata (optional)
  description: 'Tukiopetusta etänä erityisopetuksen asiantuntijalta',

  // Contact information
  telephone: '+358413630091',
  email: 'meri@keksi.io',

  // social usernames (optional)
  //twitter: 'flakybuild',
  //github: 'flakybuild',
  linkedin: 'company/keksilabs',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  instagram: 'keksi_tukiopetus', // optional instagram username
  google_business: 'https://maps.app.goo.gl/39qSFe2uqxNzoeNM9',
  //youtube: '@KeksiTukiopetus', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  // reddit: 'TravelingVanProblem', // optional reddit username

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Hinnasto',
      pageId: '2b2738cdeb98488b99d8c50aed1eab40'
    },
    {
      title: 'Ota yhteyttä',
      pageId: 'aa0d2bdcfe714eb49c3c633d170edd24'
    }
  ],

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  pageUrlOverrides: {
    '/palvelun-ehdot': '1358512e8688809b8980df211624042e',
    '/tietosuojaseloste': '1348512e8688804d9542e585c113dc1c'
  },

  footerLinks: [
    {
      title: 'Palvelun ehdot',
      pageId: '1358512e8688809b8980df211624042e'
    },
    {
      title: 'Tietosuojaseloste',
      pageId: '1348512e8688804d9542e585c113dc1c'
    }
  ]
})
