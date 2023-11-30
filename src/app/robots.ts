import { MetadataRoute } from 'next'
 
const URL = process.env.NEXT_PUBLIC_APP_BASE_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    //   disallow: '/private/',
    },
    sitemap: `${URL}sitemap.xml`,
  }
}