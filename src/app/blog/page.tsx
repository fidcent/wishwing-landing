import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Tips, Stories & Updates',
  description: 'Latest news, birthday celebration tips, and gifting insights from WishWing. Stay updated with our blog.',
  openGraph: {
    title: 'WishWing Blog - Birthday Tips & Updates',
    description: 'Latest news and tips for celebrating birthdays and gifting.',
    url: 'https://wishwing.fidcent.com/blog',
  },
  alternates: {
    canonical: 'https://wishwing.fidcent.com/blog',
  },
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: '5 Creative Ways to Celebrate Birthdays Remotely',
      excerpt: 'Distance doesn\'t have to diminish the celebration. Here are our top tips for making long-distance birthdays special.',
      date: 'November 15, 2025',
      category: 'Tips & Tricks',
      readTime: '5 min read',
    },
    {
      title: 'Introducing WishCoins: The Future of Digital Gifting',
      excerpt: 'Learn how our virtual currency system makes sending gifts easier, faster, and more flexible than ever.',
      date: 'November 10, 2025',
      category: 'Product Updates',
      readTime: '4 min read',
    },
    {
      title: 'Why Group Gifting is Gaining Popularity',
      excerpt: 'Discover why more people are pooling resources to give bigger, better gifts that recipients truly want.',
      date: 'November 5, 2025',
      category: 'Trends',
      readTime: '6 min read',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-5 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">WishWing Blog</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Tips, stories, and updates about celebrating birthdays
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-5 bg-gray-lightest">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                {/* Placeholder Image */}
                <div className="h-48 bg-gradient-to-br from-primary-purple to-accent-pink"></div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-sm">
                    <span className="text-primary-purple font-semibold">{post.category}</span>
                    <span className="text-text-secondary">•</span>
                    <span className="text-text-secondary">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-text-primary mb-3 hover:text-primary-purple transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-text-secondary mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">{post.date}</span>
                    <span className="text-primary-purple font-semibold hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="mt-16 text-center">
            <p className="text-lg text-text-secondary mb-4">
              More articles coming soon! Subscribe to stay updated.
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-light focus:border-primary-purple focus:outline-none"
              />
              <button className="px-6 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
            Browse by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Tips & Tricks', 'Product Updates', 'Trends', 'Success Stories', 'Gift Ideas', 'How-Tos'].map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-gray-lightest hover:bg-primary-purple hover:text-white rounded-full font-medium transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
