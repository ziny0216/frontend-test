import { chartHandlers } from '@/mocks/handlers/chartHandlers';
import { bannerHandlers } from '@/mocks/handlers/bannerHandlers';
import { eventHandler } from '@/mocks/handlers/eventHandler';
import { newsHandlers } from '@/mocks/handlers/newsHandlers';
import { productHandler } from '@/mocks/handlers/producHandler';

export const handlers = [
  ...chartHandlers,
  ...bannerHandlers,
  ...eventHandler,
  ...newsHandlers,
  ...productHandler,
];
