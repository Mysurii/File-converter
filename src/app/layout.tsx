import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Providers from '@/lib/providers'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Convertify',
  description:
    "A versatile and user-friendly online file converter designed to meet all your file transformation needs. Whether you're converting documents, images, videos, or audio files, Convertify makes the process seamless and efficient",
  creator: 'Ali Ozcan',
  keywords:
    'image converter, video converter, audio converter, unlimited image converter, umlimited video converter, various types of files, quick converts',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main className="min-h-screen container mx-auto max-w-4xl lg:max-w-6xl">{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
