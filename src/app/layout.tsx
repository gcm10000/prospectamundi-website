import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Backdrop from './backdrop'
import FooterSection from '@/components/FooterSection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Backdrop />
        <FooterSection />
      </body>
    </html>
  )
}
