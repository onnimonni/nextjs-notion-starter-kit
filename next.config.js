// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'transitivebullsh.it'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'notion-utils': '@onnimonni/notion-utils',
      'notion-types': '@onnimonni/notion-types',
      'notion-client': '@onnimonni/notion-client',
      'notion-compat': '@onnimonni/notion-compat',
      'react-notion-x': '@onnimonni/react-notion-x'
    };

    return config;
  },
})
