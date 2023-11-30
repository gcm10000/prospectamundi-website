import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Backdrop from './backdrop'
import FooterSection from '@/components/FooterSection'
import '@/components/Transictions/Transictions.css';
import AnalyticsComponent from '@/components/AnalyticsComponent';
import RedirectComponent from '@/components/RedirectComponent'
import GoogleAnalytics from '@/components/GoogleAnalytics'


export const metadata: Metadata = {
  title: 'Consultoria de Vendas Prospecta Mundi',
  description: 'Descubra uma consultoria de vendas impactante. A Prospecta Mundi oferece estratégias eficazes e práticas de vendas para impulsionar seu sucesso comercial.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const content = `
      window.dataLayer = window.dataLayer || [];
      gtag('js', new Date());

      gtag('config', 'G-EHK3WWQML4');
  `;

  const createMarkup = () => {
    return { __html: content };
  };

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
        <GoogleAnalytics />
        <RedirectComponent></RedirectComponent>
        <AnalyticsComponent></AnalyticsComponent>
        <Navbar></Navbar>
        {children}
        <Backdrop /> 
        <FooterSection />
      </body>
    </html>
  )
}