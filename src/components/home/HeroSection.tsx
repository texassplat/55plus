'use client'

import Link from 'next/link'
import { ArrowRight, Calendar, BookOpen, MapPin } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 section-spacing">
      <div className="container-readable">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-high-contrast-primary mb-6 leading-tight">
            Your Go-To Resource for{' '}
            <span className="text-high-contrast-accent">Inspired Living</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-readable text-gray-700 mb-8 leading-relaxed">
            Discover articles, events, and resources designed specifically for the 55+ demographic. 
            From home improvement to travel adventures, we've got everything you need for an enriched lifestyle.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/inspired-living"
              className="btn-high-contrast px-8 py-4 text-xl font-semibold rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3 min-h-[60px]"
            >
              <BookOpen className="h-6 w-6" aria-hidden="true" />
              Explore Articles
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            
            <Link
              href="/events"
              className="bg-high-contrast-accent text-white px-8 py-4 text-xl font-semibold rounded-lg border-2 border-high-contrast-accent hover:bg-blue-700 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3 min-h-[60px]"
            >
              <Calendar className="h-6 w-6" aria-hidden="true" />
              View Events
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-white rounded-lg shadow-md border-2 border-high-contrast-primary">
              <div className="text-3xl font-bold text-high-contrast-accent mb-2">500+</div>
              <div className="text-lg text-high-contrast-primary">Articles Published</div>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg shadow-md border-2 border-high-contrast-primary">
              <div className="text-3xl font-bold text-high-contrast-accent mb-2">100+</div>
              <div className="text-lg text-high-contrast-primary">Events Monthly</div>
            </div>
            
            <div className="text-center p-4 bg-white rounded-lg shadow-md border-2 border-high-contrast-primary">
              <div className="text-3xl font-bold text-high-contrast-accent mb-2">50+</div>
              <div className="text-lg text-high-contrast-primary">Community Partners</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 hidden lg:block">
        <div className="w-32 h-32 bg-high-contrast-accent/20 rounded-full"></div>
      </div>
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="w-24 h-24 bg-high-contrast-primary/20 rounded-full"></div>
      </div>
    </section>
  )
}
