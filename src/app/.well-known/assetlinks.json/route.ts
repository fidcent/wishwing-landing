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
      sha256_cert_fingerprints: ['<YOUR_SHA256_FINGERPRINT>'],
    },
  },
];

export function GET() {
  return new NextResponse(JSON.stringify(ASSET_LINKS, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
