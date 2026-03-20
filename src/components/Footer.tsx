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
        setQuote({
          text: 'Education is the passport to the future.',
          author: 'Malcolm X',
        })
      })
  }, [])

  return (
    <footer className='bg-[#800000] dark:bg-black text-white border-t border-[#9a0000] py-4 mt-auto fixed bottom-0 left-0 right-0 z-50'>
      <div className='container mx-auto px-4 sm:px-6 text-center text-sm'>
        {quote ? (
          <div className='text-white flex flex-col justify-center items-center'>
            <div className='text-white'>{quote.text}</div>{' '}
            <b className='text-white'>— {quote.author}</b>
          </div>
        ) : (
          <p>Loading inspirational quote...</p>
        )}
      </div>
    </footer>
  )
}
