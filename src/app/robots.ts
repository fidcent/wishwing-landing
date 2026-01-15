import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/manifest.json',
          '/*.json$',
          '/_next/',
        ],
      },
    ],
    sitemap: 'https://wishwing.fidcent.com/sitemap.xml',
  };
}
