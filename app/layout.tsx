import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nafha Bags (PVT) Ltd',
  description: 'Created with v0',
  generator: 'v0.dev',
  icons: {
    icon: '/nafha-logo.png', // or '/logo.png' depending on your file
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
