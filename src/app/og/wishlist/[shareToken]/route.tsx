import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const WISHLIST_API_BASE =
  process.env.WISHLIST_API_URL ?? 'https://api-dev.fidcent.com/wishcenter/wishlist/api/v1';

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

  try {
    const res = await fetch(`${WISHLIST_API_BASE}/wishlists/shared/${shareToken}`, {
      // Don't cache errors — a fresh fetch on each OG request is fine at edge
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

  const barWidth = Math.round(pct * 7.2); // 720px wide bar max ≈ 60% of 1200

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
            padding: '48px 80px',
          }}
        >
          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
            {/* Avatar */}
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, #7C3AED, #D946EF)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '28px',
                fontWeight: '700',
              }}
            >
              {initials}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  color: '#A78BFA',
                  marginBottom: '4px',
                }}
              >
                SHARED WISHLIST
              </span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: '#171717' }}>
                {ownerName}
              </span>
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '46px',
              fontWeight: '800',
              color: '#171717',
              lineHeight: '1.15',
              marginBottom: '16px',
              maxWidth: '900px',
            }}
          >
            {title.length > 60 ? title.slice(0, 57) + '…' : title}
          </div>

          {/* Description / share message */}
          <div
            style={{
              fontSize: '20px',
              color: '#525252',
              marginBottom: '36px',
              maxWidth: '800px',
              lineHeight: '1.5',
            }}
          >
            {description.length > 100 ? description.slice(0, 97) + '…' : description}
          </div>

          {/* Progress bar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div
              style={{
                height: '12px',
                width: '720px',
                borderRadius: '999px',
                background: '#E5E5E5',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '12px',
                  width: `${barWidth}px`,
                  borderRadius: '999px',
                  background: 'linear-gradient(90deg, #7C3AED, #D946EF)',
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: '24px', fontSize: '16px', color: '#525252' }}>
              <span>
                <strong style={{ color: '#7C3AED' }}>{pct}%</strong> funded
              </span>
              <span>
                {received.toLocaleString()} / {needed.toLocaleString()} WishCoins
              </span>
            </div>
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
