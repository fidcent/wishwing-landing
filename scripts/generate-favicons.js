const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sourceIcon = path.join(__dirname, '../public/wishwing-logo.png');
const publicDir = path.join(__dirname, '../public');

async function generateFavicons() {
  console.log('Generating favicon files...');

  try {
    // Generate favicon-16x16.png
    await sharp(sourceIcon)
      .resize(16, 16)
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'));
    console.log('✓ favicon-16x16.png');

    // Generate favicon-32x32.png
    await sharp(sourceIcon)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'));
    console.log('✓ favicon-32x32.png');

    // Generate apple-touch-icon.png (180x180)
    await sharp(sourceIcon)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✓ apple-touch-icon.png');

    // Generate icon.png (192x192 for PWA)
    await sharp(sourceIcon)
      .resize(192, 192)
      .png()
      .toFile(path.join(publicDir, 'icon.png'));
    console.log('✓ icon.png (192x192)');

    // Generate icon-512.png (512x512 for PWA)
    await sharp(sourceIcon)
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, 'icon-512.png'));
    console.log('✓ icon-512.png');

    // Generate favicon.ico (multi-size ICO file)
    // For ICO, we'll create a 48x48 PNG first (Google prefers 48x48 for search results)
    const ico48Buffer = await sharp(sourceIcon)
      .resize(48, 48)
      .png()
      .toBuffer();
    
    // Save as PNG for browsers that support it
    await sharp(sourceIcon)
      .resize(48, 48)
      .png()
      .toFile(path.join(publicDir, 'favicon-48x48.png'));
    console.log('✓ favicon-48x48.png');

    // For favicon.ico, we need to create a proper ICO file
    // We'll create a 32x32 version as the primary favicon.ico
    await sharp(sourceIcon)
      .resize(32, 32)
      .toFormat('png')
      .toFile(path.join(publicDir, 'favicon.ico'));
    console.log('✓ favicon.ico (32x32)');

    console.log('\n✅ All favicon files generated successfully!');
    console.log('\nNote: For best Google search results favicon display, ensure:');
    console.log('1. favicon.ico is accessible at https://wishwing.fidcent.com/favicon.ico');
    console.log('2. The icon is a simple, recognizable design');
    console.log('3. Google may take some time to re-crawl and update the favicon');

  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();
