import { http, HttpResponse } from 'msw';
import { chartData } from '@/mocks/data/chartData';

export const handlers = [
  http.get('/api/chart', ({ request }) => {
    console.log('📦 Mock GET /api/chart 호출됨:', request.url);
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1); // 페이징
    const limit = Number(url.searchParams.get('limit') || 10); // 개수
    const total = chartData.length; // 총 데이터 수
    const maxPage = Math.ceil(total / limit); // 마지막 페이지

    if (page < 1) {
      return HttpResponse.json(
        { error: '유효하지 않은 페이지입니다.' },
        { status: 400 },
      );
    }

    const start = (page - 1) * limit;
    const end = start + limit;

    const paginated = chartData.slice(start, end);

    const response = {
      page,
      limit,
      total,
      data: page > maxPage ? [] : paginated,
    };

    return HttpResponse.json(response);
  }),
];
