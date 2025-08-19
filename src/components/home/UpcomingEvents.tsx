'use client'

import Link from 'next/link'
import { Calendar, MapPin, Clock, DollarSign, Users, ArrowRight } from 'lucide-react'
import { formatDate, formatDateTime, formatPrice, getAccessibilityIcon } from '@/lib/utils'

// Mock data - in real app, this would come from API
const upcomingEvents = [
  {
    id: '1',
    title: 'Spring Garden & Landscape Show',
    description: 'Discover the latest trends in gardening and landscaping perfect for creating your dream outdoor space.',
    startDate: '2024-03-15T09:00:00',
    endDate: '2024-03-17T17:00:00',
    location: {
      name: 'Dallas Arboretum',
      address: '8525 Garland Rd',
      city: 'Dallas',
      state: 'TX',
      zipCode: '75218'
    },
    category: 'entertainment',
    subcategory: 'garden-show',
    price: {
      min: 15,
      max: 25,
      currency: 'USD'
    },
    accessibility: {
      wheelchairAccessible: true,
      hearingAssistance: false,
      visualAssistance: true,
      other: ['large print materials', 'guided tours']
    },
    featuredImage: '/images/garden-show.jpg',
    slug: 'spring-garden-landscape-show'
  },
  {
    id: '2',
    title: 'Weekend Wine Tasting Tour',
    description: 'Experience the best wineries in the Texas Hill Country with our guided weekend tour package.',
    startDate: '2024-03-22T08:00:00',
    endDate: '2024-03-24T18:00:00',
    location: {
      name: 'Texas Hill Country',
      address: 'Various Locations',
      city: 'Fredericksburg',
      state: 'TX',
      zipCode: '78624'
    },
    category: 'travel',
    subcategory: 'wine-tour',
    price: {
      min: 299,
      max: 399,
      currency: 'USD'
    },
    accessibility: {
      wheelchairAccessible: true,
      hearingAssistance: true,
      visualAssistance: false,
      other: ['accessible transportation', 'dietary accommodations']
    },
    featuredImage: '/images/wine-tour.jpg',
    slug: 'weekend-wine-tasting-tour'
  },
  {
    id: '3',
    title: 'Senior Health & Wellness Fair',
    description: 'Free health screenings, wellness workshops, and information about services available to seniors.',
    startDate: '2024-03-30T10:00:00',
    endDate: '2024-03-30T16:00:00',
    location: {
      name: 'Fort Worth Convention Center',
      address: '1201 Houston St',
      city: 'Fort Worth',
      state: 'TX',
      zipCode: '76102'
    },
    category: 'health',
    subcategory: 'wellness-fair',
    price: {
      min: 0,
      max: 0,
      currency: 'USD'
    },
    accessibility: {
      wheelchairAccessible: true,
      hearingAssistance: true,
      visualAssistance: true,
      other: ['ASL interpreters', 'large print materials', 'assistive devices']
    },
    featuredImage: '/images/health-fair.jpg',
    slug: 'senior-health-wellness-fair'
  }
]

export default function UpcomingEvents() {
  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-readable">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-high-contrast-primary mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-readable text-gray-600 max-w-3xl mx-auto">
            Discover exciting events happening in your area, from local activities to weekend getaways, 
            all designed with accessibility and enjoyment in mind.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.map((event) => (
            <article 
              key={event.id} 
              className="card-high-contrast hover:shadow-xl transition-all duration-300 group"
            >
              {/* Event Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Event Image</span>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    {event.subcategory ? event.subcategory.replace('-', ' ') : event.category}
                  </span>
                </div>
                {/* Accessibility Badge */}
                {event.accessibility.wheelchairAccessible && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      ♿ Accessible
                    </span>
                  </div>
                )}
              </div>

              {/* Event Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-high-contrast-primary group-hover:text-high-contrast-accent transition-colors duration-200">
                  <Link href={`/events/${event.slug}`} className="hover:underline">
                    {event.title}
                  </Link>
                </h3>
                
                <p className="text-lg text-readable text-gray-600 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3">
                  {/* Date & Time */}
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="h-5 w-5 text-high-contrast-accent" aria-hidden="true" />
                    <div>
                      <div className="font-semibold">{formatDate(event.startDate)}</div>
                      <div className="text-sm">
                        {formatDateTime(event.startDate)} - {formatDateTime(event.endDate)}
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="h-5 w-5 text-high-contrast-accent" aria-hidden="true" />
                    <div>
                      <div className="font-semibold">{event.location.name}</div>
                      <div className="text-sm">
                        {event.location.city}, {event.location.state}
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 text-gray-600">
                    <DollarSign className="h-5 w-5 text-high-contrast-accent" aria-hidden="true" />
                    <span className="font-semibold">
                      {event.price.min === 0 ? 'Free' : `${formatPrice(event.price.min)} - ${formatPrice(event.price.max)}`}
                    </span>
                  </div>
                </div>

                {/* Accessibility Features */}
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-high-contrast-primary mb-2">Accessibility Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {event.accessibility.wheelchairAccessible && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-md">
                        ♿ Wheelchair Accessible
                      </span>
                    )}
                    {event.accessibility.hearingAssistance && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-md">
                        🔊 Hearing Assistance
                      </span>
                    )}
                    {event.accessibility.visualAssistance && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-sm rounded-md">
                        👁️ Visual Assistance
                      </span>
                    )}
                    {event.accessibility.other?.map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Link */}
                <Link
                  href={`/events/${event.slug}`}
                  className="inline-flex items-center gap-2 text-high-contrast-accent font-semibold hover:underline group-hover:gap-3 transition-all duration-200"
                >
                  Learn More & Register
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center">
          <Link
            href="/events"
            className="btn-high-contrast px-8 py-4 text-xl font-semibold rounded-lg transition-all duration-200 hover:scale-105 inline-flex items-center gap-3"
          >
            View All Events
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
