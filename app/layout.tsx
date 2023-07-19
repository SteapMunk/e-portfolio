import './globals.css'
import type { Metadata } from 'next'
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
        <head>
            <meta charSet="tf-8"/>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                  rel="stylesheet"></link>
        </head>
      <body>
          <NavBar />
          {children}
      </body>
    </html>
  )
}
