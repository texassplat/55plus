'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, User, Heart, Calendar, Home, Plane, Gift } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Inspired Living', href: '/inspired-living', icon: Home },
  { name: 'Travel & Events', href: '/travel-events', icon: Plane },
  { name: 'Gift Guides', href: '/gift-guides', icon: Gift },
  { name: 'Events Calendar', href: '/events', icon: Calendar },
  { name: 'Community', href: '/community', icon: Heart },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="bg-white border-b-2 border-high-contrast-primary shadow-lg" role="banner">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Main navigation">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5" aria-label="55Plus Home">
            <span className="text-3xl font-bold text-high-contrast-primary">55Plus</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-lg font-semibold leading-6 text-high-contrast-primary hover:text-high-contrast-accent transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-high-contrast-secondary"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* Search Button */}
          <button
            type="button"
            className="p-2 text-high-contrast-primary hover:bg-high-contrast-secondary rounded-lg transition-colors duration-200"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
            aria-expanded={searchOpen}
          >
            <Search className="h-6 w-6" />
          </button>

          {/* Admin Login */}
          <Link
            href="/admin/login"
            className="hidden lg:flex items-center gap-2 text-lg font-semibold leading-6 text-high-contrast-primary hover:text-high-contrast-accent transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-high-contrast-secondary"
          >
            <User className="h-5 w-5" aria-hidden="true" />
            Admin
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-high-contrast-primary hover:bg-high-contrast-secondary rounded-lg transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Search Bar */}
      {searchOpen && (
        <div className="border-t-2 border-high-contrast-primary bg-white p-4">
          <div className="max-w-2xl mx-auto">
            <form className="relative" role="search">
              <input
                type="search"
                placeholder="Search articles, events, and more..."
                className="w-full px-4 py-3 text-lg border-2 border-high-contrast-primary rounded-lg focus:ring-2 focus:ring-high-contrast-accent focus:border-transparent"
                aria-label="Search content"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-high-contrast-primary hover:bg-high-contrast-secondary rounded-lg transition-colors duration-200"
                aria-label="Submit search"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-high-contrast-primary bg-white">
          <div className="space-y-1 px-6 py-4">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 text-lg font-semibold leading-6 text-high-contrast-primary hover:text-high-contrast-accent transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-high-contrast-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                  {item.name}
                </Link>
              )
            })}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/admin/login"
                className="flex items-center gap-3 text-lg font-semibold leading-6 text-high-contrast-primary hover:text-high-contrast-accent transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-high-contrast-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="h-6 w-6" aria-hidden="true" />
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
