'use client'

import { Menu, Sun, Moon } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface HeaderProps {
  toggleSidebar: () => void
}

export default function Header({ toggleSidebar }: HeaderProps) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark =
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    const timer = setTimeout(() => setDarkMode(isDark), 0)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <header className='bg-[#800000] dark:bg-black text-white shadow-md fixed top-0 left-0 right-0 z-50'>
      <div className='container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <Image
            width={50}
            height={50}
            alt={'Jacob Classes Logo'}
            src='/icons/icon-192x192.png'
          />
          <span className='text-xl font-bold'>Jacob Classes</span>
          <button
            onClick={toggleDarkMode}
            className='p-2 rounded-full hover:bg-[#9a0000] transition-colors'
            aria-label='Toggle dark mode'
          >
            {darkMode ? (
              <Sun className='w-5 h-5' />
            ) : (
              <Moon className='w-5 h-5' />
            )}
          </button>
        </div>
        <button
          onClick={toggleSidebar}
          className='p-2 rounded-md hover:bg-[#9a0000] transition-colors'
          aria-label='Toggle sidebar'
        >
          <Menu className='w-6 h-6' />
        </button>
      </div>
    </header>
  )
}
