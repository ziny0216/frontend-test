import { http, HttpResponse } from 'msw';
import { hotNewsData, newsData, whookData } from '@/mocks/data/postData';
import { createPaginationRes } from '@/utils/response';

export const postHandler = [
  http.get('/api/news', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const limit = Number(url.searchParams.get('limit') || 10);
    const result = createPaginationRes(newsData, page, limit);
    return HttpResponse.json(result.body, { status: result.status });
  }),

  http.get('/api/news/hot', () => {
    return HttpResponse.json(hotNewsData);
  }),

  http.get('/api/whook', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const limit = Number(url.searchParams.get('limit') || 10);
    const result = createPaginationRes(whookData, page, limit);
    return HttpResponse.json(result.body, { status: result.status });
  }),
];
