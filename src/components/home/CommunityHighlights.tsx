'use client'

import Link from 'next/link'
import { Users, Heart, Award, ArrowRight, Phone, Mail, Globe } from 'lucide-react'

// Mock data - in real app, this would come from API
const communityAdvocates = [
  {
    id: '1',
    name: 'Dr. Margaret Rodriguez',
    title: 'Senior Health Advocate',
    bio: 'Dedicated to improving healthcare access and quality for seniors in the DFW area.',
    expertise: ['Healthcare Access', 'Medicare Navigation', 'Wellness Programs'],
    image: '/images/margaret-rodriguez.jpg',
    contactInfo: {
      email: 'margaret@seniorhealthdfw.org',
      phone: '(214) 555-0123',
      website: 'https://seniorhealthdfw.org'
    },
    featured: true
  },
  {
    id: '2',
    name: 'James Wilson',
    title: 'Community Volunteer Coordinator',
    bio: 'Connecting seniors with meaningful volunteer opportunities and community service projects.',
    expertise: ['Volunteer Coordination', 'Community Service', 'Event Planning'],
    image: '/images/james-wilson.jpg',
    contactInfo: {
      email: 'james@dfwvolunteers.org',
      phone: '(817) 555-0456',
      website: 'https://dfwvolunteers.org'
    },
    featured: true
  },
  {
    id: '3',
    name: 'Sarah Chen',
    title: 'Senior Living Advisor',
    bio: 'Helping families navigate senior living options and make informed decisions.',
    expertise: ['Senior Living', 'Family Counseling', 'Resource Navigation'],
    image: '/images/sarah-chen.jpg',
    contactInfo: {
      email: 'sarah@seniorlivingadvisors.com',
      phone: '(972) 555-0789',
      website: 'https://seniorlivingadvisors.com'
    },
    featured: true
  }
]

const communityResources = [
  {
    id: '1',
    title: 'Senior Transportation Services',
    description: 'Free and low-cost transportation options for medical appointments, shopping, and social activities.',
    category: 'Transportation',
    icon: '🚗',
    href: '/community/transportation'
  },
  {
    id: '2',
    title: 'Meal Programs & Nutrition',
    description: 'Meals on Wheels and community dining programs ensuring seniors have access to nutritious food.',
    category: 'Nutrition',
    icon: '🍽️',
    href: '/community/meals'
  },
  {
    id: '3',
    title: 'Social Activities & Clubs',
    description: 'Join book clubs, walking groups, and social clubs to stay connected with your community.',
    category: 'Social',
    icon: '👥',
    href: '/community/social-activities'
  },
  {
    id: '4',
    title: 'Legal & Financial Assistance',
    description: 'Free legal clinics and financial counseling services for seniors.',
    category: 'Support',
    icon: '⚖️',
    href: '/community/legal-financial'
  }
]

export default function CommunityHighlights() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-readable">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-high-contrast-primary mb-4">
            Community Highlights
          </h2>
          <p className="text-xl text-readable text-gray-600 max-w-3xl mx-auto">
            Connect with our community advocates, discover valuable resources, and find ways to get involved 
            in making our community better for everyone 55 and over.
          </p>
        </div>

        {/* Community Advocates */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-high-contrast-primary mb-8 text-center">
            Meet Our Community Advocates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityAdvocates.map((advocate) => (
              <div key={advocate.id} className="card-high-contrast text-center hover:shadow-xl transition-all duration-300">
                {/* Advocate Image */}
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 text-2xl">Photo</span>
                  </div>
                </div>

                {/* Advocate Info */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-high-contrast-primary">{advocate.name}</h4>
                  <p className="text-lg text-high-contrast-accent font-semibold">{advocate.title}</p>
                  <p className="text-readable text-gray-600">{advocate.bio}</p>
                  
                  {/* Expertise */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {advocate.expertise.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    {advocate.contactInfo.email && (
                      <a 
                        href={`mailto:${advocate.contactInfo.email}`}
                        className="flex items-center justify-center gap-2 text-high-contrast-accent hover:underline"
                      >
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        <span className="text-sm">Email</span>
                      </a>
                    )}
                    {advocate.contactInfo.phone && (
                      <a 
                        href={`tel:${advocate.contactInfo.phone}`}
                        className="flex items-center justify-center gap-2 text-high-contrast-accent hover:underline"
                      >
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        <span className="text-sm">Call</span>
                      </a>
                    )}
                    {advocate.contactInfo.website && (
                      <a 
                        href={advocate.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-high-contrast-accent hover:underline"
                      >
                        <Globe className="h-4 w-4" aria-hidden="true" />
                        <span className="text-sm">Website</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Resources */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-high-contrast-primary mb-8 text-center">
            Community Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityResources.map((resource) => (
              <div key={resource.id} className="card-high-contrast hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{resource.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-high-contrast-primary mb-2 group-hover:text-high-contrast-accent transition-colors duration-200">
                      {resource.title}
                    </h4>
                    <p className="text-readable text-gray-600 mb-3">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {resource.category}
                      </span>
                      <Link
                        href={resource.href}
                        className="inline-flex items-center gap-2 text-high-contrast-accent font-semibold hover:underline group-hover:gap-3 transition-all duration-200"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-high-contrast-primary mb-4">
              Get Involved in Your Community
            </h3>
            <p className="text-lg text-readable text-gray-600 mb-6">
              Whether you're looking to volunteer, attend events, or simply stay connected, 
              there are countless ways to be part of our vibrant 55+ community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/community/volunteer"
                className="btn-high-contrast px-8 py-4 text-xl font-semibold rounded-lg transition-all duration-200 hover:scale-105 inline-flex items-center gap-3"
              >
                <Heart className="h-5 w-5" aria-hidden="true" />
                Find Volunteer Opportunities
              </Link>
              <Link
                href="/community/advocates"
                className="bg-high-contrast-accent text-white px-8 py-4 text-xl font-semibold rounded-lg border-2 border-high-contrast-accent hover:bg-blue-700 transition-all duration-200 hover:scale-105 inline-flex items-center gap-3"
              >
                <Users className="h-5 w-5" aria-hidden="true" />
                Meet Our Advocates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
