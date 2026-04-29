import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const IDENTITY_API_BASE =
  process.env.IDENTITY_API_URL ?? 'https://api.fidcent.com/identity/api/v1';

export async function GET(
  _req: NextRequest,
  { params }: Readonly<{ params: { identifier: string } }>,
) {
  const { identifier } = params;

  // Fetch user profile data
  let displayName = 'User';
  let username = '@user';
  let avatarEmoji = '👤';
  let isPremium = false;

  try {
    const res = await fetch(
      `${IDENTITY_API_BASE}/users/public-profile?identifier=${encodeURIComponent(identifier)}`,
      {
        cache: 'no-store',
      },
    );
    if (res.ok) {
      const { data } = await res.json();
      displayName = data.displayName ?? displayName;
        username = data.username ? `@${data.username}` : username;
      avatarEmoji = data.avatarEmoji ?? avatarEmoji;
      isPremium = data.isPremium ?? false;
    }
  } catch {
    // Render a generic branded card on error
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #F5F3FF 0%, #FDF4FF 50%, #F5F3FF 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background blobs */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            left: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(124, 58, 237, 0.12)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-60px',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'rgba(217, 70, 239, 0.12)',
          }}
        />

        {/* Top gradient bar */}
        <div
          style={{
            height: '6px',
            width: '100%',
            background: 'linear-gradient(90deg, #7C3AED, #D946EF, #7C3AED)',
          }}
        />

        {/* Content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '48px 80px',
            textAlign: 'center',
          }}
        >
          {/* Avatar emoji */}
          <div
            style={{
              fontSize: '80px',
              marginBottom: '24px',
              lineHeight: '1',
            }}
          >
            {avatarEmoji}
          </div>

          {/* Display name */}
          <div
            style={{
              fontSize: '48px',
              fontWeight: '800',
              color: '#171717',
              marginBottom: '8px',
            }}
          >
            {displayName}
          </div>

          {/* Username */}
          <div
            style={{
              fontSize: '24px',
              color: '#737373',
              marginBottom: '24px',
            }}
          >
            {username}
          </div>

          {/* Premium badge */}
          {isPremium && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '8px',
                paddingBottom: '8px',
                background: 'linear-gradient(135deg, #FCD34D, #FBBF24)',
                borderRadius: '999px',
                fontSize: '16px',
                fontWeight: '600',
                color: '#78350F',
                marginBottom: '32px',
              }}
            >
              <span>⭐</span>
              <span>Premium Member</span>
            </div>
          )}

          {/* CTA text */}
          <div
            style={{
              fontSize: '18px',
              color: '#525252',
              marginTop: '16px',
            }}
          >
            Check out this profile on WishWing
          </div>
        </div>

        {/* Bottom brand strip */}
        <div
          style={{
            height: '56px',
            background: 'linear-gradient(90deg, #7C3AED, #D946EF)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <span style={{ color: 'white', fontSize: '18px', fontWeight: '700', letterSpacing: '1px' }}>
            🪄 WISHWING
          </span>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px' }}>
            Nigeria&apos;s Digital Gifting Platform
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
