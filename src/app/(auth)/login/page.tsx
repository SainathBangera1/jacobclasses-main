'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [role, setRole] = useState<'student' | 'admin'>('student')

  return (
    <div className='max-w-md mx-auto mt-8'>
      <h1 className='text-2xl font-bold text-center mb-6'>
        Login to Jacob Classes
      </h1>

      {/* Role Tabs */}
      <div className='flex border-b mb-6'>
        <button
          className={`flex-1 py-2 text-center font-medium ${
            role === 'student'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setRole('student')}
        >
          Student
        </button>
        <button
          className={`flex-1 py-2 text-center font-medium ${
            role === 'admin'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setRole('admin')}
        >
          Admin / Teacher
        </button>
      </div>

      <form className='space-y-4'>
        <div>
          <label htmlFor='email' className='block text-sm font-medium mb-1'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-dark-surface dark:border-gray-600'
            placeholder='you@example.com'
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
        <button
          type='submit'
          className='w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors'
        >
          Login
        </button>
      </form>

      <p className='text-center mt-4 text-sm'>
        Dont have an account?{' '}
        <Link href='/signup' className='text-secondary hover:underline'>
          Sign up as Student
        </Link>
      </p>
    </div>
  )
}
