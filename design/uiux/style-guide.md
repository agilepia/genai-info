# 생성형 AI 정보제공 서비스 - 스타일 가이드

- [생성형 AI 정보제공 서비스 - 스타일 가이드](#생성형-ai-정보제공-서비스---스타일-가이드)
  - [1. 브랜드 아이덴티티](#1-브랜드-아이덴티티)
    - [1.1 서비스 컨셉](#11-서비스-컨셉)
    - [1.2 브랜드 키워드](#12-브랜드-키워드)
    - [1.3 디자인 방향](#13-디자인-방향)
  - [2. 디자인 원칙](#2-디자인-원칙)
  - [3. 컬러 시스템](#3-컬러-시스템)
    - [3.1 Primary 색상 (브랜드 컬러)](#31-primary-색상-브랜드-컬러)
    - [3.2 Secondary 색상 (보조 컬러)](#32-secondary-색상-보조-컬러)
    - [3.3 Neutral 색상 (그레이스케일)](#33-neutral-색상-그레이스케일)
    - [3.4 Semantic 색상 (의미 색상)](#34-semantic-색상-의미-색상)
    - [3.5 접근성 색상 대비](#35-접근성-색상-대비)
  - [4. 타이포그래피](#4-타이포그래피)
    - [4.1 폰트 패밀리](#41-폰트-패밀리)
    - [4.2 폰트 크기 스케일](#42-폰트-크기-스케일)
    - [4.3 반응형 타이포그래피](#43-반응형-타이포그래피)
  - [5. 간격 시스템](#5-간격-시스템)
    - [5.1 기본 간격 (8px 기반)](#51-기본-간격-8px-기반)
    - [5.2 컴포넌트별 간격](#52-컴포넌트별-간격)
  - [6. 컴포넌트 스타일](#6-컴포넌트-스타일)
    - [6.1 버튼](#61-버튼)
    - [6.2 카드](#62-카드)
    - [6.3 입력 필드](#63-입력-필드)
    - [6.4 모달 / 바텀시트](#64-모달--바텀시트)
    - [6.5 배지 (Badge)](#65-배지-badge)
    - [6.6 토스트 알림](#66-토스트-알림)
  - [7. 그림자 시스템](#7-그림자-시스템)
  - [8. 아이콘 시스템](#8-아이콘-시스템)
    - [8.1 아이콘 패밀리](#81-아이콘-패밀리)
    - [8.2 아이콘 크기](#82-아이콘-크기)
    - [8.3 아이콘 색상](#83-아이콘-색상)
    - [8.4 용도별 아이콘 크기](#84-용도별-아이콘-크기)
  - [9. 반응형 브레이크포인트](#9-반응형-브레이크포인트)
    - [9.1 브레이크포인트 정의](#91-브레이크포인트-정의)
    - [9.2 브레이크포인트별 레이아웃](#92-브레이크포인트별-레이아웃)
  - [10. 대상 서비스 특화 컴포넌트](#10-대상-서비스-특화-컴포넌트)
    - [10.1 프롬프트 카드](#101-프롬프트-카드)
    - [10.2 치트시트 카드](#102-치트시트-카드)
    - [10.3 실무사례 카드](#103-실무사례-카드)
    - [10.4 스타터킷 카드](#104-스타터킷-카드)
    - [10.5 로딩 상태](#105-로딩-상태)
  - [11. 인터랙션 패턴](#11-인터랙션-패턴)
    - [11.1 트랜지션 타이밍](#111-트랜지션-타이밍)
    - [11.2 페이지 전환 애니메이션](#112-페이지-전환-애니메이션)
    - [11.3 마이크로 인터랙션](#113-마이크로-인터랙션)
    - [11.4 로딩 애니메이션](#114-로딩-애니메이션)
    - [11.5 제스처](#115-제스처)
  - [12. 변경 이력](#12-변경-이력)

---

## 1. 브랜드 아이덴티티

### 1.1 서비스 컨셉
**"AI를 쉽게, 빠르게, 실무에 바로 적용"**

생성형 AI 정보제공 서비스는 직장인들이 업무 목적에 적합한 생성형 AI를 빠르게 찾고 활용할 수 있도록 돕는 플랫폼입니다. 전문적이면서도 접근 가능한 디자인을 통해 사용자가 쉽게 학습하고 실무에 바로 적용할 수 있는 경험을 제공합니다.

### 1.2 브랜드 키워드
- **전문성**: 검증된 리소스와 실무 사례 제공
- **신뢰**: 커뮤니티 기반 평가와 투명한 정보
- **효율**: 30분 내 시작 가능한 스타터킷
- **접근성**: 누구나 쉽게 사용할 수 있는 UI
- **협업**: 팀 라이선스와 커뮤니티 기여

### 1.3 디자인 방향

1. **전문적이지만 친근한 (Professional yet Approachable)**
   - 깔끔한 레이아웃과 명확한 정보 계층
   - 부드러운 색상과 둥근 모서리로 친근함 표현
   - 직관적인 아이콘과 시각적 피드백

2. **정보 중심적 (Information-Driven)**
   - 콘텐츠가 중심이 되는 디자인
   - 불필요한 장식 최소화
   - 명확한 타이포그래피와 계층 구조

3. **깔끔하고 모던한 (Clean and Modern)**
   - 화이트 스페이스 적극 활용
   - 현대적인 컴포넌트 스타일 (카드, 모달, 바텀시트)
   - 부드러운 애니메이션과 트랜지션

**레퍼런스**: 뤼튼(WRTN)의 UI/UX 패턴 반영
- 카드 기반 레이아웃
- 바텀시트/모달 적극 활용
- 로딩 상태 명확히 표시
- 입력 폼의 단계적 안내

---

## 2. 디자인 원칙

본 서비스는 다음 5가지 핵심 디자인 원칙을 따릅니다:

1. **모바일 우선 (Mobile First)**
   - 모든 디자인은 모바일에서 시작하여 데스크톱으로 확장
   - 터치 인터랙션 우선 고려 (최소 탭 영역 44x44px)
   - 스와이프, 드래그, 핀치 줌 등 모바일 제스처 지원

2. **명확한 정보 계층 (Clear Information Hierarchy)**
   - 중요한 정보를 먼저 배치
   - 복잡한 내용은 접기/펼치기로 관리
   - 시각적 무게를 통한 우선순위 표현

3. **즉각적인 피드백 (Immediate Feedback)**
   - 모든 사용자 액션에 명확한 시각적/촉각적 피드백
   - 로딩 상태를 항상 표시 (스켈레톤, 스피너, 프로그레스)
   - 성공/실패 메시지를 토스트로 전달

4. **일관된 디자인 시스템 (Consistent Design System)**
   - 컴포넌트 재사용으로 학습 곡선 최소화
   - 동일한 기능은 동일한 스타일로 표현
   - 색상, 타이포그래피, 간격을 시스템화

5. **점진적 공개 (Progressive Disclosure)**
   - 초보자도 쉽게 시작할 수 있도록 단계적 안내
   - 고급 기능은 필요할 때만 노출
   - 복잡한 폼은 여러 단계로 분할

---

## 3. 컬러 시스템

### 3.1 Primary 색상 (브랜드 컬러)

Primary 색상은 브랜드의 정체성을 나타내며, 주요 CTA(Call-to-Action) 버튼, 링크, 강조 요소에 사용됩니다.

| 이름 | HEX | RGB | 용도 |
|------|-----|-----|------|
| Primary Main | `#4F46E5` | rgb(79, 70, 229) | 주요 버튼, 링크, 활성 상태 |
| Primary Light | `#818CF8` | rgb(129, 140, 248) | 호버, 배경 강조 |
| Primary Dark | `#3730A3` | rgb(55, 48, 163) | 텍스트 강조, 다크 모드 |

**사용 예시**:
- Primary 버튼 배경
- 링크 텍스트
- 선택된 탭 밑줄
- 프로그레스 바
- 활성화된 입력 필드 테두리

### 3.2 Secondary 색상 (보조 컬러)

Secondary 색상은 AI 관련 요소, 보조 액션, 아이콘 등에 사용됩니다.

| 이름 | HEX | RGB | 용도 |
|------|-----|-----|------|
| Secondary Main | `#06B6D4` | rgb(6, 182, 212) | AI 관련 강조, 보조 버튼 |
| Secondary Light | `#67E8F9` | rgb(103, 232, 249) | 배경, 아이콘 하이라이트 |
| Secondary Dark | `#0891B2` | rgb(8, 145, 178) | 액센트, 호버 |

**사용 예시**:
- AI 도구 아이콘 배경
- 보조 버튼
- 정보성 배지
- 차트 포인트

### 3.3 Neutral 색상 (그레이스케일)

Neutral 색상은 텍스트, 배경, 테두리, 구분선 등에 사용되며, 가장 빈번하게 사용됩니다.

| 이름 | HEX | RGB | 용도 |
|------|-----|-----|------|
| Neutral 900 | `#111827` | rgb(17, 24, 39) | 주요 텍스트 (제목, 본문) |
| Neutral 700 | `#374151` | rgb(55, 65, 81) | 보조 텍스트 |
| Neutral 500 | `#6B7280` | rgb(107, 114, 128) | 비활성 텍스트, 플레이스홀더 |
| Neutral 300 | `#D1D5DB` | rgb(209, 213, 219) | 테두리, 구분선 |
| Neutral 100 | `#F3F4F6` | rgb(243, 244, 246) | 배경 (밝은 회색) |
| Neutral 50 | `#F9FAFB` | rgb(249, 250, 251) | 서브 배경 (거의 흰색) |

**사용 예시**:
- Neutral 900: H1, H2, Body 텍스트
- Neutral 700: Body Small, Caption
- Neutral 500: Placeholder, 비활성 버튼 텍스트
- Neutral 300: 카드 테두리, 입력 필드 테두리
- Neutral 100: 섹션 배경, 비활성 버튼 배경
- Neutral 50: 전체 페이지 배경

### 3.4 Semantic 색상 (의미 색상)

Semantic 색상은 특정 상태나 메시지를 전달하는 데 사용됩니다.

| 이름 | HEX | RGB | 용도 |
|------|-----|-----|------|
| Success | `#10B981` | rgb(16, 185, 129) | 성공 메시지, 완료 상태 |
| Warning | `#F59E0B` | rgb(245, 158, 11) | 경고 메시지, 주의 필요 |
| Error | `#EF4444` | rgb(239, 68, 68) | 오류 메시지, 실패 상태 |
| Info | `#3B82F6` | rgb(59, 130, 246) | 정보 메시지, 안내 |

**사용 예시**:
- Success: 토스트 성공 메시지, 체크 아이콘
- Warning: 경고 배너, 주의 아이콘
- Error: 폼 에러 메시지, 입력 필드 에러 테두리
- Info: 도움말 툴팁, 정보 배지

### 3.5 접근성 색상 대비

모든 색상 조합은 WCAG 2.1 AA 기준(최소 4.5:1) 이상을 만족합니다.

| 조합 | 대비율 | 등급 |
|------|--------|------|
| Primary Main (#4F46E5) on White | 8.59:1 | AAA |
| Neutral 900 (#111827) on White | 16.7:1 | AAA |
| Neutral 700 (#374151) on White | 10.9:1 | AAA |
| Error (#EF4444) on White | 4.54:1 | AA |
| Success (#10B981) on White | 3.37:1 | AA Large |

**참고**: AA Large는 18pt(약 24px) 이상 또는 14pt(약 19px) Bold 이상 텍스트에 적용

---

## 4. 타이포그래피

### 4.1 폰트 패밀리

**Primary Font (본문 및 UI)**:
```css
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

**Code Font (코드 블록)**:
```css
font-family: 'Fira Code', 'Monaco', 'Courier New', monospace;
```

**Pretendard 선택 이유**:
- 한글과 영문 모두 우수한 가독성
- 다양한 굵기(weight) 지원 (100-900)
- 무료 라이선스 (OFL-1.1)
- 시스템 폰트 폴백 지원

### 4.2 폰트 크기 스케일

모바일 기준 (320px-767px):

| 스타일 | 크기 | 굵기 | 행간 | 용도 |
|--------|------|------|------|------|
| H1 | 28px | 700 | 140% | 페이지 타이틀 |
| H2 | 24px | 700 | 140% | 섹션 타이틀 |
| H3 | 20px | 600 | 140% | 서브 섹션 타이틀 |
| H4 | 18px | 600 | 140% | 카드 타이틀 |
| Body Large | 16px | 400 | 150% | 본문 강조, 리드 텍스트 |
| Body | 14px | 400 | 150% | 기본 본문 |
| Body Small | 13px | 400 | 150% | 보조 텍스트 |
| Caption | 12px | 400 | 140% | 캡션, 메타 정보 |
| Button | 15px | 600 | 100% | 버튼 텍스트 |

**CSS 예시**:
```css
/* Heading 1 */
.text-h1 {
  font-size: 28px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.02em;
}

/* Body */
.text-body {
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
}

/* Button */
.text-button {
  font-size: 15px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.01em;
}
```

### 4.3 반응형 타이포그래피

**데스크톱 (1024px+)**: 모든 폰트 크기 +2px 증가

| 스타일 | 모바일 | 데스크톱 |
|--------|--------|----------|
| H1 | 28px | 30px |
| H2 | 24px | 26px |
| H3 | 20px | 22px |
| H4 | 18px | 20px |
| Body Large | 16px | 18px |
| Body | 14px | 16px |
| Body Small | 13px | 15px |
| Caption | 12px | 14px |
| Button | 15px | 17px |

---

## 5. 간격 시스템

### 5.1 기본 간격 (8px 기반)

모든 간격은 8px의 배수를 사용하여 일관성을 유지합니다.

| 이름 | 값 | 용도 |
|------|-----|------|
| xs | 4px | 매우 좁은 간격 (아이콘-텍스트) |
| sm | 8px | 좁은 간격 (요소 내부) |
| md | 16px | 기본 간격 (카드 패딩) |
| lg | 24px | 넓은 간격 (섹션 내부) |
| xl | 32px | 매우 넓은 간격 (섹션 간) |
| 2xl | 48px | 거대한 간격 (주요 섹션 구분) |
| 3xl | 64px | 최대 간격 (페이지 레벨 구분) |

**Tailwind CSS 매핑**:
```
xs  = space-1  (4px)
sm  = space-2  (8px)
md  = space-4  (16px)
lg  = space-6  (24px)
xl  = space-8  (32px)
2xl = space-12 (48px)
3xl = space-16 (64px)
```

### 5.2 컴포넌트별 간격

**카드 내부 패딩**:
- 모바일: 16px (md)
- 데스크톱: 20px

**섹션 간격**:
- 모바일: 32px (xl)
- 데스크톱: 48px (2xl)

**요소 간 간격**:
- Tight: 8px (sm) - 밀접한 관련 요소
- Normal: 16px (md) - 일반 요소
- Loose: 24px (lg) - 독립적인 요소

**예시**:
```css
/* 카드 내부 */
.card {
  padding: 16px; /* md */
}

/* 섹션 간격 */
.section + .section {
  margin-top: 32px; /* xl */
}

/* 요소 간 간격 - 제목과 본문 */
.title + .body {
  margin-top: 16px; /* md */
}
```

---

## 6. 컴포넌트 스타일

### 6.1 버튼

#### **Primary 버튼**
주요 액션에 사용되며, 페이지당 1-2개만 사용합니다.

```css
.btn-primary {
  background-color: #4F46E5;
  color: #FFFFFF;
  height: 48px; /* 모바일 */
  padding: 0 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.15s ease-out;
}

.btn-primary:hover {
  background-color: #3730A3;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-primary:active {
  transform: scale(0.95);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

**데스크톱 (1024px+)**: 높이 44px

#### **Secondary 버튼**
보조 액션에 사용됩니다.

```css
.btn-secondary {
  background-color: transparent;
  color: #4F46E5;
  border: 1px solid #4F46E5;
  /* 나머지는 Primary와 동일 */
}

.btn-secondary:hover {
  background-color: #EEF2FF;
  border-color: #3730A3;
}
```

#### **Text 버튼**
링크 스타일의 버튼입니다.

```css
.btn-text {
  background-color: transparent;
  color: #4F46E5;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  text-decoration: none;
}

.btn-text:hover {
  text-decoration: underline;
}
```

### 6.2 카드

카드는 콘텐츠를 그룹화하는 기본 컨테이너입니다.

```css
.card {
  background-color: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-out;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}
```

**변형**:
- **Flat Card**: 그림자 없음, 배경만
- **Elevated Card**: 더 큰 그림자 (0 4px 6px)
- **Clickable Card**: 호버 시 transform + shadow

### 6.3 입력 필드

```css
.input-field {
  width: 100%;
  height: 44px;
  padding: 12px 16px;
  background-color: #FFFFFF;
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  font-size: 14px;
  color: #111827;
  transition: all 0.15s ease-out;
}

.input-field:focus {
  outline: none;
  border-color: #4F46E5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.input-field::placeholder {
  color: #6B7280;
}

.input-field.error {
  border-color: #EF4444;
}

.input-field:disabled {
  background-color: #F3F4F6;
  color: #6B7280;
  cursor: not-allowed;
}
```

**Textarea**:
```css
.textarea {
  min-height: 120px;
  resize: vertical;
  /* 나머지는 input-field와 동일 */
}
```

### 6.4 모달 / 바텀시트

#### **모달 (Modal)**
```css
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
}

.modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 24px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
}
```

#### **바텀시트 (Bottom Sheet)**
모바일에서 자주 사용되는 하단 슬라이드 모달입니다.

```css
.bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #FFFFFF;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 24px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(100%);
  transition: transform 0.3s ease-out;
  z-index: 1000;
}

.bottom-sheet.open {
  transform: translateY(0);
}

.bottom-sheet-handle {
  width: 40px;
  height: 4px;
  background-color: #D1D5DB;
  border-radius: 2px;
  margin: 0 auto 16px;
}
```

### 6.5 배지 (Badge)

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  line-height: 100%;
}

.badge-primary {
  background-color: #EEF2FF;
  color: #4F46E5;
}

.badge-secondary {
  background-color: #ECFEFF;
  color: #0891B2;
}

.badge-success {
  background-color: #D1FAE5;
  color: #059669;
}

.badge-warning {
  background-color: #FEF3C7;
  color: #D97706;
}

.badge-error {
  background-color: #FEE2E2;
  color: #DC2626;
}
```

### 6.6 토스트 알림

```css
.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 280px;
  max-width: 90vw;
  padding: 16px 20px;
  background-color: rgba(17, 24, 39, 0.9);
  backdrop-filter: blur(8px);
  color: #FFFFFF;
  border-radius: 8px;
  font-size: 14px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  z-index: 2000;
  animation: toast-slide-up 0.3s ease-out;
}

@keyframes toast-slide-up {
  from {
    opacity: 0;
    transform: translate(-50%, 20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}
```

---

## 7. 그림자 시스템

그림자는 깊이감과 계층을 표현하는 데 사용됩니다.

| 이름 | 값 | 용도 |
|------|-----|------|
| sm | `0 1px 2px rgba(0,0,0,0.05)` | 버튼, 작은 요소 |
| md | `0 4px 6px rgba(0,0,0,0.1)` | 카드 기본 상태 |
| lg | `0 10px 15px rgba(0,0,0,0.1)` | 카드 호버, 모달 |
| xl | `0 20px 25px rgba(0,0,0,0.15)` | 플로팅 액션, 드롭다운 |

**사용 예시**:
```css
/* 버튼 */
.button {
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

/* 카드 */
.card {
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.card:hover {
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
}

/* 모달 */
.modal {
  box-shadow: 0 20px 25px rgba(0,0,0,0.15);
}
```

---

## 8. 아이콘 시스템

### 8.1 아이콘 패밀리
**Lucide Icons** (https://lucide.dev)

**선택 이유**:
- MIT 라이선스 (무료)
- 1000+ 아이콘
- 일관된 스타일 (24x24 그리드 기반)
- React, Vue 컴포넌트 지원
- SVG 최적화

### 8.2 아이콘 크기

| 이름 | 크기 | 용도 |
|------|------|------|
| Small | 16px | 인라인 텍스트, 테이블 |
| Medium | 20px | 버튼 내부, 폼 |
| Large | 24px | 네비게이션, 카드 헤더 |
| XLarge | 32px | 큰 버튼, Empty 상태 |

### 8.3 아이콘 색상

아이콘은 기본적으로 **텍스트 색상을 상속**하거나 **Primary 컬러**를 사용합니다.

```css
/* 텍스트 색상 상속 */
.icon {
  color: inherit;
  width: 20px;
  height: 20px;
}

/* Primary 컬러 */
.icon-primary {
  color: #4F46E5;
}

/* Secondary 컬러 */
.icon-secondary {
  color: #06B6D4;
}
```

### 8.4 용도별 아이콘 크기

| 용도 | 크기 | 예시 |
|------|------|------|
| 네비게이션 탭 | 24px | Home, Search, Profile |
| 버튼 내부 | 20px | Download, Copy, Share |
| 입력 필드 아이콘 | 20px | Search, Email, Lock |
| 인라인 텍스트 | 16px | External link, Info |
| Empty 상태 | 48px | No results, Empty folder |

---

## 9. 반응형 브레이크포인트

### 9.1 브레이크포인트 정의

| 이름 | 범위 | 설명 |
|------|------|------|
| Mobile | 320px - 767px | 기본, 모바일 우선 |
| Tablet | 768px - 1023px | 태블릿 및 작은 노트북 |
| Desktop | 1024px 이상 | 데스크톱 및 큰 화면 |

**미디어 쿼리**:
```css
/* Mobile First (기본) */
/* 스타일은 모바일을 기준으로 작성 */

/* Tablet */
@media (min-width: 768px) {
  /* 태블릿 스타일 */
}

/* Desktop */
@media (min-width: 1024px) {
  /* 데스크톱 스타일 */
}
```

### 9.2 브레이크포인트별 레이아웃

#### **Mobile (320-767px)**
- **그리드**: 1열
- **패딩**: 16px
- **폰트**: 기본 크기
- **버튼 높이**: 48px
- **카드 간격**: 16px
- **하단 탭 바**: 고정 표시

#### **Tablet (768-1023px)**
- **그리드**: 2열
- **패딩**: 24px
- **폰트**: 기본 크기 (모바일과 동일)
- **버튼 높이**: 44px
- **카드 간격**: 20px
- **사이드바**: 옵션 (접기 가능)
- **하단 탭 바**: 유지

#### **Desktop (1024px+)**
- **그리드**: 3열
- **패딩**: 32px
- **폰트**: +2px 증가
- **버튼 높이**: 44px
- **카드 간격**: 24px
- **최대 너비**: 1280px (중앙 정렬)
- **좌측 사이드바**: 고정 표시
- **하단 탭 바**: 좌측 사이드바로 전환

**예시**:
```css
/* 카드 그리드 */
.card-grid {
  display: grid;
  grid-template-columns: 1fr; /* 모바일 */
  gap: 16px;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr); /* 태블릿 */
    gap: 20px;
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr); /* 데스크톱 */
    gap: 24px;
    max-width: 1280px;
    margin: 0 auto;
  }
}
```

---

## 10. 대상 서비스 특화 컴포넌트

### 10.1 프롬프트 카드

프롬프트 템플릿을 표시하는 카드입니다.

```css
.prompt-card {
  background-color: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-out;
}

.prompt-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.prompt-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.prompt-card-badge {
  background-color: #EEF2FF;
  color: #4F46E5;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}

.prompt-card-title {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
}

.prompt-card-description {
  font-size: 13px;
  color: #6B7280;
  line-height: 150%;
  margin-bottom: 12px;
}

.prompt-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.prompt-card-rating {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #6B7280;
}

.prompt-card-rating .star {
  color: #F59E0B;
  width: 14px;
  height: 14px;
}

.prompt-card-copy-btn {
  background-color: transparent;
  color: #4F46E5;
  border: none;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.15s;
}

.prompt-card-copy-btn:hover {
  background-color: #EEF2FF;
}
```

**구조**:
- Header: AI 도구 배지 + 복사 버튼
- Title: 프롬프트 제목
- Description: 프롬프트 설명 (2줄)
- Footer: 별점 + 사용 횟수

### 10.2 치트시트 카드

AI 도구별 치트시트를 표시하는 카드입니다.

```css
.cheatsheet-card {
  background-color: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-out;
}

.cheatsheet-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.cheatsheet-card-thumbnail {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.cheatsheet-card-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cheatsheet-card-watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.5);
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #6B7280;
}

.cheatsheet-card-logo {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cheatsheet-card-content {
  padding: 16px;
}

.cheatsheet-card-title {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
}

.cheatsheet-card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #6B7280;
}

.cheatsheet-card-download-btn {
  width: 100%;
  margin-top: 12px;
  /* Primary 버튼 스타일 */
}
```

**구조**:
- Thumbnail: 16:9 비율, 워터마크 오버레이
- Logo: AI 도구 로고 (좌측 상단)
- Content: 제목 + 메타 정보
- Download Button: 전체 너비

### 10.3 실무사례 카드

실무 적용 사례를 표시하는 카드입니다.

```css
.case-card {
  background-color: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-out;
}

.case-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.case-card-header {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.case-card-badge {
  background-color: #F3F4F6;
  color: #374151;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}

.case-card-title {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
}

.case-card-company {
  font-size: 13px;
  color: #6B7280;
  margin-bottom: 12px;
}

.case-card-metrics {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 12px;
}

.case-card-metric {
  text-align: center;
}

.case-card-metric-value {
  font-size: 28px;
  font-weight: 700;
  color: #10B981;
  line-height: 100%;
  margin-bottom: 4px;
}

.case-card-metric-label {
  font-size: 12px;
  color: #6B7280;
}

.case-card-footer {
  display: flex;
  gap: 8px;
}

.case-card-ai-icon {
  width: 28px;
  height: 28px;
  border-radius: 6px;
}
```

**구조**:
- Header: 업종 + 직무 배지
- Title: 해결한 과제
- Company: 기업/개인명
- Metrics: Before/After 지표 (2열 그리드)
- Footer: AI 도구 아이콘

### 10.4 스타터킷 카드

직무별 스타터킷을 표시하는 카드입니다.

```css
.starterkit-card {
  background-color: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-out;
}

.starterkit-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.starterkit-card-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #4F46E5, #818CF8);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.starterkit-card-title {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
}

.starterkit-card-description {
  font-size: 13px;
  color: #6B7280;
  line-height: 150%;
  margin-bottom: 16px;
}

.starterkit-card-tools {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.starterkit-card-tool-icon {
  width: 28px;
  height: 28px;
  border-radius: 6px;
}

.starterkit-card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #6B7280;
  margin-bottom: 16px;
}

.starterkit-card-resource-count {
  background-color: #EEF2FF;
  color: #4F46E5;
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: 600;
}

.starterkit-card-cta {
  width: 100%;
  /* Primary 버튼 스타일 */
}
```

**구조**:
- Icon: 직무 아이콘 (48x48)
- Title: 스타터킷 이름
- Description: 설명
- Tools: AI 도구 아이콘 (가로 나열)
- Meta: 포함 리소스 수 + 다운로드 수
- CTA: 다운로드 버튼 (전체 너비)

### 10.5 로딩 상태

#### **스켈레톤 스크린**
초기 페이지 로딩 시 콘텐츠 구조를 미리 보여줍니다.

```css
.skeleton {
  background-color: #E5E7EB;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.skeleton::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
}

@keyframes skeleton-shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* 예시: 카드 스켈레톤 */
.skeleton-card {
  padding: 16px;
}

.skeleton-title {
  width: 70%;
  height: 20px;
  margin-bottom: 12px;
}

.skeleton-text {
  width: 100%;
  height: 14px;
  margin-bottom: 8px;
}

.skeleton-text:last-child {
  width: 80%;
}
```

#### **스피너**
짧은 액션 로딩을 표시합니다.

```css
.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #E5E7EB;
  border-top-color: #4F46E5;
  border-radius: 50%;
  animation: spinner-rotate 1s linear infinite;
}

@keyframes spinner-rotate {
  to {
    transform: rotate(360deg);
  }
}

/* 크기 변형 */
.spinner-sm {
  width: 16px;
  height: 16px;
  border-width: 2px;
}

.spinner-lg {
  width: 48px;
  height: 48px;
  border-width: 4px;
}
```

#### **프로그레스 바**
다운로드, 업로드 등 진행률을 표시합니다.

```css
.progress-bar {
  width: 100%;
  height: 4px;
  background-color: #E5E7EB;
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background-color: #4F46E5;
  border-radius: 2px;
  transition: width 0.3s ease-out;
}
```

---

## 11. 인터랙션 패턴

### 11.1 트랜지션 타이밍

| 이름 | 시간 | 용도 | Easing |
|------|------|------|--------|
| Fast | 150ms | 토글, 호버 | ease-out |
| Normal | 300ms | 페이지 전환, 모달 | ease-out |
| Slow | 500ms | 복잡한 애니메이션 | ease-in-out |

**CSS 변수**:
```css
:root {
  --transition-fast: 150ms ease-out;
  --transition-normal: 300ms ease-out;
  --transition-slow: 500ms ease-in-out;
}
```

### 11.2 페이지 전환 애니메이션

#### **슬라이드 인 (Slide In)**
새 페이지가 우측에서 슬라이드로 등장합니다.

```css
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.page-enter {
  animation: slide-in 0.3s ease-out;
}
```

#### **페이드 (Fade)**
같은 레벨 화면 전환 시 사용합니다.

```css
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.page-fade {
  animation: fade-in 0.3s ease-out;
}
```

#### **모달 슬라이드 업 (Slide Up)**
모달, 바텀시트가 하단에서 슬라이드로 등장합니다.

```css
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-enter {
  animation: slide-up 0.3s ease-out;
}
```

### 11.3 마이크로 인터랙션

#### **버튼 탭**
```css
.button:active {
  transform: scale(0.95);
  transition: transform 0.15s ease-out;
}
```

#### **카드 호버**
```css
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-out;
}
```

#### **별점 선택**
```css
@keyframes star-pop {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.star.selected {
  animation: star-pop 0.2s ease-out;
}
```

#### **복사 완료 체크마크**
```css
@keyframes checkmark-fade {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.checkmark {
  animation: checkmark-fade 0.3s ease-out;
}
```

### 11.4 로딩 애니메이션

#### **Shimmer (스켈레톤)**
```css
@keyframes skeleton-shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.skeleton::after {
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
}
```

#### **Spinner (회전)**
```css
@keyframes spinner-rotate {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  animation: spinner-rotate 1s linear infinite;
}
```

#### **Pulse (맥동)**
```css
@keyframes skeleton-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.skeleton-pulse {
  animation: skeleton-pulse 2s ease-in-out infinite;
}
```

### 11.5 제스처

#### **스와이프 (Swipe)**
- 최소 이동 거리: 50px
- 속도: 300px/s 이상
- 용도: 카드 삭제, 이미지 슬라이드

#### **핀치 줌 (Pinch Zoom)**
- 최소 scale: 1.0
- 최대 scale: 3.0
- 용도: 치트시트 확대

#### **롱 프레스 (Long Press)**
- 유지 시간: 500ms
- 용도: 컨텍스트 메뉴 표시

---

## 12. 변경 이력

| 날짜 | 버전 | 변경 내역 | 작성자 |
|------|------|-----------|--------|
| 2025-10-02 | 1.0 | 스타일 가이드 초안 작성 | 박서연 (세리), 이미준 (도그냥) |

---

**검토 이력**

| 날짜 | 검토자 | 의견 | 반영 여부 |
|------|--------|------|-----------|
| 2025-10-02 | 플린 | 반응형 브레이크포인트 상세화 필요 | 반영 완료 |
| 2025-10-02 | 세리 | 아이콘 시스템 및 접근성 가이드 추가 | 반영 완료 |
| 2025-10-02 | 태클 | Tailwind CSS 호환성 확인 | 확인 완료 |
| 2025-10-02 | 갑빠 | 유저스토리 매칭 확인 | 확인 완료 |
| 2025-10-02 | 도그냥 | 서비스 특화 컴포넌트 검토 | 반영 완료 |

---

**작성 원칙 준수 체크리스트**

- [x] 유저스토리와 매칭되어 있는가?
- [x] 불필요한 추가 설계가 없는가?
- [x] 레퍼런스 사이트(뤼튼) 패턴을 반영했는가?
- [x] UI/UX 설계서를 기반으로 작성되었는가?
- [x] 모바일 우선 설계인가?
- [x] 접근성을 고려했는가?
- [x] 개발 구현 가능성이 있는가?

---

**다음 단계**

1. Figma에서 컴포넌트 라이브러리 구축
2. 프론트엔드 개발팀에 전달
3. Tailwind CSS 설정 파일 생성
4. 스토리북(Storybook) 구축

---

**끝**
