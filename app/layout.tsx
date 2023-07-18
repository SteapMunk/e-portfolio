import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/navbar'

export const metadata: Metadata = {
  title: 'e-portfolio',
  description: 'Sam Addison\'s e-portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
          <NavBar />
          {children}
      </body>
    </html>
  )
}
