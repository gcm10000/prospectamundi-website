// app/sitemap.js
 
import { getCategories, getPosts } from "@/network/serverSideClient";
 
const URL = process.env.NEXT_PUBLIC_APP_BASE_URL;
 
export default async function sitemap() {

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
 
  const routes = ["", "sobre", "servicos", "blog", "contato"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [...routes, ...posts, ...categories];
}