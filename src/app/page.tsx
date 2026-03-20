import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='max-w-4xl mx-auto py-12'>
      {/* Hero Section */}
      <section className='text-center mb-16'>
        <h1 className='text-4xl font-bold text-primary dark:text-white mb-4'>
          Welcome to Jacob Classes
        </h1>
        <p className='text-xl text-gray-600 dark:text-gray-300 mb-8'>
          Your trusted coaching institute for academic excellence
        </p>
        <div className='flex justify-center gap-4'>
          <Link
            href='/login'
            className='bg-[#800000] dark:bg-white dark:text-[#800000] text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors'
          >
            Login
          </Link>
          {/* <Link
            href='/signup'
            className='bg-secondary text-white px-6 py-3 rounded-md hover:bg-secondary/90 transition-colors'
          >
            Sign Up as Student
          </Link> */}
        </div>
      </section>

      {/* Features Section */}
      <section className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700'>
          <h2 className='text-xl font-semibold text-primary dark:text-white mb-2'>
            For Students
          </h2>
          <p className='text-gray-600 dark:text-gray-300'>
            Track your attendance, view test results, access study materials,
            and more.
          </p>
        </div>
        <div className='bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700'>
          <h2 className='text-xl font-semibold text-primary dark:text-white mb-2'>
            For Teachers
          </h2>
          <p className='text-gray-600 dark:text-gray-300'>
            Manage classes, mark attendance, add remarks, and update student
            progress.
          </p>
        </div>
        <div className='bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700'>
          <h2 className='text-xl font-semibold text-primary dark:text-white mb-2'>
            For Admins
          </h2>
          <p className='text-gray-600 dark:text-gray-300'>
            Oversee all operations, manage teachers and students, and generate
            reports.
          </p>
        </div>
      </section>

      {/* About Preview */}
      <section className='mt-16 text-center'>
        <h2 className='text-2xl font-semibold text-primary dark:text-white mb-4'>
          About Jacob Classes
        </h2>
        <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
          We are dedicated to providing quality education and personalized
          attention to help students achieve their academic goals. Join us to
          experience a supportive learning environment.
        </p>
        <Link
          href='/about'
          className='inline-block mt-4 text-secondary hover:underline'
        >
          Learn more →
        </Link>
      </section>
    </div>
  )
}
