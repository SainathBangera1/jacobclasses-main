'use client'

import { X, Home, Info, BookOpen } from 'lucide-react'
import Link from 'next/link'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity'
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-dark-surface shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='p-4 flex justify-between items-center border-b dark:border-gray-700'>
          <h2 className='text-lg font-semibold text-primary dark:text-white'>
            Menu
          </h2>
          <button
            onClick={onClose}
            className='p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
            aria-label='Close sidebar'
          >
            <X className='w-5 h-5' />
          </button>
        </div>

        <nav className='p-4 space-y-2'>
          <Link
            href='/'
            className='flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
            onClick={onClose}
          >
            <Home className='w-5 h-5 text-primary' />
            <span>Home</span>
          </Link>
          <Link
            href='/about'
            className='flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
            onClick={onClose}
          >
            <Info className='w-5 h-5 text-primary' />
            <span>About Us</span>
          </Link>
          <Link
            href='/resources'
            className='flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
            onClick={onClose}
          >
            <BookOpen className='w-5 h-5 text-primary' />
            <span>Resources</span>
          </Link>
        </nav>
      </div>
    </>
  )
}
