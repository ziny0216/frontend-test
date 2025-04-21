import { http, HttpResponse } from 'msw';
import { hotNewsData, newsData, whookData } from '@/mocks/data/postData';

export const postHandler = [
  http.get('/api/news', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const limit = Number(url.searchParams.get('limit') || 10);
    const total = newsData.length;
    const maxPage = Math.ceil(total / limit);

    if (page < 1) {
      return HttpResponse.json(
        { error: '유효하지 않은 페이지입니다.' },
        { status: 400 },
      );
    }

    const start = (page - 1) * limit;
    const paginated = newsData.slice(start, start + limit);

    return HttpResponse.json({
      page,
      limit,
      total,
      data: page > maxPage ? [] : paginated,
    });
  }),

  http.get('/api/news/hot', () => {
    return HttpResponse.json(hotNewsData);
  }),

  http.get('/api/whook', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const limit = Number(url.searchParams.get('limit') || 10);
    const total = whookData.length;
    const maxPage = Math.ceil(total / limit);

    if (page < 1) {
      return HttpResponse.json(
        { error: '유효하지 않은 페이지입니다.' },
        { status: 400 },
      );
    }

    const start = (page - 1) * limit;
    const paginated = whookData.slice(start, start + limit);

    return HttpResponse.json({
      page,
      limit,
      total,
      data: page > maxPage ? [] : paginated,
    });
  }),
];
