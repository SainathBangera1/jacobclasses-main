import type { Metadata } from 'next'
import { Inter, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import LayoutWrapper from '@/components/LayoutWrapper'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Optional: define a CSS variable
})

export const metadata: Metadata = {
  title: 'Jacob Classes',
  description: 'Coaching Institute Management System',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning // Prevents mismatches during dark mode initialization
    >
      <body className='min-h-full flex flex-col font-sans'>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
