/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  staticPageGenerationTimeout: 120,
  rewrites: async () => [
    {
      source: '/.well-known/assetlinks.json',
      destination: '/well-known/assetlinks.json',
    },
    {
      source: '/.well-known/apple-app-site-association',
      destination: '/well-known/apple-app-site-association',
    },
  ],
  headers: async () => [
    // OG images — aggressive public caching so social crawlers benefit
    {
      source: '/og/wishlist/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=86400, stale-while-revalidate=3600',
        },
      ],
    },
    // .well-known files must be accessible to Apple / Google verification servers
    {
      source: '/.well-known/(.*)',
      headers: [
        {
          key: 'Access-Control-Allow-Origin',
          value: '*',
        },
      ],
    },
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()',
        },
      ],
    },
  ],
};

module.exports = nextConfig;
