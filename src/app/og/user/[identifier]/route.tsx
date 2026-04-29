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
  let fidId = '';

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
      fidId = data.fidId ?? '';
    }
  } catch {
    // Render a generic branded card on error
  }

  const truncatedName = displayName.length > 20 ? displayName.slice(0, 20) + '…' : displayName;

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          background: 'linear-gradient(145deg, #0F0720 0%, #1E0A3C 35%, #2D1B69 70%, #1E0A3C 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative glowing orbs */}
        <div style={{ position: 'absolute', top: '-120px', right: '-80px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(217, 70, 239, 0.2) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '250px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', top: '50px', left: '-30px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(167, 139, 250, 0.12) 0%, transparent 70%)' }} />
        
        {/* Subtle grid pattern overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255,255,255,0.01)' }} />

        {/* Top gradient accent line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #7C3AED, #D946EF, #A78BFA, #D946EF, #7C3AED)' }} />

        {/* Left — Avatar panel */}
        <div
          style={{
            width: '420px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px 48px',
            gap: '24px',
            flexShrink: 0,
          }}
        >
          {/* Avatar with glow ring */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Glow behind avatar */}
            <div style={{ position: 'absolute', width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, transparent 70%)' }} />
            <div
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(217, 70, 239, 0.2))',
                border: '3px solid rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '88px',
                lineHeight: '1',
                position: 'relative',
              }}
            >
              {avatarEmoji}
            </div>
          </div>

          {isPremium && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingTop: '8px',
                paddingBottom: '8px',
                background: 'linear-gradient(135deg, #FCD34D, #F59E0B)',
                borderRadius: '999px',
                fontSize: '14px',
                fontWeight: '700',
                color: '#78350F',
              }}
            >
              <span>⭐</span>
              <span>Premium Member</span>
            </div>
          )}
        </div>

        {/* Divider */}
        <div style={{ width: '1px', background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.12), transparent)', margin: '60px 0', flexShrink: 0 }} />

        {/* Right — Info panel */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 64px 60px 56px',
          }}
        >
          {/* Brand tag */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '32px',
            }}
          >
            <span style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(167, 139, 250, 0.6)', letterSpacing: '3px', textTransform: 'uppercase' }}>
              🪄 WISHWING PROFILE
            </span>
          </div>

          {/* Display name */}
          <div
            style={{
              fontSize: '52px',
              fontWeight: '800',
              color: 'white',
              lineHeight: '1.1',
              marginBottom: '12px',
            }}
          >
            {truncatedName}
          </div>

          {/* Username */}
          <div
            style={{
              fontSize: '22px',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '12px',
              fontWeight: '500',
            }}
          >
            {username}
          </div>

          {/* FID ID if available */}
          {fidId && (
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.3)', marginBottom: '32px' }}>
              FID: {fidId}
            </div>
          )}

          {/* CTA pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              paddingLeft: '24px',
              paddingRight: '32px',
              paddingTop: '16px',
              paddingBottom: '16px',
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(217, 70, 239, 0.15))',
              border: '1.5px solid rgba(167, 139, 250, 0.25)',
              borderRadius: '18px',
              fontSize: '18px',
              fontWeight: '600',
              color: 'white',
              alignSelf: 'flex-start',
            }}
          >
            <span style={{ fontSize: '24px' }}>🎁</span>
            <span>View Profile & Send Gifts</span>
          </div>
        </div>

        {/* Bottom brand bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '48px',
            background: 'linear-gradient(90deg, rgba(124, 58, 237, 0.25), rgba(217, 70, 239, 0.15), rgba(124, 58, 237, 0.25))',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          <span style={{ color: 'white', fontSize: '15px', fontWeight: '700', letterSpacing: '2px' }}>
            🪄 WISHWING
          </span>
          <span style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.2)' }} />
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontWeight: '500' }}>
            Nigeria&apos;s Digital Gifting Platform
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
