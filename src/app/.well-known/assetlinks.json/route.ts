import { NextResponse } from 'next/server';

// Serve the Android Asset Links file so Android can verify
// wishwing.fidcent.com/wishlists/shared/* as App Links.
//
// Replace <YOUR_SHA256_FINGERPRINT> with the actual SHA-256 certificate
// fingerprint of your release keystore before deploying.
const ASSET_LINKS = [
  {
    relation: ['delegate_permission/common.handle_all_urls'],
    target: {
      namespace: 'android_app',
      package_name: 'org.fidcent.wishwing',
      sha256_cert_fingerprints: ['DB:CD:F6:26:27:69:00:96:53:B4:EB:BC:F4:DE:E9:68:A8:4D:57:18:9F:43:17:54:6F:0B:7F:8B:AE:89:56:0E'],
    },
  },
];

// export function GET() {
//   return new NextResponse(JSON.stringify(ASSET_LINKS, null, 2), {
//     status: 200,
//     headers: {
//       'Content-Type': 'application/json',
//       'Cache-Control': 'public, max-age=3600',
//     },
//   });
// }
