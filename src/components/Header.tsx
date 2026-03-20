'use client'

import { Menu, Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'

interface HeaderProps {
  toggleSidebar: () => void
}

export default function Header({ toggleSidebar }: HeaderProps) {
  // Initialize dark mode using a lazy initializer (runs only once)
  const [darkMode, setDarkMode] = useState(() => {
    const isDark =
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    return isDark
  })

  // Sync the dark class and localStorage whenever darkMode changes
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
    setDarkMode((prev) => !prev) // Just toggle state; effect handles the rest
  }

  return (
    <header className='bg-primary text-white shadow-md'>
      <div className='container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between'>
        {/* Left: Hamburger */}
        <button
          onClick={toggleSidebar}
          className='p-2 rounded-md hover:bg-primary/80 transition-colors'
          aria-label='Toggle sidebar'
        >
          <Menu className='w-6 h-6' />
        </button>

        {/* Right: Logo + Title + Theme Toggle */}
        <div className='flex items-center space-x-4'>
          <span className='text-xl font-bold'>Jacob Classes</span>
          {/* Optional logo image – you can add an <Image /> later */}
          <button
            onClick={toggleDarkMode}
            className='p-2 rounded-full hover:bg-primary/80 transition-colors'
            aria-label='Toggle dark mode'
          >
            {darkMode ? (
              <Sun className='w-5 h-5' />
            ) : (
              <Moon className='w-5 h-5' />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
