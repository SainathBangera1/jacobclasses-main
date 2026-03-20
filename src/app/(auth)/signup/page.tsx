'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SignupPage() {
  const [subjects, setSubjects] = useState<string[]>([])

  // Dummy subject list (will be fetched from API later)
  const availableSubjects = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
  ]

  const toggleSubject = (subject: string) => {
    setSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject],
    )
  }

  return (
    <div className='max-w-md mx-auto mt-8'>
      <h1 className='text-2xl font-bold text-center mb-6'>Student Sign Up</h1>

      <form className='space-y-4'>
        <div>
          <label htmlFor='name' className='block text-sm font-medium mb-1'>
            Full Name
          </label>
          <input
            type='text'
            id='name'
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-dark-surface dark:border-gray-600'
          />
        </div>
        <div>
          <label htmlFor='email' className='block text-sm font-medium mb-1'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-dark-surface dark:border-gray-600'
          />
        </div>
        <div>
          <label htmlFor='password' className='block text-sm font-medium mb-1'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-dark-surface dark:border-gray-600'
          />
        </div>
        <div>
          <label
            htmlFor='parentPhone'
            className='block text-sm font-medium mb-1'
          >
            Parents WhatsApp Number (with country code, e.g., +919876543210)
          </label>
          <input
            type='tel'
            id='parentPhone'
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-dark-surface dark:border-gray-600'
            placeholder='+919876543210'
          />
        </div>
        <div>
          <label htmlFor='class' className='block text-sm font-medium mb-1'>
            Class
          </label>
          <select
            id='class'
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-dark-surface dark:border-gray-600'
          >
            <option value=''>Select class</option>
            <option value='9th'>9th</option>
            <option value='10th'>10th</option>
            <option value='11th'>11th</option>
            <option value='12th'>12th</option>
          </select>
        </div>
        <div>
          <label className='block text-sm font-medium mb-2'>Subjects</label>
          <div className='space-y-2'>
            {availableSubjects.map((subject) => (
              <label key={subject} className='flex items-center space-x-2'>
                <input
                  type='checkbox'
                  checked={subjects.includes(subject)}
                  onChange={() => toggleSubject(subject)}
                  className='rounded text-primary focus:ring-primary/50'
                />
                <span>{subject}</span>
              </label>
            ))}
          </div>
        </div>
        <button
          type='submit'
          className='w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors'
        >
          Sign Up
        </button>
      </form>

      <p className='text-center mt-4 text-sm'>
        Already have an account?{' '}
        <Link href='/login' className='text-secondary hover:underline'>
          Login
        </Link>
      </p>
    </div>
  )
}
