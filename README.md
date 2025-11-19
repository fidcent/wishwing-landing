# WishWing Landing Page

A modern, responsive landing page for WishWing - the smart birthday reminder and gifting app.

## Features

- ✨ Modern, clean design with gradient backgrounds
- 🎨 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Smooth animations using Framer Motion
- 🎯 SEO optimized
- 📱 Mobile-first approach
- 🎪 Interactive components
- 🌈 Beautiful color scheme matching brand guidelines

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (ready to use)
- **Font**: Inter (sans-serif) & Pacifico (display)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
wishwing-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Navigation.tsx    # Header navigation
│       ├── Hero.tsx          # Hero section with CTA
│       ├── Features.tsx      # Features grid
│       ├── HowItWorks.tsx    # 3-step process
│       ├── WishCoinSection.tsx  # WishCoin explainer
│       ├── GiftingShowcase.tsx  # Gift categories
│       ├── Testimonials.tsx  # Customer testimonials
│       ├── CTASection.tsx    # Final conversion CTA
│       └── Footer.tsx        # Footer with links
├── public/                   # Static assets (add images here)
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies

```

## Design System

### Colors
- **Primary Purple**: #6C63FF
- **Secondary Purple**: #9B4DFF
- **Accent Pink**: #C147E9
- **WishCoin Gold**: #FFD700

### Typography
- **Display Font**: Pacifico (for logo and headings)
- **Body Font**: Inter (for all other text)

### Components

All components are modular and follow React best practices:
- Type-safe with TypeScript
- Responsive by default
- Accessible with proper ARIA labels
- Optimized performance

## Customization

### Adding Images

Place images in the `public/` folder and reference them in components:
```tsx
import Image from 'next/image';

<Image src="/logo.png" alt="WishWing Logo" width={40} height={40} />
```

### Modifying Colors

Update colors in `tailwind.config.ts` under the `colors` section.

### Adding New Sections

Create new component in `src/components/` and import it in `src/app/page.tsx`.

## SEO

The site includes:
- Meta tags for social sharing
- OpenGraph tags
- Structured semantic HTML
- Optimized title and description
- Mobile-friendly viewport settings

## Performance

- Optimized images with Next.js Image component
- Lazy loading for below-fold content
- Minimal JavaScript bundle
- Fast initial page load
- Smooth animations

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

Copyright © 2025 WishWing - A product of Fidcent

## Contributing

This is a proprietary project. For any questions or contributions, please contact the development team.

## Support

For support, email hello_wishwing@fidcent.com or visit our website at wishwing.fidcent.com.
