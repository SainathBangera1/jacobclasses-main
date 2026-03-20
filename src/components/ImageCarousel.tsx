'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton' // or your custom skeleton

interface ImageCarouselProps {
  images: string[] // array of image paths (e.g., '/carousel-images/1.jpg')
  interval?: number // milliseconds between slides, default 5000
}

export default function ImageCarousel({
  images,
  interval = 5000,
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval])

  // Preload images to avoid flicker (optional)
  useEffect(() => {
    const preload = () => {
      images.forEach((src) => {
        const img = new window.Image()
        img.src = src
      })
      setLoading(false)
    }
    preload()
  }, [images])

  if (loading) {
    return (
      <div className='relative w-full h-64 md:h-96 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800'>
        <Skeleton className='w-full h-full' />
      </div>
    )
  }

  return (
    <div className='relative w-full h-64 md:h-96 rounded-xl overflow-hidden'>
      {images.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${idx + 1}`}
            fill
            className='object-cover'
            priority={idx === 0}
          />
        </div>
      ))}

      {/* Optional: Dots indicator */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10'>
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === current ? 'bg-white w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
