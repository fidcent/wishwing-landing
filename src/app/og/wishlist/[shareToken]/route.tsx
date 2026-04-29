import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const WISHLIST_API_BASE =
  process.env.WISHLIST_API_URL ?? 'https://api.fidcent.com/wishcenter/wishlist/api/v1';

export async function GET(
  _req: NextRequest,
  { params }: Readonly<{ params: { shareToken: string } }>,
) {
  const { shareToken } = params;

  // Fetch wishlist data
  let ownerName = 'Someone';
  let title = 'My Wishlist';
  let description = 'View this wishlist on WishWing';
  let pct = 0;
  let received = 0;
  let needed = 0;
  let itemCount = 0;

  try {
    const res = await fetch(`${WISHLIST_API_BASE}/wishlists/shared/${shareToken}`, {
      cache: 'no-store',
    });
    if (res.ok) {
      const data = await res.json();
      ownerName = data.ownerName ?? ownerName;
      title = data.wishlist?.title ?? title;
      description = data.shareMessage ?? data.wishlist?.description ?? description;
      pct = Math.min(100, Math.max(0, data.wishlist?.progressPercentage ?? 0));
      received = data.wishlist?.totalWishcoinsReceived ?? 0;
      needed = data.wishlist?.totalWishcoinsNeeded ?? 0;
      itemCount = data.wishlist?.itemCount ?? 0;
    }
  } catch {
    // Render a generic branded card on error
  }

  const initials = ownerName
    .split(' ')
    .map((w: string) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const barWidth = Math.round(pct * 6.4); // max 640px

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(145deg, #0F0720 0%, #1E0A3C 40%, #2D1B69 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative glowing orbs */}
        <div style={{ position: 'absolute', top: '-100px', right: '100px', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '200px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(217, 70, 239, 0.2) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', top: '100px', left: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)' }} />

        {/* Top gradient accent line */}
        <div style={{ height: '4px', width: '100%', background: 'linear-gradient(90deg, #7C3AED, #D946EF, #A78BFA, #D946EF, #7C3AED)', flexShrink: 0 }} />

        {/* Main content */}
        <div style={{ flex: 1, display: 'flex', padding: '44px 64px 32px' }}>
          {/* Left column — Owner info */}
          <div style={{ width: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: '48px', flexShrink: 0 }}>
            {/* Avatar */}
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.4), rgba(217, 70, 239, 0.4))',
                border: '2px solid rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '36px',
                fontWeight: '800',
                marginBottom: '20px',
              }}
            >
              {initials}
            </div>

            {/* Label */}
            <div style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(167, 139, 250, 0.8)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
              SHARED WISHLIST
            </div>

            {/* Owner name */}
            <div style={{ fontSize: '24px', fontWeight: '700', color: 'white', marginBottom: '24px', lineHeight: '1.2' }}>
              {ownerName.length > 24 ? ownerName.slice(0, 24) + '…' : ownerName}
            </div>

            {/* Stats pills */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
                <span>📋</span>
                <span>{itemCount} items</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', background: 'rgba(124, 58, 237, 0.2)', border: '1px solid rgba(124, 58, 237, 0.3)', borderRadius: '12px', fontSize: '13px', color: '#A78BFA' }}>
                <span>🪙</span>
                <span>{pct}% funded</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: '1px', background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.12), transparent)', margin: '20px 0', flexShrink: 0 }} />

          {/* Right column — Wishlist details */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '48px' }}>
            {/* Title */}
            <div style={{ fontSize: '40px', fontWeight: '800', color: 'white', lineHeight: '1.15', marginBottom: '14px', maxWidth: '600px' }}>
              {title.length > 50 ? title.slice(0, 47) + '…' : title}
            </div>

            {/* Description */}
            <div style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', maxWidth: '550px', lineHeight: '1.6' }}>
              {description.length > 90 ? description.slice(0, 87) + '…' : description}
            </div>

            {/* Progress bar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ height: '14px', width: '640px', borderRadius: '999px', background: 'rgba(255,255,255,0.08)', overflow: 'hidden', display: 'flex' }}>
                <div
                  style={{
                    height: '14px',
                    width: `${barWidth}px`,
                    borderRadius: '999px',
                    background: 'linear-gradient(90deg, #7C3AED, #A78BFA, #D946EF)',
                  }}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '640px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '22px', fontWeight: '800', color: '#A78BFA' }}>{pct}%</span>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>funded</span>
                </div>
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>
                  {received.toLocaleString()} / {needed.toLocaleString()} WishCoins
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom brand bar */}
        <div
          style={{
            height: '52px',
            background: 'linear-gradient(90deg, rgba(124, 58, 237, 0.3), rgba(217, 70, 239, 0.2), rgba(124, 58, 237, 0.3))',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexShrink: 0,
          }}
        >
          <span style={{ color: 'white', fontSize: '16px', fontWeight: '700', letterSpacing: '2px' }}>
            🪄 WISHWING
          </span>
          <span style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.2)' }} />
          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', fontWeight: '500' }}>
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
