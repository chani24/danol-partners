import './globals.css';
import './components.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Danol Partners - Home',
  description: 'Law Firm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
