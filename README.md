# SKALA-FRONT

SKALA 부트캠프 프론트엔드 과정 실습 결과물입니다.
HTML · CSS · JavaScript 기초부터 종합 프로젝트 과제 입니다.

## 프로젝트 구조

```
SKALA-FRONT/
├── missions/            # 종합 과제 폴더
│   ├── 종합실습1 정리.pdf               # 과제1 정리(캡쳐&평가)
│   ├── 종합실습2 정리.pdf               # 과제2 정리(캡쳐&평가)
│   ├── 종합실습3 정리.pdf               # 과제3 정리(캡쳐&평가)
│   ├── 종합실습4 정리.pdf               # 과제4 정리(캡쳐&평가)
│   ├── index.html                # 시작 페이지
│   ├── css/
│   │   ├── signUp.css            # 종합실습① 회원가입
│   │   ├── travel.css            # 종합실습② 여행지
│   │   ├── gallery.css           # 종합실습③ 갤러리
│   │   └── todo.css              # 종합실습④ 투두
│   ├── js/
│   │   ├── signupResult.js       # 종합실습① 쿼리스트링 → table
│   │   ├── todo.js               # 종합실습③ 다크모드 토글
│   │   ├── app.js                # 종합실습④ 화면 모듈
│   │   └── storage.js            # 종합실습④ 데이터 모듈
│   ├── html/
│   │   ├── signup/
│   │   │   ├── signUp.html       # 종합실습① 회원가입 폼
│   │   │   └── signUpResult.html # 종합실습① 결과 페이지
│   │   ├── travel/
│   │   │   └── travel.html       # 종합실습② 여행지 소개
│   │   ├── gallery/
│   │   │   └── gallery.html      # 종합실습③ 상품 카드 갤러리
│   │   └── todo/
│   │       └── todo.html         # 종합실습④ 할 일 관리 앱
│   ├── images/
│   │   ├── gallery/              # 상품 이미지
│   │   └── travel/               # 여행지 이미지
│   └── videos/
│       └── travel/               # 여행지 영상
|
|
└── additional-missions/  # 교안 추가과제 (프로필, 여행, 시간표 등)
    ├── css/
    │   └── style.css
    └── html/                   
```

## 종합실습 요약

| # | 과제 | 핵심 기술 |
|---|------|----------|
| ① | 회원가입 & 결과 페이지 | form, input 유효성 검증, URLSearchParams, position:fixed |
| ② | 여행지 소개 페이지 | 시맨틱 태그, figure/figcaption, video, 앵커 스크롤 |
| ③ | 반응형 상품 카드 갤러리 | CSS 변수, Grid/Flexbox, Media Query, @keyframes, 다크모드 |
| ④ | 인터랙티브 할 일 관리 앱 | DOM 조작, 이벤트 위임, ES 모듈, localStorage, async/await fetch |

## 실행 방법

종합실습 ④는 ES 모듈을 사용하므로 **로컬 서버**로 실행해야 합니다.