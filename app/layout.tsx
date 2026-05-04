import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Oluwasola Alufa — DevOps & SRE Engineer',
  description:
    'DevOps & Site Reliability Engineer with 5+ years of experience in cloud infrastructure, CI/CD, Kubernetes, Terraform, and AWS. Based in Lagos, Nigeria.',
  keywords: ['DevOps', 'SRE', 'Kubernetes', 'Terraform', 'AWS', 'Docker', 'Lagos', 'Nigeria'],
  authors: [{ name: 'Oluwasola Alufa' }],
  openGraph: {
    title: 'Oluwasola Alufa — DevOps & SRE Engineer',
    description: 'DevOps & Site Reliability Engineer with 5+ years of experience.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oluwasola Alufa — DevOps & SRE Engineer',
    description: 'DevOps & Site Reliability Engineer with 5+ years of experience.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
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
