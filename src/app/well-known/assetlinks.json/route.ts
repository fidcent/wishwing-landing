import { NextResponse } from 'next/server';

const assetlinks = [
  {
    relation: ['delegate_permission/common.handle_all_urls'],
    target: {
      namespace: 'android_app',
      package_name: 'org.fidcent.wishwing',
      sha256_cert_fingerprints: [
        'DB:CD:F6:26:27:69:00:96:53:B4:EB:BC:F4:DE:E9:68:A8:4D:57:18:9F:43:17:54:6F:0B:7F:8B:AE:89:56:0E',
      ],
    },
  },
];

export function GET() {
  return NextResponse.json(assetlinks, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
