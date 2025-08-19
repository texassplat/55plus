'use client'

import Link from 'next/link'
import { ArrowRight, Clock, User, Tag } from 'lucide-react'
import { formatDate, calculateReadTime, getCategoryColor } from '@/lib/utils'

// Mock data - in real app, this would come from API
const featuredArticles = [
  {
    id: '1',
    title: 'Kitchen Design Trends for 2024: Creating a Space You\'ll Love',
    excerpt: 'Discover the latest kitchen design trends that combine style, functionality, and accessibility for the modern 55+ homeowner.',
    category: 'inspired-living',
    subcategory: 'kitchen-design',
    author: 'Sarah Johnson',
    publishedAt: '2024-01-15',
    readTime: 8,
    featuredImage: '/images/kitchen-design.jpg',
    slug: 'kitchen-design-trends-2024',
    tags: ['kitchen design', 'home improvement', 'trends', 'accessibility']
  },
  {
    id: '2',
    title: 'Weekend Getaways Within 3 Hours of DFW: Your Perfect Escape',
    excerpt: 'Explore beautiful destinations perfect for weekend trips, all within easy driving distance of the Dallas-Fort Worth metroplex.',
    category: 'travel',
    subcategory: 'weekend-getaways',
    author: 'Michael Chen',
    publishedAt: '2024-01-12',
    readTime: 12,
    featuredImage: '/images/weekend-getaway.jpg',
    slug: 'weekend-getaways-dfw',
    tags: ['travel', 'weekend trips', 'DFW', 'local adventures']
  },
  {
    id: '3',
    title: 'Essential Home Maintenance Checklist for Every Season',
    excerpt: 'Stay on top of home maintenance with our comprehensive seasonal checklist designed specifically for homeowners 55 and over.',
    category: 'inspired-living',
    subcategory: 'maintenance',
    author: 'Robert Davis',
    publishedAt: '2024-01-10',
    readTime: 15,
    featuredImage: '/images/home-maintenance.jpg',
    slug: 'seasonal-home-maintenance-checklist',
    tags: ['home maintenance', 'seasonal', 'checklist', 'prevention']
  },
  {
    id: '4',
    title: 'Gift Guide: Thoughtful Presents for Grandparents',
    excerpt: 'Find the perfect gifts that show your love and appreciation for the special grandparents in your life.',
    category: 'gift-guides',
    subcategory: 'grandparents',
    author: 'Lisa Thompson',
    publishedAt: '2024-01-08',
    readTime: 10,
    featuredImage: '/images/grandparent-gifts.jpg',
    slug: 'gift-guide-grandparents',
    tags: ['gift guides', 'grandparents', 'family', 'thoughtful gifts']
  }
]

export default function FeaturedArticles() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-readable">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-high-contrast-primary mb-4">
            Featured Articles
          </h2>
          <p className="text-xl text-readable text-gray-600 max-w-3xl mx-auto">
            Discover our latest articles covering everything from home improvement to travel adventures, 
            all written with the 55+ demographic in mind.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {featuredArticles.map((article) => (
            <article 
              key={article.id} 
              className="card-high-contrast hover:shadow-xl transition-all duration-300 group"
            >
              {/* Article Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Image Placeholder</span>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(article.category)}`}>
                    {article.subcategory ? article.subcategory.replace('-', ' ') : article.category.replace('-', ' ')}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-high-contrast-primary group-hover:text-high-contrast-accent transition-colors duration-200">
                  <Link href={`/articles/${article.slug}`} className="hover:underline">
                    {article.title}
                  </Link>
                </h3>
                
                <p className="text-lg text-readable text-gray-600 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" aria-hidden="true" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    <span>{article.readTime} min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <Link
                  href={`/articles/${article.slug}`}
                  className="inline-flex items-center gap-2 text-high-contrast-accent font-semibold hover:underline group-hover:gap-3 transition-all duration-200"
                >
                  Read Full Article
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="text-center">
          <Link
            href="/articles"
            className="btn-high-contrast px-8 py-4 text-xl font-semibold rounded-lg transition-all duration-200 hover:scale-105 inline-flex items-center gap-3"
          >
            View All Articles
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
