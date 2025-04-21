import { http, HttpResponse } from 'msw';
import { productData } from '@/mocks/data/ProductData';

export const productHandler = [
  http.get('/api/product', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const limit = Number(url.searchParams.get('limit') || 10);
    const total = productData.length;
    const maxPage = Math.ceil(total / limit);

    if (page < 1) {
      return HttpResponse.json(
        { error: '유효하지 않은 페이지입니다.' },
        { status: 400 },
      );
    }

    const start = (page - 1) * limit;
    const paginated = productData.slice(start, start + limit);

    return HttpResponse.json({
      page,
      limit,
      total,
      data: page > maxPage ? [] : paginated,
    });
  }),
];
