'use client'

import { useState } from 'react'
import { Mail, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'

export default function NewsletterSignup() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    preferences: {
      inspiredLiving: true,
      entertainment: true,
      travel: true,
      giftGuides: false,
      weekly: true,
      monthly: false
    }
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [showPreferences, setShowPreferences] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePreferenceChange = (preference: keyof typeof formData.preferences) => {
    setFormData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [preference]: !prev.preferences[preference]
      }
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setTimeout(() => {
        setStatus('idle')
        setFormData({
          email: '',
          firstName: '',
          lastName: '',
          preferences: {
            inspiredLiving: true,
            entertainment: true,
            travel: true,
            giftGuides: false,
            weekly: true,
            monthly: false
          }
        })
        setShowPreferences(false)
      }, 3000)
    }, 1000)
  }

  return (
    <section className="section-spacing bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container-readable">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Connected & Informed
            </h2>
            <p className="text-xl text-readable text-blue-100 leading-relaxed">
              Subscribe to our newsletter and never miss out on the latest articles, events, and community updates 
              designed specifically for the 55+ demographic.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="form-label text-white text-left block">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input bg-white/90 text-gray-900 placeholder-gray-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="form-label text-white text-left block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input bg-white/90 text-gray-900 placeholder-gray-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="form-label text-white text-left block">
                  Email Address <span className="text-red-300">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input bg-white/90 text-gray-900 placeholder-gray-500"
                  placeholder="Enter your email address"
                  aria-describedby="email-help"
                />
                <p id="email-help" className="text-sm text-blue-100 mt-1 text-left">
                  We'll never share your email with anyone else.
                </p>
              </div>

              {/* Preferences Toggle */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setShowPreferences(!showPreferences)}
                  className="text-blue-100 hover:text-white underline text-lg transition-colors duration-200"
                >
                  {showPreferences ? 'Hide' : 'Show'} Newsletter Preferences
                </button>
              </div>

              {/* Preferences */}
              {showPreferences && (
                <div className="space-y-4 p-6 bg-white/10 rounded-lg border border-white/20">
                  <h3 className="text-xl font-semibold text-left">Content Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.preferences.inspiredLiving}
                        onChange={() => handlePreferenceChange('inspiredLiving')}
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="text-lg">Inspired Living Articles</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.preferences.entertainment}
                        onChange={() => handlePreferenceChange('entertainment')}
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="text-lg">Entertainment & Events</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.preferences.travel}
                        onChange={() => handlePreferenceChange('travel')}
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="text-lg">Travel & Adventures</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.preferences.giftGuides}
                        onChange={() => handlePreferenceChange('giftGuides')}
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="text-lg">Gift Guides</span>
                    </label>
                  </div>

                  <div className="border-t border-white/20 pt-4">
                    <h4 className="text-lg font-semibold mb-3 text-left">Frequency</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.preferences.weekly}
                          onChange={() => handlePreferenceChange('weekly')}
                          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-lg">Weekly Updates</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.preferences.monthly}
                          onChange={() => handlePreferenceChange('monthly')}
                          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-lg">Monthly Newsletter</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-white text-blue-600 px-8 py-4 text-xl font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-h-[60px] flex items-center justify-center gap-3"
              >
                {status === 'loading' ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Mail className="h-6 w-6" aria-hidden="true" />
                    Subscribe to Newsletter
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center justify-center gap-3 text-green-200 bg-green-900/20 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6" aria-hidden="true" />
                  <span className="text-lg">Thank you for subscribing! Welcome to our community.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center justify-center gap-3 text-red-200 bg-red-900/20 p-4 rounded-lg">
                  <AlertCircle className="h-6 w-6" aria-hidden="true" />
                  <span className="text-lg">Something went wrong. Please try again.</span>
                </div>
              )}
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-blue-100">
            <p className="text-lg">
              Join over 10,000 subscribers who stay informed about the latest trends, events, and resources 
              designed specifically for the 55+ demographic.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
