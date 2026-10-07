import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CV NOKITA KARYA | Ariston Service Center Malang',
  description:
    'Layanan instalasi, service, perbaikan, dan bantuan garansi water heater Ariston di Malang dan sekitarnya. CV NOKITA KARYA, Ariston Service Center Malang.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo-nokita-icon.png',
    apple: '/images/logo-nokita-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8faf9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
