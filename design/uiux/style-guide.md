# 생성형 AI 정보 제공 서비스 - UI/UX 스타일 가이드

- [생성형 AI 정보 제공 서비스 - UI/UX 스타일 가이드](#생성형-ai-정보-제공-서비스---uiux-스타일-가이드)
  - [브랜드 아이덴티티](#브랜드-아이덴티티)
  - [디자인 원칙](#디자인-원칙)
  - [컬러 시스템](#컬러-시스템)
  - [타이포그래피](#타이포그래피)
  - [간격 시스템](#간격-시스템)
  - [컴포넌트 스타일](#컴포넌트-스타일)
  - [반응형 브레이크포인트](#반응형-브레이크포인트)
  - [대상 서비스 특화 컴포넌트](#대상-서비스-특화-컴포넌트)
  - [인터랙션 패턴](#인터랙션-패턴)
  - [변경 이력](#변경-이력)

---

## 브랜드 아이덴티티

### 디자인 컨셉
**"Smart Discovery, Simple Decision"**
- 복잡한 AI 도구 세상에서 현명한 발견과 간단한 결정을 돕는 가이드
- 전문적 정확성과 사용자 친화적 경험의 조화
- 데이터 기반의 신뢰할 수 있는 추천 서비스

### 브랜드 성격
**신뢰성 (Trustworthy)**
- 정확하고 검증된 정보 제공
- 일관되고 예측 가능한 사용자 경험
- 개인정보 보호 및 보안 중시

**효율성 (Efficient)**
- 빠른 정보 접근과 의사결정 지원
- 불필요한 단계 제거, 직관적 인터페이스
- 개인화를 통한 맞춤형 경험

**혁신성 (Innovative)**
- AI 기반 맞춤 추천 시스템
- 지속적인 서비스 개선과 발전
- 최신 기술 트렌드 반영

**접근성 (Accessible)**
- 모든 사용자가 쉽게 사용할 수 있는 설계
- 다양한 업무 도메인과 경력 수준 고려
- 포용적 디자인 철학

---

## 디자인 원칙

### 1. Information Hierarchy (정보 위계)
**명확한 정보 우선순위**
- 중요도에 따른 시각적 가중치 부여
- 3단계 정보 레벨: Primary → Secondary → Tertiary
- 스캔 가능한 레이아웃으로 빠른 정보 파악 지원

**시각적 구분**
- 제목, 부제목, 본문의 명확한 구분
- 색상, 크기, 간격을 통한 그룹화
- 아이콘과 텍스트의 조화로운 정보 전달

### 2. Cognitive Load Reduction (인지 부하 최소화)
**점진적 정보 공개**
- 핵심 정보 우선 노출, 상세 정보 접근 가능
- 페이지당 주요 액션 3개 이하로 제한
- 복잡한 기능의 단계별 분할

**일관된 패턴**
- 반복적 UI 패턴으로 학습 부담 감소
- 예측 가능한 인터랙션 결과
- 전역적 네비게이션 구조 유지

### 3. Data-Driven Design (데이터 중심 설계)
**시각적 데이터 표현**
- 복잡한 비교 데이터의 직관적 시각화
- 차트, 그래프, 아이콘을 통한 정보 전달
- 수치보다 상대적 비교에 중점

**실시간 피드백**
- 사용자 행동에 대한 즉각적 반응
- 로딩 상태, 성공/오류 피드백 명확화
- 진행 상황 시각화

### 4. Mobile-First Responsive (모바일 우선 반응형)
**터치 최적화**
- 최소 44px 터치 타겟 크기
- 엄지손가락 접근 영역 고려
- 스와이프, 탭 등 자연스러운 제스처 활용

**콘텐츠 우선순위**
- 화면 크기별 핵심 기능 우선 노출
- 불필요한 요소 숨김/축소
- 세로형 스크롤 중심 설계

---

## 컬러 시스템

### 기본 컬러 팔레트

**Primary (주 색상) - Intelligent Blue**
```
Primary 50:  #f0f7ff (배경, 하이라이트)
Primary 100: #c2e0ff (연한 배경)
Primary 200: #94c9ff (비활성 상태)
Primary 300: #5ba7ff (보조 요소)
Primary 400: #2d85ff (기본 링크)
Primary 500: #0066ff (메인 브랜드) ⭐
Primary 600: #0052cc (호버 상태)
Primary 700: #003d99 (눌림 상태)
Primary 800: #002966 (강조 텍스트)
Primary 900: #001433 (헤딩)
```

**Secondary (보조 색상) - Growth Green**
```
Secondary 50:  #f3fdf4 (성공 배경)
Secondary 100: #d1fad4 (긍정 알림)
Secondary 200: #a3f7ac (진행 표시)
Secondary 300: #6ef47a (성공 아이콘)
Secondary 400: #3ef248 (액센트)
Secondary 500: #00e01e (성공, 추천) ⭐
Secondary 600: #00b318 (호버)
Secondary 700: #008012 (눌림)
Secondary 800: #004d0c (강조)
Secondary 900: #001a06 (진한 텍스트)
```

**Accent (액센트) - Innovation Purple**
```
Accent 50:  #faf5ff (특별 배경)
Accent 100: #e9d5ff (프리미엄)
Accent 200: #d1b3ff (특수 기능)
Accent 300: #b38fff (추천 배지)
Accent 400: #9466ff (특별 버튼)
Accent 500: #7c3aff (AI 기능, 특별) ⭐
Accent 600: #6b2ecc (호버)
Accent 700: #4d2199 (눌림)
Accent 800: #311466 (진한 액센트)
Accent 900: #150733 (최고 강조)
```

### 시맨틱 컬러

**Gray Scale (그레이스케일)**
```
Gray 50:  #fafafa (최상위 배경)
Gray 100: #f5f5f5 (카드 배경)
Gray 200: #eeeeee (테두리)
Gray 300: #e0e0e0 (구분선)
Gray 400: #bdbdbd (비활성 텍스트)
Gray 500: #9e9e9e (보조 텍스트)
Gray 600: #757575 (일반 텍스트)
Gray 700: #616161 (중요 텍스트)
Gray 800: #424242 (제목)
Gray 900: #212121 (최고 대비)
```

**Semantic Colors (시맨틱 컬러)**
```
Success: #00e01e (성공, 완료, 추천)
Warning: #ff9500 (주의, 확인 필요)
Error:   #ff3333 (오류, 실패, 삭제)
Info:    #0066ff (정보, 중성적 알림)
```

### 컬러 사용 규칙

**접근성 준수**
- 텍스트 대비비: 최소 4.5:1 (AA 등급)
- 중요 텍스트: 7:1 이상 (AAA 등급)
- 색상에만 의존하지 않는 정보 전달

**컬러 적용 우선순위**
1. **Primary**: 메인 브랜드, 주요 액션 버튼
2. **Secondary**: 성공 상태, 추천 표시
3. **Accent**: 특별 기능, AI 관련 요소
4. **Gray**: 텍스트, 배경, 구분선

---

## 타이포그래피

### 폰트 패밀리

**주 폰트 (Korean Primary)**
```
font-family: 'Pretendard Variable', 'Pretendard', 
             -apple-system, BlinkMacSystemFont, 
             'Segoe UI', 'Noto Sans KR', 
             'Malgun Gothic', sans-serif;
```

**영문 폰트 (English Primary)**
```
font-family: 'Inter', 'SF Pro Display', 
             -apple-system, BlinkMacSystemFont, 
             'Segoe UI', system-ui, sans-serif;
```

**코드 폰트 (Monospace)**
```
font-family: 'JetBrains Mono', 'Fira Code', 
             'Monaco', 'Consolas', monospace;
```

### 타이포그래피 스케일

**Display (대형 제목)**
```
Display Large:  48px / 56px (1.167) | Font Weight: 700
Display Medium: 40px / 48px (1.2)   | Font Weight: 700
Display Small:  36px / 44px (1.222) | Font Weight: 600
```

**Headline (제목)**
```
H1: 32px / 40px (1.25)  | Font Weight: 700 | Letter Spacing: -0.5px
H2: 28px / 36px (1.286) | Font Weight: 600 | Letter Spacing: -0.25px
H3: 24px / 32px (1.333) | Font Weight: 600
H4: 20px / 28px (1.4)   | Font Weight: 600
H5: 18px / 24px (1.333) | Font Weight: 500
H6: 16px / 24px (1.5)   | Font Weight: 500
```

**Body (본문)**
```
Body Large:  18px / 28px (1.556) | Font Weight: 400
Body Medium: 16px / 24px (1.5)   | Font Weight: 400 ⭐
Body Small:  14px / 20px (1.429) | Font Weight: 400
```

**Label (라벨)**
```
Label Large:  14px / 20px (1.429) | Font Weight: 500
Label Medium: 12px / 16px (1.333) | Font Weight: 500 ⭐
Label Small:  11px / 16px (1.455) | Font Weight: 500
```

### 타이포그래피 사용 가이드

**제목 계층 구조**
- H1: 페이지 메인 제목 (1개만 사용)
- H2: 섹션 제목 (주요 영역 구분)
- H3: 서브섹션 제목 (카테고리, 그룹)
- H4-H6: 세부 제목 (카드 제목, 항목명)

**본문 텍스트**
- Body Medium: 기본 본문 텍스트
- Body Large: 중요한 설명, 소개 문구
- Body Small: 부가 정보, 메타 데이터

**UI 텍스트**
- Label Medium: 버튼 텍스트, 폼 라벨
- Label Large: 중요한 UI 라벨
- Label Small: 상태 표시, 부가 정보

---

## 간격 시스템

### 기본 간격 단위 (4px 기준)

**Spacing Scale**
```
xs:   4px   (최소 간격)
sm:   8px   (작은 간격)
md:   12px  (기본 간격) ⭐
lg:   16px  (중간 간격)
xl:   24px  (큰 간격)
2xl:  32px  (매우 큰 간격)
3xl:  48px  (섹션 간격)
4xl:  64px  (페이지 간격)
5xl:  96px  (특별한 간격)
```

### 컴포넌트별 간격

**카드 (Card)**
```
내부 패딩: 16px (lg)
카드 간 간격: 12px (md)
카드 그룹 간격: 24px (xl)
```

**버튼 (Button)**
```
내부 패딩: 8px 16px (sm lg)
버튼 간 간격: 8px (sm)
버튼 그룹: 4px (xs)
```

**폼 (Form)**
```
필드 간 간격: 16px (lg)
필드 그룹: 24px (xl)
라벨-입력: 4px (xs)
```

**리스트 (List)**
```
아이템 간 간격: 8px (sm)
리스트 그룹: 16px (lg)
인덴트: 16px (lg)
```

### 레이아웃 간격

**컨테이너 (Container)**
```
최대 너비: 1200px
좌우 패딩: 16px (Mobile), 24px (Tablet), 32px (Desktop)
```

**섹션 (Section)**
```
섹션 간 간격: 48px (3xl) - Mobile
섹션 간 간격: 64px (4xl) - Desktop
```

**그리드 (Grid)**
```
컬럼 간격: 12px (md) - Mobile
컬럼 간격: 16px (lg) - Tablet
컬럼 간격: 24px (xl) - Desktop
```

---

## 컴포넌트 스타일

### 버튼 (Button)

**Primary Button**
```css
background: var(--primary-500);
color: white;
border-radius: 8px;
padding: 8px 16px;
font-size: 14px;
font-weight: 500;
transition: all 0.2s ease;

/* Hover */
background: var(--primary-600);
transform: translateY(-1px);
box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);

/* Active */
background: var(--primary-700);
transform: translateY(0);
```

**Secondary Button**
```css
background: transparent;
color: var(--primary-500);
border: 1px solid var(--primary-500);
border-radius: 8px;
padding: 8px 16px;

/* Hover */
background: var(--primary-50);
border-color: var(--primary-600);
```

**Ghost Button**
```css
background: transparent;
color: var(--gray-700);
border: none;
padding: 8px 12px;

/* Hover */
background: var(--gray-100);
color: var(--gray-800);
```

### 입력 필드 (Input)

**Text Input**
```css
border: 1px solid var(--gray-300);
border-radius: 8px;
padding: 12px 16px;
font-size: 16px;
background: white;
transition: border-color 0.2s ease;

/* Focus */
border-color: var(--primary-500);
box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
outline: none;

/* Error */
border-color: var(--error);
box-shadow: 0 0 0 3px rgba(255, 51, 51, 0.1);
```

**Select Dropdown**
```css
appearance: none;
background-image: url("data:image/svg+xml...");
background-position: right 12px center;
background-repeat: no-repeat;
background-size: 16px;
padding-right: 40px;
```

### 카드 (Card)

**Default Card**
```css
background: white;
border-radius: 12px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
border: 1px solid var(--gray-200);
padding: 16px;
transition: box-shadow 0.2s ease;

/* Hover */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
transform: translateY(-2px);
```

**Tool Card (도구 카드)**
```css
position: relative;
overflow: hidden;

/* Featured Badge */
.featured-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--accent-500);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
}
```

### 배지 및 태그 (Badge & Tag)

**Status Badge**
```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge--success { background: var(--secondary-100); color: var(--secondary-700); }
.badge--warning { background: #fff5e6; color: #cc7a00; }
.badge--error { background: #ffe6e6; color: #cc0000; }
.badge--info { background: var(--primary-100); color: var(--primary-700); }
```

**Category Tag**
```css
.tag {
  background: var(--gray-100);
  color: var(--gray-700);
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 13px;
  border: 1px solid var(--gray-200);
  transition: all 0.2s ease;
}

.tag:hover {
  background: var(--primary-100);
  color: var(--primary-700);
  border-color: var(--primary-300);
}
```

---

## 반응형 브레이크포인트

### 브레이크포인트 정의
```css
/* Mobile First 접근 */
:root {
  --breakpoint-sm: 640px;   /* Large Mobile */
  --breakpoint-md: 768px;   /* Tablet */
  --breakpoint-lg: 1024px;  /* Desktop */
  --breakpoint-xl: 1280px;  /* Large Desktop */
  --breakpoint-2xl: 1536px; /* Extra Large */
}

/* Media Queries */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### 반응형 그리드 시스템
```css
.grid {
  display: grid;
  gap: 12px; /* Mobile */
  grid-template-columns: 1fr; /* Single column */
}

@media (min-width: 640px) {
  .grid {
    gap: 16px;
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
  }
}

@media (min-width: 1024px) {
  .grid {
    gap: 24px;
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
  }
}

@media (min-width: 1280px) {
  .grid-4 {
    grid-template-columns: repeat(4, 1fr); /* 4 columns */
  }
}
```

### 반응형 타이포그래피
```css
/* Fluid Typography */
.heading-1 {
  font-size: clamp(28px, 4vw, 36px);
  line-height: clamp(36px, 5vw, 44px);
}

.heading-2 {
  font-size: clamp(24px, 3.5vw, 32px);
  line-height: clamp(32px, 4.5vw, 40px);
}

.body-text {
  font-size: clamp(14px, 2.5vw, 16px);
  line-height: clamp(20px, 3.5vw, 24px);
}
```

---

## 대상 서비스 특화 컴포넌트

### AI 도구 카드 (Tool Card)
```css
.tool-card {
  position: relative;
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid var(--gray-200);
  transition: all 0.3s ease;
}

.tool-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-300);
}

.tool-card__header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
}

.tool-card__logo {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
}

.tool-card__title {
  font-size: 18px;
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: 4px;
}

.tool-card__category {
  font-size: 13px;
  color: var(--gray-600);
}

.tool-card__rating {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
}

.tool-card__price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
}

.tool-card__actions {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}
```

### 추천 점수 (Recommendation Score)
```css
.recommendation-score {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: linear-gradient(135deg, var(--accent-500), var(--accent-400));
  color: white;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.recommendation-score__icon {
  width: 16px;
  height: 16px;
}

.recommendation-score--high {
  background: linear-gradient(135deg, var(--secondary-500), var(--secondary-400));
}

.recommendation-score--medium {
  background: linear-gradient(135deg, #ff9500, #ffb347);
}

.recommendation-score--low {
  background: linear-gradient(135deg, var(--gray-500), var(--gray-400));
}
```

### 비교 테이블 (Comparison Table)
```css
.comparison-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.comparison-table th {
  background: var(--gray-50);
  padding: 16px 12px;
  text-align: left;
  font-weight: 600;
  border-bottom: 1px solid var(--gray-200);
}

.comparison-table td {
  padding: 12px;
  border-bottom: 1px solid var(--gray-100);
  vertical-align: middle;
}

.comparison-table__winner {
  background: var(--secondary-50);
  color: var(--secondary-700);
  font-weight: 600;
}

.comparison-table__feature-check {
  display: flex;
  align-items: center;
  justify-content: center;
}

.comparison-table__feature-check--yes {
  color: var(--secondary-500);
}

.comparison-table__feature-check--no {
  color: var(--gray-400);
}

.comparison-table__feature-check--partial {
  color: var(--warning);
}
```

### 필터 패널 (Filter Panel)
```css
.filter-panel {
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid var(--gray-200);
  height: fit-content;
  position: sticky;
  top: 24px;
}

.filter-section {
  margin-bottom: 24px;
}

.filter-section:last-child {
  margin-bottom: 0;
}

.filter-section__title {
  font-size: 14px;
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.filter-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
}

.filter-option input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: var(--primary-500);
}

.filter-option label {
  font-size: 14px;
  color: var(--gray-700);
  flex: 1;
  cursor: pointer;
}

.filter-count {
  font-size: 12px;
  color: var(--gray-500);
  background: var(--gray-100);
  padding: 2px 6px;
  border-radius: 8px;
}
```

### 평점 디스플레이 (Rating Display)
```css
.rating {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.rating__stars {
  display: flex;
  gap: 2px;
}

.rating__star {
  width: 16px;
  height: 16px;
  color: var(--warning);
}

.rating__star--empty {
  color: var(--gray-300);
}

.rating__score {
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-700);
  margin-left: 4px;
}

.rating__count {
  font-size: 13px;
  color: var(--gray-500);
}

.rating--large .rating__star {
  width: 20px;
  height: 20px;
}

.rating--large .rating__score {
  font-size: 16px;
  font-weight: 600;
}
```

---

## 인터랙션 패턴

### 애니메이션 및 전환

**기본 전환 (Base Transitions)**
```css
:root {
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-spring: 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* 기본 요소 전환 */
button, a, .interactive {
  transition: all var(--transition-base);
}

/* 페이지 전환 */
.page-transition-enter {
  opacity: 0;
  transform: translateY(20px);
}

.page-transition-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: all var(--transition-slow);
}
```

**마이크로 인터랙션 (Micro-interactions)**
```css
/* 좋아요 버튼 */
.like-button {
  transform-origin: center;
  transition: transform var(--transition-fast);
}

.like-button:active {
  transform: scale(0.95);
}

.like-button--liked {
  animation: likeHeartbeat 0.6s ease-in-out;
}

@keyframes likeHeartbeat {
  0% { transform: scale(1); }
  25% { transform: scale(1.2); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* 로딩 스피너 */
.loading-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 스켈레톤 로딩 */
.skeleton {
  background: linear-gradient(90deg, 
    var(--gray-200) 25%, 
    var(--gray-100) 50%, 
    var(--gray-200) 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### 호버 효과 (Hover Effects)

**카드 호버**
```css
.card-hover {
  transition: all var(--transition-base);
  cursor: pointer;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.1),
    0 20px 48px rgba(0, 0, 0, 0.05);
}
```

**버튼 호버**
```css
.button-hover {
  position: relative;
  overflow: hidden;
}

.button-hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left var(--transition-slow);
}

.button-hover:hover::before {
  left: 100%;
}
```

### 포커스 관리 (Focus Management)

**키보드 네비게이션**
```css
/* 포커스 링 */
.focus-ring {
  outline: none;
  position: relative;
}

.focus-ring:focus-visible::after {
  content: '';
  position: absolute;
  inset: -2px;
  border: 2px solid var(--primary-500);
  border-radius: inherit;
  box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.2);
}

/* 스킵 링크 */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--primary-500);
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1000;
  transition: top var(--transition-base);
}

.skip-link:focus {
  top: 6px;
}
```

### 제스처 및 터치 (Gestures & Touch)

**스와이프 인디케이터**
```css
.swipe-container {
  position: relative;
  overflow: hidden;
}

.swipe-indicator {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
}

.swipe-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gray-400);
  transition: background var(--transition-base);
}

.swipe-dot--active {
  background: var(--primary-500);
}
```

**Pull-to-Refresh**
```css
.pull-to-refresh {
  position: relative;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-60px);
  transition: transform var(--transition-base);
}

.pull-to-refresh--active {
  transform: translateY(0);
}

.pull-refresh-icon {
  animation: spin 1s linear infinite;
}
```

---

## 변경 이력

| 버전 | 일시 | 작성자 | 변경 내용 | 비고 |
|-----|------|--------|----------|------|
| 1.0 | 2024-09-19 | 픽셀퀸 | 초기 스타일 가이드 작성 | 생성형 AI 서비스 특화 디자인 시스템 완성 |
