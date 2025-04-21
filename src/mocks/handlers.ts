import { chartHandlers } from '@/mocks/handlers/chartHandlers';
import { bannerHandlers } from '@/mocks/handlers/bannerHandlers';
import { eventHandler } from '@/mocks/handlers/eventHandler';
import { newsHandlers } from '@/mocks/handlers/newsHandlers';

export const handlers = [
  ...chartHandlers,
  ...bannerHandlers,
  ...eventHandler,
  ...newsHandlers,
];
