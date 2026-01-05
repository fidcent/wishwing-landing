# Create OG Image Instructions

## Required Specifications
- **Size:** 1200 x 630 pixels (EXACT - this is critical for social media)
- **Format:** PNG
- **Filename:** `og-image.png`
- **Location:** `c:\FTL\GitHub\wishwing-landing\public\og-image.png`

## Design Elements to Include

### 1. Base Elements
- Use the existing logo: `public/wishwing-logo.png` or `public/logo.png`
- Background: Purple gradient (#7C3AED to darker purple)
- Ensure sufficient contrast for text readability

### 2. Text Elements
**Primary Headline:**
```
WishWing by Fidcent
```

**Subheadline:**
```
Digital Gifting & Celebration App
```

**Call-to-Action:**
```
Get 1000 FREE WishCoins!
```

**Launch Date:**
```
Launching Jan 7, 2026
```

**Location Badge:**
```
🇳🇬 Nigeria
```

### 3. Visual Elements
- App mockup/phone screenshot (if available)
- Gift icons (🎁, 📱, 💳)
- Nigerian flag emoji or green-white-green colors
- WishCoin icon or currency symbol

## Design Tools You Can Use

### Option 1: Canva (Easiest - Recommended)
1. Go to [canva.com](https://www.canva.com)
2. Create custom size: 1200 x 630 px
3. Search template: "Open Graph" or "Facebook Post"
4. Upload logo from `public/wishwing-logo.png`
5. Add text elements listed above
6. Download as PNG

### Option 2: Figma (Professional)
1. Create new frame: 1200 x 630 px
2. Import logo
3. Design layout with text and elements
4. Export as PNG at 1x resolution

### Option 3: Photoshop/GIMP
1. New document: 1200 x 630 px, 72 DPI
2. Add background gradient
3. Place logo
4. Add text layers
5. Save as PNG

### Option 4: Online OG Image Generator
- [ogimage.xyz](https://og-image.xyz/)
- [cloudinary.com](https://www.cloudinary.com/tools/og-image-generator)

## Layout Suggestion

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  [WishWing Logo]          🇳🇬 Nigeria               │
│                                                      │
│                                                      │
│         WishWing by Fidcent                         │
│    Digital Gifting & Celebration App                │
│                                                      │
│      🎁  Send Airtime  •  📱  Data  •  🎂  Gifts   │
│                                                      │
│            Launching Jan 7, 2026                     │
│                                                      │
│        🎉 Get 1000 FREE WishCoins! 🎉               │
│                                                      │
└──────────────────────────────────────────────────────┘
```

## Color Palette
- Primary Purple: `#7C3AED`
- Dark Purple: `#5B21B6`
- White: `#FFFFFF`
- Light Gray: `#F3F4F6`
- Accent Green (Nigeria): `#008751`

## Typography
- Headline: Bold, 72-80px
- Subheadline: Semi-bold, 42-48px
- Body: Regular, 32-36px
- CTA: Bold, 48-52px

## Testing After Creation

After creating the image, test it on:

1. **Facebook Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Enter: https://wishwing.fidcent.com
   - Click "Scrape Again"

2. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Enter: https://wishwing.fidcent.com

3. **LinkedIn Post Inspector**
   - URL: https://www.linkedin.com/post-inspector/
   - Enter: https://wishwing.fidcent.com

4. **WhatsApp Preview**
   - Send link in WhatsApp to yourself
   - Check preview appearance

## Quick Online Tools

If you need to create it RIGHT NOW:

### Using Logo + Text Overlay (5 minutes)
```bash
# If you have ImageMagick installed:
magick convert -size 1200x630 gradient:#7C3AED-#5B21B6 og-base.png
magick composite -gravity center wishwing-logo.png og-base.png og-temp.png
magick convert og-temp.png -gravity north -pointsize 72 -fill white -annotate +0+50 'WishWing by Fidcent' og-image.png
```

### Using Canva (Fastest for non-developers)
1. Use this template link: https://www.canva.com/templates/s/facebook-post/
2. Resize to 1200 x 630 px
3. Upload `wishwing-logo.png`
4. Add text and elements
5. Download as PNG

## Checklist Before Publishing

- [ ] Image is exactly 1200 x 630 pixels
- [ ] File size is under 8MB (preferably under 1MB)
- [ ] Saved as `og-image.png` in `/public/` folder
- [ ] Logo is clearly visible
- [ ] Text is readable at small sizes
- [ ] All important content is within "safe zone" (100px padding from edges)
- [ ] Tested on Facebook Debugger
- [ ] Tested on Twitter Card Validator
- [ ] Colors match brand (purple #7C3AED)
- [ ] "Fidcent" branding is visible

## After Creation

1. Save file to: `c:\FTL\GitHub\wishwing-landing\public\og-image.png`
2. Commit to git
3. Deploy to production
4. Clear social media caches using validators above
5. Test by sharing link on social platforms

---

**Need help?** The metadata is already configured to use `/og-image.png` - you just need to create the image file!
