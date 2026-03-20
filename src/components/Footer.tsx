'use client'

import { useState, useEffect } from 'react'

interface Quote {
  text: string
  author: string
}

export default function Footer() {
  const [quote, setQuote] = useState<Quote | null>(null)

  useEffect(() => {
    fetch('/quotes.json')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length)
          setQuote(data[randomIndex])
        }
      })
      .catch((error) => {
        console.error('Failed to load quote:', error)
        // Fallback quote in case of error
        setQuote({
          text: 'Education is the passport to the future.',
          author: 'Malcolm X',
        })
      })
  }, [])

  return (
    <footer className='bg-gray-100 dark:bg-dark-surface border-t dark:border-gray-700 py-4 mt-auto'>
      <div className='container mx-auto px-4 sm:px-6 text-center text-sm text-gray-600 dark:text-gray-300'>
        {quote ? (
          <p>
            {quote.text} — {quote.author}
          </p>
        ) : (
          <p>Loading inspirational quote...</p>
        )}
      </div>
    </footer>
  )
}
