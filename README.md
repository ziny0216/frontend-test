# 프론트엔드 사전 과제

<hr>

Next.js App Router 기반으로 <strong>게시판 리스트 및 무한스크롤 기능</strong>을 구현했고,  
모바일까지 대응한 <strong>반응형 UI</strong>로 구성했습니다.
<br>
https://hanteo-yeojin.vercel.app/

### 과제 요구 사항

- 좌<->우 슬라이드를 통한 카테고리간 이동
- 카테고리간 이동은 상단의 탭 메뉴 클릭과, 좌<->우 슬라이드 터치를 통해서만 가능
- 카테고리에 속한 콘텐츠는 리스트형 뷰로 구성되고, 무한 스크롤
- 중단의 배너 영역은 슬라이드형이며, 최소 3개의 배너로 구성하고 무한루프 동작 및 외부 링크 이동

### 주요 기능

- Swiper 기반 헤더 네비게이션
- 리스트 UI 컴포넌트 공통화 (`InfiniteList`)
- 무한스크롤 기반의 게시물 리스트 (`IntersectionObserver`, `React Query`)
- Swiper 배너 무한 루프, 외부 링크 이동
- mock API 기반 테스트 (`MSW`)
- 반응형 및 접근성 고려된 마크업

#### 리스트 페이지 구현

- 무한스크롤 게시판 구현  
  → `IntersectionObserver`와 `React Query`를 활용해 스크롤 하단 도달 시 다음 페이지 자동 로딩

- 공통 InfiniteList 컴포넌트 추상화  
  → 리스트 로직(fetch, observer, paging 등)은 `InfiniteList`로 공통 처리  
  → 아이템 렌더링은 `renderItem` 함수로 유연하게 분기 (`PostItem`, `ProductItem` 등 재사용 가능)

- 반응형 리스트 레이아웃 구성  
  → SCSS Grid/Flex 기반으로 모바일 뷰까지 대응

- 리스트 컨테이너(`ListContainer`)로 타이틀/서브타이틀 UI 일관화

### 기술 스택

- **프론트엔드**
    - Next.js
    - TypeScript
    - Redux
    - SCSS
    - React Query

### 사용 라이브러리

- **Swiper**<br/>
  https://swiperjs.com/react<br/>
  → 리스트 상단 슬라이드 배너 UI 구현에 사용<br/>
  <br/>
- **day.js**<br/>
  https://day.js.org/en/<br/>
  → 날짜 포맷 및 계산<br/>
  <br/>
- **MSW (Mock Service Worker)**<br/>
  https://mswjs.io<br/>
  → API 응답 모킹 및 개발용 테스트 서버 구축<br/>
  <br/>
- **React Query (@tanstack/react-query)**<br/>
  https://tanstack.com/query/latest<br/>
  → 무한스크롤 및 비동기 상태 관리<br/>
  <br/>
- **IntersectionObserver API**<br/>
  https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API<br/>
  → 스크롤 위치 감지하여 다음 페이지 자동 로딩 처리<br/>

### 필요 조건

- Node.js (버전 18 이상 권장)
- npm

### 설치 단계

1. **프로젝트 클론하기**
2. 의존성 설치하기

```sh
npm install
```

3.eslint, prettier 설치 및 적용

```sh
npm install eslint --save-dev
npm install prettier --save-dev
```

### 파일 구조

```
src/
├── app/               # 페이지 라우팅, layout.tsx, page.tsx 등 위치
├── constants/         # 고정 상수들 (탭 리스트)
├── components/        # 재사용 가능한 컴포넌트
├── hooks/             # 커스텀 훅
├── lib/               # 전역 상태관리
├── mocks/             # MSW (Mock Service Worker)
│   ├── data/          # 더미 데이터
│   ├── handlers/      # 각 API 핸들러
│   ├── browser.ts
│   ├── handler.ts
│   ├── index.ts      
│   └── server.ts
├── styles/            # SCSS 스타일 파일
├── types/             # 공통 타입 
└──utils/              # 유틸리티 함수
```

