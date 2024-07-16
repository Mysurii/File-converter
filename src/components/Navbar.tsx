// imports
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { Github, Menu } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Navbar({}): any {
  return (
    <nav className="container mx-auto px-4 py-12 flex justify-between">
      <Link href="/" className="text-2xl font-bold">
        Convert<span className="text-teal-400">ly</span>
      </Link>
      <ThemeToggle />
    </nav>
  )
}
