
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = "WishWing - Never Miss a Birthday Again | Smart Gifting & Celebration App",
  description = "WishWing is the smart mobile app that ensures you never forget birthdays. Send meaningful gifts, create wish lists, and celebrate together with friends and family through group gifting and WishCoins.",
  keywords = "birthday reminders, gift giving app, wish list, group gifting, birthday notifications, WishCoins, celebration app, mobile gifting",
  image = "https://wishwing.fidcent.com/og-image.jpg",
  url = "https://wishwing.fidcent.com",
  type = "website"
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
