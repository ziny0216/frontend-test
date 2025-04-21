import { http, HttpResponse } from 'msw';
import { eventData } from '@/mocks/data/eventData';
import { createPaginationRes } from '@/utils/response';

export const eventHandler = [
  http.get('/api/event', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const limit = Number(url.searchParams.get('limit') || 10);
    const result = createPaginationRes(eventData, page, limit);
    return HttpResponse.json(result.body, { status: result.status });
  }),
];
