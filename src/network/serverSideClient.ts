import { CategoryDto } from "@/interfaces/CategoryDto";
import { PaginatedList } from "@/interfaces/PaginatedList";
import { PostDto } from "@/interfaces/PostDto";

export function getPageNumber(searchParams?: { [key: string]: string | string[] | undefined }) {
    if (!searchParams || !searchParams['page'])
      return 1;

      const page = searchParams['page'];
      return Number(page);
}

export function getQuery(searchParams?: { [key: string]: string | string[] | undefined }) {
      if (!searchParams || !searchParams['q']) {
          return null;
      }

      const queryParam = searchParams['q'];

      if (typeof queryParam === 'string') {
          return queryParam;
      }

      if (Array.isArray(queryParam) && queryParam.length > 0) {
          return queryParam[0];
      }

      return null;
  }

export async function getPosts(page: number, pageSize: number, query: string | null) {
    const baseURL = process.env.NEXT_PUBLIC_APP_BASE_URL_API_SERVER_SIDE;
    const endPointPost = baseURL + "blog/Post/anonymous/GetAll";
    
    const params = new URLSearchParams();
  
    params.append('page', page.toString());
    params.append('pageSize', pageSize.toString());
    
    if (query)
      params.append('query', query);
    
    const urlWithParams = `${endPointPost}?${params.toString()}`;
  
    const response = await fetch(urlWithParams, { cache: 'no-store' });
    const result : PaginatedList<PostDto> = await response.json();
    return result;
  }
  
  export async function getLastestPosts() {
    const baseURL = process.env.NEXT_PUBLIC_APP_BASE_URL_API_SERVER_SIDE;
    const endPointPost = baseURL + "blog/Post/anonymous/GetAll";
  
    const params = new URLSearchParams();
  
    params.append('page', '1');
    params.append('pageSize', '5');
    
    const urlComParametros = `${endPointPost}?${params.toString()}`;
  
    const response = await fetch(urlComParametros, { cache: 'no-store' });
    const result : PaginatedList<PostDto> = await response.json();
    return result;
  }
  
  export async function getCategories() {
    const baseURL = process.env.NEXT_PUBLIC_APP_BASE_URL_API_SERVER_SIDE;
    const endPointCategory = baseURL + "blog/Category/anonymous/GetAll";
  
    const response = await fetch(endPointCategory, { cache: 'no-store' });
    const result : PaginatedList<CategoryDto> = await response.json();
    return result;
  }