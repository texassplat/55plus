'use client'

import { useEffect, useState } from 'react'

export default function SkipLink() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        setIsVisible(true)
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        setIsVisible(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  if (!isVisible) return null

  return (
    <a
      href="#main-content"
      className="skip-link"
      onClick={() => setIsVisible(false)}
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  )
}
