import { NextResponse } from 'next/server';

// Serve the Apple App Site Association file so iOS can intercept
// wishwing.fidcent.com/wishlists/shared/* links and open the app directly.
//
// Replace <TEAM_ID> with your Apple Developer Team ID before deploying.
const AASA = {
  applinks: {
    details: [
      {
        appIDs: ['<TEAM_ID>.com.fidcent.wishwing'],
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
  return new NextResponse(JSON.stringify(AASA, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      // Cache for 1 hour — Apple re-fetches this periodically
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
