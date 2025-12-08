import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 p-4 shadow-md">
      <h1 className="text-center text-3xl font-bold text-white">
        My Next.j App
      </h1>
      <nav className="mt-4 text-center space-x-4">
        <Link href="/" className="rounded px-4 py-2 text-white transition-all hover:bg-blue-700">
          Hone
        </Link>
        <Link
          href="/blog"
          className="rounded px-4 py-2 text-white transition-all hover:bg-blue-700"
        >
          Blog
        </Link>
        <Link href="/about" className='rounded px-4 py-2 text-white transition-all hover:bg-blue-700'>
          About
        </Link>
        <Link href="/contact" className='rounded px-4 py-2 text-white transition-all hover:bg-blue-700'>
          Contact
        </Link>
      </nav>
    </header>
  )
}