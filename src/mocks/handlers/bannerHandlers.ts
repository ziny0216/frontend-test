import { http, HttpResponse } from 'msw';
import { bannerData } from '@/mocks/data/banner';

export const bannerHandlers = [
  http.get('/api/banner', () => {
    return HttpResponse.json(bannerData);
  }),
];
