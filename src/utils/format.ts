//숫자 한글 체크 , 천단위 콤마
export const formatLocalString = (value: number | string) => {
  // 입력값이 문자열 혹은 숫자로 변환 가능한 경우
  if (typeof value === 'string' && !isNaN(Number(value))) {
    value = Number(value);
  }

  // 입력값이 숫자인 경우
  if (typeof value === 'number') {
    return value.toLocaleString();
  }

  // 변환할 수 없는 값의 경우 오류 메시지 반환
  throw new Error('Input must be a number or a numeric string.');
};
