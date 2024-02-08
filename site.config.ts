import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '913af13d078d4ccbbd3fe16afc0ea17f',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Flaky Build',
  domain: 'flaky.build',
  author: 'Onni Hakala',

  // open graph metadata (optional)
  description: "Undeterministic blog on product development and software engineering 💻🔥",

  // social usernames (optional)
  twitter: 'flakybuild',
  github: 'flakybuild',
  linkedin: 'company/flaky-build',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  instagram: 'flaky.build', // optional instagram username
  // youtube: 'TravelingVanProblem', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
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

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'custom',
  // navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      url: '/about-us'
    }
  ],

  footerLinks: [
    {
      title: 'Terms and Conditions',
      url: '/terms-and-conditions'
    },
    {
      title: 'Privacy Policy',
      url: '/privacy-policy'
    },
    {
      title: 'Affiliate Disclosure',
      url: '/affiliate-disclosure'
    },
    {
      title: 'Security Policy',
      url: '/security-policy'
    }
  ]
})
