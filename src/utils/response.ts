import { whookData } from '@/mocks/data/postData';

export interface PaginatedResult<T> {
  page: number;
  limit: number;
  total: number;
  data: T[];
}

export interface PaginatedError {
  error: string;
}

export function createPaginationRes<T>(
  data: T[],
  page: number,
  limit: number,
): { status: number; body: PaginatedResult<T> | PaginatedError } {
  const total = whookData.length;
  const maxPage = Math.ceil(total / limit);

  if (page < 1) {
    return {
      status: 400,
      body: { error: '유효하지 않은 페이지입니다.' },
    };
  }

  const start = (page - 1) * limit;
  const paginated = data.slice(start, start + limit);

  return {
    status: 200,
    body: {
      page,
      limit,
      total,
      data: page > maxPage ? [] : paginated,
    },
  };
}
