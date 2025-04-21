import { chartHandlers } from '@/mocks/handlers/chartHandlers';
import { bannerHandlers } from '@/mocks/handlers/bannerHandlers';
import { eventHandler } from '@/mocks/handlers/eventHandler';
import { postHandler } from '@/mocks/handlers/postHandler';
import { productHandler } from '@/mocks/handlers/producHandler';
import { creditHandler } from '@/mocks/handlers/creditHandler';

export const handlers = [
  ...chartHandlers,
  ...bannerHandlers,
  ...eventHandler,
  ...postHandler,
  ...productHandler,
  ...creditHandler,
];
