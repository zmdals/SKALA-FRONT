# SKALA-FRONT

SKALA 부트캠프 프론트엔드 과정 실습 결과물입니다.
HTML · CSS · JavaScript 기초부터 종합 프로젝트까지의 과정을 담고 있습니다.

## 프로젝트 구조

```
SKALA-FRONT/
├── missions/
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
└── additional-missions/
    ├── css/
    │   └── style.css
    └── html/                     # 기초 미션 (프로필, 여행, 시간표 등)
```

## 종합실습 요약

| # | 과제 | 핵심 기술 |
|---|------|----------|
| ① | 회원가입 & 결과 페이지 | form, input 유효성 검증, URLSearchParams, position:fixed |
| ② | 여행지 소개 페이지 | 시맨틱 태그, figure/figcaption, video, 앵커 스크롤 |
| ③ | 반응형 상품 카드 갤러리 | CSS 변수, Grid/Flexbox, Media Query, @keyframes, 다크모드 |
| ④ | 인터랙티브 할 일 관리 앱 | DOM 조작, 이벤트 위임, ES 모듈, localStorage, async/await fetch |

## 실행 방법

종합실습 ③④는 ES 모듈을 사용하므로 **로컬 서버**로 실행해야 합니다.

```bash
# VS Code Live Server (권장)
index.html 우클릭 → Open with Live Server

# 또는 터미널
cd missions
python -m http.server 5500
# http://localhost:5500 접속
```

## 기술 스택

HTML5 · CSS3 · JavaScript (ES6+)

## Author

임승민 (Seungmin Lim) · SKALA 1기 · 2026.07
