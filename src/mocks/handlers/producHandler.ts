import { http, HttpResponse } from 'msw';
import { productData } from '@/mocks/data/ProductData';
import { createPaginationRes } from '@/utils/response';

export const productHandler = [
  http.get('/api/product', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const limit = Number(url.searchParams.get('limit') || 10);
    const result = createPaginationRes(productData, page, limit);
    return HttpResponse.json(result.body, { status: result.status });
  }),
];
