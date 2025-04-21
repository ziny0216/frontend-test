import { http, HttpResponse } from 'msw';
import { chartData } from '@/mocks/data/chartData';
import { createPaginationRes } from '@/utils/response';

export const chartHandlers = [
  http.get('/api/chart', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const limit = Number(url.searchParams.get('limit') || 10);
    const result = createPaginationRes(chartData, page, limit);
    return HttpResponse.json(result.body, { status: result.status });
  }),
];
