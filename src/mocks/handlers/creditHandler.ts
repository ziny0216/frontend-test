import { http, HttpResponse } from 'msw';
import { creditData } from '@/mocks/data/creditData';
import { createPaginationRes } from '@/utils/response';

export const creditHandler = [
  http.get('/api/credit', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const limit = Number(url.searchParams.get('limit') || 10);
    const result = createPaginationRes(creditData, page, limit);
    return HttpResponse.json(result.body, { status: result.status });
  }),
];
