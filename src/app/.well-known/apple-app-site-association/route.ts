import { NextResponse } from 'next/server';

const appleAppSiteAssociation = {
  applinks: {
    apps: [],
    details: [
      {
        appIDs: ['6SVX253P8Y.org.fidcent.wishwing'],
        components: [
          {
            '/': '/wishlists/shared/*',
            comment: 'Shared wishlist deep links',
          },
        ],
      },
    ],
  },
};

export function GET() {
  return NextResponse.json(appleAppSiteAssociation, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
