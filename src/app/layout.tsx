import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Backdrop from './backdrop'
import FooterSection from '@/components/FooterSection'
import '@/components/Transictions/Transictions.css';
import AnalyticsComponent from '@/components/AnalyticsComponent';


export const metadata: Metadata = {
  title: 'Consultoria de Vendas Prospecta Mundi',
  description: 'Prospecta Mundi é uma consultoria de vendas com as melhores práticas de vendas.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-br">
      <head>
        <meta name="viewport" content="width=device-width, minimum-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={undefined} />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;1,9..40,100&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AnalyticsComponent></AnalyticsComponent>
        <Navbar></Navbar>
        {children}
        <Backdrop />
        <FooterSection />
      </body>
    </html>
  )
}