'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react'

const footerNavigation = {
  main: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Accessibility', href: '/accessibility' },
  ],
  inspiredLiving: [
    { name: 'Home Trends', href: '/inspired-living/home-trends' },
    { name: 'Landscaping', href: '/inspired-living/landscaping' },
    { name: 'Kitchen Design', href: '/inspired-living/kitchen-design' },
    { name: 'Home Maintenance', href: '/inspired-living/maintenance' },
  ],
  travelEvents: [
    { name: 'Weekend Getaways', href: '/travel-events/weekend-getaways' },
    { name: 'Cruises & Resorts', href: '/travel-events/cruises-resorts' },
    { name: 'Bucket List Tours', href: '/travel-events/bucket-list' },
    { name: 'Local Events', href: '/events' },
  ],
  community: [
    { name: 'Community Advocates', href: '/community/advocates' },
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'Volunteer Opportunities', href: '/community/volunteer' },
    { name: 'Support Groups', href: '/community/support-groups' },
  ],
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setNewsletterStatus('success')
      setEmail('')
      setTimeout(() => setNewsletterStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <footer className="bg-high-contrast-primary text-high-contrast-secondary" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">55Plus</h3>
            <p className="text-lg leading-relaxed mb-6">
              Your go-to resource for inspired living, travel, and community connections designed specifically for the 55+ demographic.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" aria-hidden="true" />
                <a href="mailto:info@55plus.com" className="hover:underline">
                  info@55plus.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" aria-hidden="true" />
                <a href="tel:+1-800-555-0123" className="hover:underline">
                  1-800-555-0123
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span>Dallas-Fort Worth Metroplex</span>
              </div>
            </div>
          </div>

          {/* Inspired Living */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Inspired Living</h4>
            <ul className="space-y-3">
              {footerNavigation.inspiredLiving.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-lg hover:underline transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel & Events */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Travel & Events</h4>
            <ul className="space-y-3">
              {footerNavigation.travelEvents.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-lg hover:underline transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Community</h4>
            <ul className="space-y-3">
              {footerNavigation.community.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-lg hover:underline transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t-2 border-high-contrast-secondary pt-8 mb-8">
          <div className="max-w-2xl">
            <h4 className="text-xl font-semibold mb-4">Stay Connected</h4>
            <p className="text-lg mb-6">
              Subscribe to our newsletter for the latest articles, events, and community updates.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 text-lg border-2 border-high-contrast-secondary rounded-lg bg-white text-high-contrast-primary placeholder-gray-500 focus:ring-2 focus:ring-high-contrast-accent focus:border-transparent"
                  required
                  aria-describedby="newsletter-status"
                />
              </div>
              <button
                type="submit"
                disabled={newsletterStatus === 'loading'}
                className="px-8 py-3 bg-high-contrast-accent text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px]"
              >
                {newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            
            {newsletterStatus === 'success' && (
              <p id="newsletter-status" className="text-green-300 mt-2 text-lg">
                Thank you for subscribing!
              </p>
            )}
            {newsletterStatus === 'error' && (
              <p id="newsletter-status" className="text-red-300 mt-2 text-lg">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="border-t-2 border-high-contrast-secondary pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="p-2 text-high-contrast-secondary hover:text-high-contrast-accent transition-colors duration-200 rounded-lg hover:bg-high-contrast-primary/20"
                    aria-label={`Follow us on ${item.name}`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                )
              })}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-lg">
                © {new Date().getFullYear()} 55Plus. Made with{' '}
                <Heart className="inline h-4 w-4 text-red-400" aria-hidden="true" />{' '}
                for our community.
              </p>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="mt-6 pt-6 border-t border-high-contrast-secondary/30">
            <ul className="flex flex-wrap justify-center gap-6 text-sm">
              {footerNavigation.main.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="hover:underline transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
