import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCategories, getPosts } from './network/serverSideClient';
import { MetadataRoute } from 'next';

const URL = process.env.NEXT_PUBLIC_APP_BASE_URL!;

 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {


    const resultPostsFromAPI = await getPosts(1, 1000, null);
    const postsFromAPI = resultPostsFromAPI.items;
    const resultCategoriesFromAPI = await getCategories();
    const categoriesFromAPI = resultCategoriesFromAPI.items;

  const posts = postsFromAPI.map(({ slug }) => ({
    url: `${URL}${slug}`,
    lastModified: new Date().toISOString(),
  }));

  
  const categories = categoriesFromAPI.map(({ slug }) => ({
    url: `${URL}blog/categorias/${slug}`,
    lastModified: new Date().toISOString(),
  }));
 
  const routeNames = ["", "sobre", "servicos", "blog", "contato", "vendas-ampliadas-e-sucesso-garantido"];

  const staticRoutes : MetadataRoute.Sitemap = routeNames.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  const routes : MetadataRoute.Sitemap = [...staticRoutes, ...posts, ...categories];
  const generatedSiteMap = generateSiteMap(routes);


  const response = new NextResponse(generatedSiteMap);
  response.headers.set('Content-Type', 'text/xml');
  response.headers.set('Cache-Control', 'stale-while-revalidate, s-maxage=3600');

  return response;
}
 
export const config = {
    matcher: [
      '/sitemap.xml',
    ],
  }


  function generateSiteMap(routes: MetadataRoute.Sitemap) {
    const urlSet = routes
      .map((route) => {
        const { url, lastModified, changeFrequency, priority } = route;
  
        // Verifica se url está definida
        if (!url) {
          return '';
        }
  
        const tags = [];
  
        tags.push(`<url><loc>${url}</loc>`);
  
        // Adiciona lastModified se estiver definido
        if (lastModified) {
          tags.push(`<lastmod>${lastModified}</lastmod>`);
        }
  
        // Adiciona changeFrequency se estiver definido
        if (changeFrequency) {
          tags.push(`<changefreq>${changeFrequency}</changefreq>`);
        }
  
        // Adiciona priority se estiver definido
        if (priority !== undefined) {
          tags.push(`<priority>${priority}</priority>`);
        }
  
        tags.push(`</url>`);
        return tags.join('');
      })
      .join('');
  
    return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       ${urlSet}
     </urlset>`;
  }
  