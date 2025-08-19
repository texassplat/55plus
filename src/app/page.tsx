import { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import FeaturedArticles from '@/components/home/FeaturedArticles'
import UpcomingEvents from '@/components/home/UpcomingEvents'
import CommunityHighlights from '@/components/home/CommunityHighlights'
import NewsletterSignup from '@/components/home/NewsletterSignup'

export const metadata: Metadata = {
  title: '55Plus - Your Go-To Resource for Inspired Living',
  description: 'Discover inspiring articles, events, and resources designed specifically for the 55+ demographic. From home improvement to travel, we\'ve got everything you need for an enriched lifestyle.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Skip to main content link is handled by SkipLink component */}
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Articles */}
      <FeaturedArticles />
      
      {/* Upcoming Events */}
      <UpcomingEvents />
      
      {/* Community Highlights */}
      <CommunityHighlights />
      
      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  )
}
