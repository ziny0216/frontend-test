# 프론트엔드 사전 과제

<hr>


https://hanteo-yeojin.vercel.app/ <br>

### 과제 요구 사항

- 좌<->우 슬라이드를 통한 카테고리간 이동
- 카테고리간 이동은 상단의 탭 메뉴 클릭과, 좌<->우 슬라이드 터치를 통해서만 가능
- 카테고리에 속한 콘텐츠는 리스트형 뷰로 구성되고, 무한 스크롤
- 중단의 배너 영역은 슬라이드형이며, 최소 3개의 배너로 구성하고 무한루프 동작 및 외부 링크 이동

### 기술 스택

- **프론트엔드**
    - Next.js
    - TypeScript
    - Redux
    - SCSS

### 사용 라이브러리

- **Swiper**<br/>
  https://swiperjs.com/react
- **day.js**
  <br/>
  https://day.js.org/en/

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
├── app/              # 페이지 라우팅, layout.tsx, page.tsx 등 위치
├── components/       # 재사용 가능한 컴포넌트
├── hooks/            # 커스텀 훅
├── lib/              # 전역 상태관리
├── services/         # API 호출 로직
├── styles/           # SCSS 스타일 파일
├── types/            # 공통 타입 
└──utils/             # 유틸리티 함수
```

### css 파일구조

- 언더스코어(_)는 이 파일이 부분 파일임을 나타내먀 부분 파일은 다른 SCSS 파일로 import 해서 사용

```
styles/
  |- abstracts/
      |- variables.css  // 전역 사용 변수
  |- base/
      |- common.scss      // 공통 scss
  |- main.css            // 메인 CSS 파일 ,rest.css와 common.css 포함
```
