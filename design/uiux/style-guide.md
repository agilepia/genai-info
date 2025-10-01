# 생성형 AI 정보제공 서비스 - UI/UX 스타일 가이드

> **프로젝트**: genai-info  
> **작성일**: 2025-10-02  
> **버전**: 1.0.0

---

## 목차
- [1. 브랜드 아이덴티티](#1-브랜드-아이덴티티)
- [2. 디자인 원칙](#2-디자인-원칙)
- [3. 컬러 시스템](#3-컬러-시스템)
- [4. 타이포그래피](#4-타이포그래피)
- [5. 간격 시스템](#5-간격-시스템)
- [6. 컴포넌트 스타일](#6-컴포넌트-스타일)
- [7. 반응형 브레이크포인트](#7-반응형-브레이크포인트)
- [8. 대상 서비스 특화 컴포넌트](#8-대상-서비스-특화-컴포넌트)
- [9. 인터랙션 패턴](#9-인터랙션-패턴)
- [10. 변경 이력](#10-변경-이력)

---

## 1. 브랜드 아이덴티티

### 1.1 서비스 컨셉

**"빠르게 찾고, 바로 적용하고, 함께 성장하는 생성형 AI 허브"**

- **빠름 (Quick)**: 3클릭 안에 원하는 리소스 찾기
- **실용성 (Practical)**: 즉시 업무에 적용 가능
- **커뮤니티 (Community)**: 함께 만들어가는 지식 플랫폼

### 1.2 디자인 컨셉

**"Professional & Friendly"**

- **Professional**: 직장인을 위한 신뢰감 있는 디자인
- **Friendly**: 부담 없이 접근 가능한 친근한 인터페이스
- **Modern**: 최신 디자인 트렌드 반영

### 1.3 핵심 가치

1. **효율성**: 복잡함 없이 빠른 탐색
2. **신뢰성**: 검증된 리소스, 명확한 정보
3. **접근성**: 누구나 쉽게 사용 가능
4. **확장성**: 지속적인 성장 가능

### 1.4 브랜드 키워드

- 빠른 (Quick)
- 실용적인 (Practical)
- 신뢰할 수 있는 (Trustworthy)
- 협력적인 (Collaborative)
- 현대적인 (Modern)

---

## 2. 디자인 원칙

### 2.1 Simple & Clear (단순하고 명확하게)

**원칙**
- 한 화면에 하나의 목표
- 명확한 정보 계층 구조
- 불필요한 장식 요소 제거

**적용 예시**
- 리소스 카드: 제목 → 메타 정보 → CTA 순서
- 상세 페이지: Hero → 본문 → 부가 정보

### 2.2 Fast & Efficient (빠르고 효율적으로)

**원칙**
- 3클릭 이내 목표 달성
- 명확한 네비게이션
- 빠른 로딩 (2초 이내)

**적용 예시**
- Quick Access 카드 (대시보드)
- 상단 고정 검색바
- 원클릭 복사/다운로드

### 2.3 Consistent & Predictable (일관되고 예측 가능하게)

**원칙**
- 동일한 액션은 동일한 결과
- 일관된 컴포넌트 사용
- 패턴 반복

**적용 예시**
- 리소스 카드 (공통 디자인)
- 버튼 스타일 (Primary/Secondary/Tertiary)
- 피드백 메시지 (Toast)

### 2.4 Accessible (접근 가능하게)

**원칙**
- WCAG 2.1 AA 준수
- 키보드 네비게이션 지원
- 스크린 리더 호환

**적용 예시**
- 색상 대비 4.5:1 이상
- Focus 상태 명확히
- Alt 텍스트 제공

### 2.5 Delightful (즐겁게)

**원칙**
- 적절한 마이크로 인터랙션
- 긍정적인 피드백
- 유머러스한 에러 메시지

**적용 예시**
- 버튼 호버 애니메이션
- 성공 시 축하 이모지 🎉
- 친근한 에러 문구

---

## 3. 컬러 시스템

### 3.1 Primary Colors (주 색상)

**Indigo (인디고) - 신뢰감, 전문성**

| 변수명 | Hex | RGB | 용도 |
|--------|-----|-----|------|
| `--primary-50` | #EEF2FF | rgb(238, 242, 255) | 배경 (밝음) |
| `--primary-100` | #E0E7FF | rgb(224, 231, 255) | 호버 배경 |
| `--primary-200` | #C7D2FE | rgb(199, 210, 254) | 비활성 상태 |
| `--primary-300` | #A5B4FC | rgb(165, 180, 252) | 테두리 |
| `--primary-400` | #818CF8 | rgb(129, 140, 248) | 보조 요소 |
| **`--primary-500`** | **#6366F1** | **rgb(99, 102, 241)** | **메인 (버튼, 링크)** |
| `--primary-600` | #4F46E5 | rgb(79, 70, 229) | 호버 |
| `--primary-700` | #4338CA | rgb(67, 56, 202) | 액티브 |
| `--primary-800` | #3730A3 | rgb(55, 48, 163) | 강조 |
| `--primary-900` | #312E81 | rgb(49, 46, 129) | 매우 강조 |

### 3.2 Secondary Colors (보조 색상)

**Emerald (에메랄드) - 성공, 성장**

| 변수명 | Hex | RGB | 용도 |
|--------|-----|-----|------|
| `--secondary-50` | #ECFDF5 | rgb(236, 253, 245) | 배경 |
| `--secondary-100` | #D1FAE5 | rgb(209, 250, 229) | 호버 배경 |
| **`--secondary-500`** | **#10B981** | **rgb(16, 185, 129)** | **성공 메시지, 버튼** |
| `--secondary-600` | #059669 | rgb(5, 150, 105) | 호버 |

### 3.3 Semantic Colors (의미 색상)

**Success (성공)**
```css
--success-50: #ECFDF5;
--success-500: #10B981; /* 주 사용 */
--success-600: #059669; /* 호버 */
```

**Warning (경고)**
```css
--warning-50: #FFFBEB;
--warning-500: #F59E0B; /* 주 사용 */
--warning-600: #D97706; /* 호버 */
```

**Error (오류)**
```css
--error-50: #FEF2F2;
--error-500: #EF4444; /* 주 사용 */
--error-600: #DC2626; /* 호버 */
```

**Info (정보)**
```css
--info-50: #EFF6FF;
--info-500: #3B82F6; /* 주 사용 */
--info-600: #2563EB; /* 호버 */
```

### 3.4 Neutral Colors (중립 색상)

**Gray (회색) - 텍스트, 배경, 테두리**

| 변수명 | Hex | 용도 |
|--------|-----|------|
| `--gray-50` | #F9FAFB | 배경 (밝음) |
| `--gray-100` | #F3F4F6 | 카드 배경 |
| `--gray-200` | #E5E7EB | 테두리 (연함) |
| `--gray-300` | #D1D5DB | 테두리 |
| `--gray-400` | #9CA3AF | 플레이스홀더 |
| `--gray-500` | #6B7280 | 보조 텍스트 |
| `--gray-600` | #4B5563 | 부제목 |
| `--gray-700` | #374151 | 본문 텍스트 |
| `--gray-800` | #1F2937 | 제목 |
| `--gray-900` | #111827 | 강조 제목 |

### 3.5 배경 색상

```css
--bg-primary: #FFFFFF;      /* 메인 배경 (흰색) */
--bg-secondary: #F9FAFB;    /* 보조 배경 (gray-50) */
--bg-tertiary: #F3F4F6;     /* 카드 배경 (gray-100) */
--bg-overlay: rgba(0, 0, 0, 0.5); /* 모달 오버레이 */
```

### 3.6 텍스트 색상

```css
--text-primary: #111827;    /* 제목 (gray-900) */
--text-secondary: #4B5563;  /* 본문 (gray-600) */
--text-tertiary: #6B7280;   /* 보조 (gray-500) */
--text-disabled: #9CA3AF;   /* 비활성 (gray-400) */
--text-inverse: #FFFFFF;    /* 반전 (흰색) */
```

### 3.7 색상 사용 가이드

**버튼**
- Primary Button: `--primary-500` 배경, `--text-inverse` 텍스트
- Secondary Button: `--gray-100` 배경, `--text-primary` 텍스트
- Danger Button: `--error-500` 배경, `--text-inverse` 텍스트

**링크**
- 기본: `--primary-500`
- 호버: `--primary-600`
- 방문: `--primary-700`

**상태 표시**
- 성공: `--success-500`
- 경고: `--warning-500`
- 오류: `--error-500`
- 정보: `--info-500`

---

## 4. 타이포그래피

### 4.1 폰트 패밀리

```css
/* 한글 + 영문 */
--font-family-base: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
                    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 
                    'Droid Sans', 'Helvetica Neue', sans-serif;

/* 코드 (프롬프트 표시용) */
--font-family-mono: 'Fira Code', 'Consolas', 'Monaco', 'Andale Mono', 
                    'Ubuntu Mono', monospace;
```

**폰트 선택 이유**
- **Pretendard**: 한글 가독성 우수, 웹폰트 로딩 빠름
- **Fira Code**: 코드 가독성, 리거처 지원

### 4.2 폰트 크기 & 라인 높이

| 변수명 | 크기 (px/rem) | Line Height | 용도 |
|--------|---------------|-------------|------|
| `--text-xs` | 12px / 0.75rem | 1.5 (18px) | 캡션, 라벨 |
| `--text-sm` | 14px / 0.875rem | 1.5 (21px) | 보조 텍스트 |
| **`--text-base`** | **16px / 1rem** | **1.5 (24px)** | **기본 본문** |
| `--text-lg` | 18px / 1.125rem | 1.5 (27px) | 강조 텍스트 |
| `--text-xl` | 20px / 1.25rem | 1.4 (28px) | 소제목 |
| `--text-2xl` | 24px / 1.5rem | 1.4 (33.6px) | 섹션 제목 |
| `--text-3xl` | 30px / 1.875rem | 1.3 (39px) | 페이지 제목 |
| `--text-4xl` | 36px / 2.25rem | 1.2 (43.2px) | 히어로 제목 |
| `--text-5xl` | 48px / 3rem | 1.1 (52.8px) | 랜딩 제목 |

### 4.3 폰트 굵기

```css
--font-thin: 100;
--font-light: 300;
--font-normal: 400;      /* 기본 본문 */
--font-medium: 500;      /* 강조 텍스트 */
--font-semibold: 600;    /* 제목 */
--font-bold: 700;        /* 강조 제목 */
--font-extrabold: 800;
--font-black: 900;
```

**사용 가이드**
- 본문: `--font-normal` (400)
- 버튼, 링크: `--font-medium` (500)
- 제목: `--font-semibold` (600)
- 강조: `--font-bold` (700)

### 4.4 타이포그래피 스케일

**Heading 1 (h1) - 페이지 제목**
```css
font-size: var(--text-3xl);    /* 30px */
font-weight: var(--font-bold);  /* 700 */
line-height: 1.3;
color: var(--text-primary);
```

**Heading 2 (h2) - 섹션 제목**
```css
font-size: var(--text-2xl);    /* 24px */
font-weight: var(--font-semibold); /* 600 */
line-height: 1.4;
color: var(--text-primary);
```

**Heading 3 (h3) - 하위 섹션**
```css
font-size: var(--text-xl);     /* 20px */
font-weight: var(--font-semibold); /* 600 */
line-height: 1.4;
color: var(--text-primary);
```

**Body Text (p) - 본문**
```css
font-size: var(--text-base);   /* 16px */
font-weight: var(--font-normal); /* 400 */
line-height: 1.5;
color: var(--text-secondary);
```

**Caption - 캡션, 라벨**
```css
font-size: var(--text-sm);     /* 14px */
font-weight: var(--font-normal); /* 400 */
line-height: 1.5;
color: var(--text-tertiary);
```

### 4.5 텍스트 정렬

- 기본: `left` (왼쪽 정렬)
- 제목 (센터형): `center`
- 숫자, 평점: `right`

### 4.6 텍스트 장식

**링크**
```css
color: var(--primary-500);
text-decoration: none;
transition: color 0.2s;

&:hover {
  color: var(--primary-600);
  text-decoration: underline;
}
```

**강조**
```css
strong, b {
  font-weight: var(--font-semibold); /* 600 */
}

em, i {
  font-style: italic;
}
```

---

## 5. 간격 시스템

### 5.1 Spacing Scale (8px 기준)

| 변수명 | 크기 (px/rem) | 용도 |
|--------|---------------|------|
| `--space-0` | 0px / 0rem | 여백 없음 |
| `--space-1` | 4px / 0.25rem | 최소 간격 |
| `--space-2` | 8px / 0.5rem | 작은 간격 |
| **`--space-3`** | **12px / 0.75rem** | **기본 간격** |
| `--space-4` | 16px / 1rem | 중간 간격 |
| `--space-5` | 20px / 1.25rem | 여유 간격 |
| `--space-6` | 24px / 1.5rem | 큰 간격 |
| `--space-8` | 32px / 2rem | 섹션 간격 |
| `--space-10` | 40px / 2.5rem | 큰 섹션 간격 |
| `--space-12` | 48px / 3rem | 매우 큰 간격 |
| `--space-16` | 64px / 4rem | 페이지 간격 |
| `--space-20` | 80px / 5rem | 특대 간격 |
| `--space-24` | 96px / 6rem | 히어로 간격 |

### 5.2 간격 사용 가이드

**컴포넌트 내부 여백 (Padding)**
- 버튼: `--space-3` (12px) 상하, `--space-4` (16px) 좌우
- 카드: `--space-4` (16px) or `--space-6` (24px)
- Input: `--space-3` (12px) 상하, `--space-4` (16px) 좌우

**컴포넌트 외부 여백 (Margin)**
- 요소 간: `--space-2` (8px) ~ `--space-4` (16px)
- 섹션 간: `--space-8` (32px) ~ `--space-12` (48px)
- 페이지 상단: `--space-16` (64px)

**레이아웃 여백**
- 컨테이너 좌우: `--space-4` (16px) ~ `--space-6` (24px)
- 페이지 상하: `--space-8` (32px) ~ `--space-12` (48px)

### 5.3 간격 예시

**리소스 카드**
```css
padding: var(--space-4);        /* 16px */
margin-bottom: var(--space-4);  /* 16px */
gap: var(--space-3);            /* 12px (내부 요소 간) */
```

**섹션**
```css
padding-top: var(--space-12);    /* 48px */
padding-bottom: var(--space-12); /* 48px */
```

**페이지 컨테이너**
```css
max-width: 1280px;
margin: 0 auto;
padding: 0 var(--space-4);       /* 좌우 16px */
```

---

## 6. 컴포넌트 스타일

### 6.1 Button (버튼)

#### Primary Button
```css
/* Default */
background-color: var(--primary-500);
color: var(--text-inverse);
padding: var(--space-3) var(--space-4); /* 12px 16px */
border-radius: 8px;
font-weight: var(--font-medium);
font-size: var(--text-base);
transition: all 0.2s;
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

/* Hover */
&:hover {
  background-color: var(--primary-600);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Active */
&:active {
  background-color: var(--primary-700);
}

/* Disabled */
&:disabled {
  background-color: var(--gray-200);
  color: var(--text-disabled);
  cursor: not-allowed;
}
```

#### Secondary Button
```css
background-color: transparent;
color: var(--primary-500);
border: 1px solid var(--gray-300);
padding: var(--space-3) var(--space-4);
border-radius: 8px;

&:hover {
  background-color: var(--gray-100);
  border-color: var(--primary-500);
}
```

#### Tertiary Button (Text Button)
```css
background-color: transparent;
color: var(--primary-500);
padding: var(--space-2) var(--space-3);

&:hover {
  color: var(--primary-600);
  text-decoration: underline;
}
```

#### Button Sizes
```css
/* Small */
.btn-sm {
  padding: var(--space-2) var(--space-3); /* 8px 12px */
  font-size: var(--text-sm);
}

/* Medium (기본) */
.btn-md {
  padding: var(--space-3) var(--space-4); /* 12px 16px */
  font-size: var(--text-base);
}

/* Large */
.btn-lg {
  padding: var(--space-4) var(--space-6); /* 16px 24px */
  font-size: var(--text-lg);
}
```

### 6.2 Card (카드)

```css
background-color: var(--bg-primary);
border: 1px solid var(--gray-200);
border-radius: 12px;
padding: var(--space-4);
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
transition: all 0.2s;

/* Hover */
&:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

/* Active (클릭) */
&:active {
  transform: translateY(0);
}
```

**리소스 카드 (Resource Card)**
```css
.resource-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  
  .thumbnail {
    aspect-ratio: 16 / 9;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .title {
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
    color: var(--text-primary);
    line-height: 1.4;
    
    /* 2줄 제한 */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .meta {
    display: flex;
    gap: var(--space-2);
    font-size: var(--text-sm);
    color: var(--text-tertiary);
  }
  
  .tags {
    display: flex;
    gap: var(--space-2);
    flex-wrap: wrap;
  }
}
```

### 6.3 Input (입력 필드)

```css
/* Text Input */
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  font-size: var(--text-base);
  color: var(--text-primary);
  transition: all 0.2s;
  
  &::placeholder {
    color: var(--text-disabled);
  }
  
  /* Focus */
  &:focus {
    outline: none;
    border-color: var(--primary-500);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
  
  /* Error */
  &.error {
    border-color: var(--error-500);
  }
  
  /* Disabled */
  &:disabled {
    background-color: var(--gray-100);
    color: var(--text-disabled);
    cursor: not-allowed;
  }
}

/* Textarea */
textarea {
  min-height: 120px;
  resize: vertical;
}
```

### 6.4 Dropdown (드롭다운)

```css
select {
  appearance: none;
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  font-size: var(--text-base);
  background-image: url('data:image/svg+xml;utf8,<svg>...</svg>');
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-500);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
}
```

### 6.5 Checkbox & Radio

```css
/* Checkbox */
input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--gray-300);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:checked {
    background-color: var(--primary-500);
    border-color: var(--primary-500);
    background-image: url('data:image/svg+xml;utf8,<svg>...</svg>');
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
}

/* Radio */
input[type="radio"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--gray-300);
  border-radius: 50%;
  cursor: pointer;
  
  &:checked {
    border-color: var(--primary-500);
    background-image: radial-gradient(
      circle, 
      var(--primary-500) 40%, 
      transparent 40%
    );
  }
}
```

### 6.6 Badge (배지)

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-2); /* 4px 8px */
  border-radius: 9999px; /* full */
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  
  /* Primary */
  &.badge-primary {
    background-color: var(--primary-100);
    color: var(--primary-600);
  }
  
  /* Success */
  &.badge-success {
    background-color: var(--success-100);
    color: var(--success-600);
  }
  
  /* Warning */
  &.badge-warning {
    background-color: var(--warning-100);
    color: var(--warning-600);
  }
  
  /* Error */
  &.badge-error {
    background-color: var(--error-100);
    color: var(--error-600);
  }
}
```

### 6.7 Tag (태그)

```css
.tag {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: 6px;
  font-size: var(--text-sm);
  background-color: var(--gray-100);
  color: var(--text-secondary);
  transition: all 0.2s;
  
  &:hover {
    background-color: var(--gray-200);
  }
}
```

### 6.8 Modal (모달)

```css
/* Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--bg-overlay);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
}

/* Modal Container */
.modal {
  background-color: var(--bg-primary);
  border-radius: 12px;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  
  /* Header */
  .modal-header {
    padding: var(--space-6);
    border-bottom: 1px solid var(--gray-200);
    
    h2 {
      font-size: var(--text-2xl);
      font-weight: var(--font-semibold);
    }
  }
  
  /* Body */
  .modal-body {
    padding: var(--space-6);
  }
  
  /* Footer */
  .modal-footer {
    padding: var(--space-6);
    border-top: 1px solid var(--gray-200);
    display: flex;
    justify-content: flex-end;
    gap: var(--space-3);
  }
}
```

### 6.9 Toast (토스트 알림)

```css
.toast {
  position: fixed;
  bottom: var(--space-6);
  right: var(--space-6);
  background-color: var(--gray-800);
  color: var(--text-inverse);
  padding: var(--space-4) var(--space-6);
  border-radius: 8px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  z-index: 2000;
  animation: slideIn 0.3s ease;
  
  /* Success */
  &.toast-success {
    background-color: var(--success-500);
  }
  
  /* Error */
  &.toast-error {
    background-color: var(--error-500);
  }
  
  /* Info */
  &.toast-info {
    background-color: var(--info-500);
  }
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

### 6.10 Avatar (프로필 이미지)

```css
.avatar {
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--gray-200);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* Sizes */
  &.avatar-sm {
    width: 32px;
    height: 32px;
  }
  
  &.avatar-md {
    width: 48px;
    height: 48px;
  }
  
  &.avatar-lg {
    width: 64px;
    height: 64px;
  }
}
```

---

## 7. 반응형 브레이크포인트

### 7.1 Breakpoints

```css
/* Mobile First 접근 */

/* Extra Small (기본, Mobile) */
@media (min-width: 0px) {
  /* 모바일 스타일 (기본) */
}

/* Small (Large Mobile) */
@media (min-width: 640px) {
  --container-padding: var(--space-6);
}

/* Medium (Tablet) */
@media (min-width: 768px) {
  --container-padding: var(--space-8);
  
  /* 2 column grid */
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Large (Desktop) */
@media (min-width: 1024px) {
  --container-padding: var(--space-12);
  
  /* 3-4 column grid */
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Extra Large (Large Desktop) */
@media (min-width: 1280px) {
  /* 4-5 column grid */
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* 2XL (Ultra Wide) */
@media (min-width: 1536px) {
  .container {
    max-width: 1280px;
  }
}
```

### 7.2 컨테이너 최대 너비

| Breakpoint | Container Max Width |
|------------|---------------------|
| Mobile (< 640px) | 100% |
| Small (640px+) | 640px |
| Medium (768px+) | 768px |
| Large (1024px+) | 1024px |
| XL (1280px+) | 1280px |
| 2XL (1536px+) | 1280px (고정) |

### 7.3 반응형 타이포그래피

```css
/* Heading 1 */
h1 {
  font-size: var(--text-2xl); /* 24px (Mobile) */
}

@media (min-width: 768px) {
  h1 {
    font-size: var(--text-3xl); /* 30px (Tablet) */
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: var(--text-4xl); /* 36px (Desktop) */
  }
}
```

### 7.4 반응형 Grid

```css
/* Mobile: 1 column */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-6);
  }
}

/* Desktop: 3-4 columns */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .grid-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## 8. 대상 서비스 특화 컴포넌트

### 8.1 Resource Card (리소스 카드)

**스타터킷, 프롬프트, 치트시트, 실무사례 공통**

```html
<div class="resource-card">
  <div class="resource-card__thumbnail">
    <img src="..." alt="..." />
    <div class="resource-card__badge">NEW</div>
  </div>
  
  <div class="resource-card__content">
    <h3 class="resource-card__title">리소스 제목</h3>
    <p class="resource-card__description">간단한 설명...</p>
    
    <div class="resource-card__meta">
      <span class="meta-item">
        <svg>⭐</svg> 4.8 (123)
      </span>
      <span class="meta-item">
        <svg>💾</svg> 1,234
      </span>
    </div>
    
    <div class="resource-card__tags">
      <span class="tag">#마케팅</span>
      <span class="tag">#ChatGPT</span>
    </div>
  </div>
  
  <div class="resource-card__actions">
    <button class="btn btn-primary">다운로드</button>
    <button class="btn btn-secondary">상세보기</button>
  </div>
</div>
```

**스타일**
```css
.resource-card {
  background: var(--bg-primary);
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s;
  
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
  
  &__thumbnail {
    position: relative;
    aspect-ratio: 16 / 9;
    background: var(--gray-100);
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  &__badge {
    position: absolute;
    top: var(--space-2);
    right: var(--space-2);
    background: var(--primary-500);
    color: white;
    padding: var(--space-1) var(--space-2);
    border-radius: 4px;
    font-size: var(--text-xs);
    font-weight: var(--font-semibold);
  }
  
  &__content {
    padding: var(--space-4);
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }
  
  &__title {
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
    color: var(--text-primary);
    line-height: 1.4;
    
    /* 2줄 제한 */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  &__description {
    font-size: var(--text-sm);
    color: var(--text-tertiary);
    
    /* 3줄 제한 */
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  &__meta {
    display: flex;
    gap: var(--space-4);
    font-size: var(--text-sm);
    color: var(--text-tertiary);
    
    .meta-item {
      display: flex;
      align-items: center;
      gap: var(--space-1);
    }
  }
  
  &__tags {
    display: flex;
    gap: var(--space-2);
    flex-wrap: wrap;
  }
  
  &__actions {
    padding: var(--space-4);
    border-top: 1px solid var(--gray-200);
    display: flex;
    gap: var(--space-2);
  }
}
```

### 8.2 Search Bar (검색바)

```html
<div class="search-bar">
  <svg class="search-bar__icon">🔍</svg>
  <input 
    type="text" 
    class="search-bar__input" 
    placeholder="프롬프트, 치트시트, 실무사례 검색..."
  />
  <button class="search-bar__clear" aria-label="검색어 지우기">✕</button>
</div>
```

**스타일**
```css
.search-bar {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  
  &__icon {
    position: absolute;
    left: var(--space-4);
    color: var(--text-tertiary);
  }
  
  &__input {
    width: 100%;
    padding: var(--space-3) var(--space-12) var(--space-3) var(--space-12);
    border: 1px solid var(--gray-300);
    border-radius: 9999px;
    font-size: var(--text-base);
    transition: all 0.2s;
    
    &:focus {
      outline: none;
      border-color: var(--primary-500);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }
  }
  
  &__clear {
    position: absolute;
    right: var(--space-4);
    background: none;
    border: none;
    color: var(--text-tertiary);
    cursor: pointer;
    
    &:hover {
      color: var(--text-secondary);
    }
  }
}
```

### 8.3 Filter Panel (필터 패널)

```html
<div class="filter-panel">
  <div class="filter-panel__header">
    <h3>필터</h3>
    <button class="filter-panel__reset">초기화</button>
  </div>
  
  <div class="filter-panel__section">
    <h4>직무</h4>
    <div class="filter-panel__options">
      <label>
        <input type="checkbox" />
        <span>마케터</span>
      </label>
      <!-- ... -->
    </div>
  </div>
  
  <div class="filter-panel__section">
    <h4>AI 도구</h4>
    <div class="filter-panel__options">
      <label>
        <input type="checkbox" />
        <span>ChatGPT</span>
      </label>
      <!-- ... -->
    </div>
  </div>
</div>
```

### 8.4 Rating Component (평점)

```html
<div class="rating">
  <div class="rating__stars">
    <svg class="star star--filled">⭐</svg>
    <svg class="star star--filled">⭐</svg>
    <svg class="star star--filled">⭐</svg>
    <svg class="star star--filled">⭐</svg>
    <svg class="star star--half">⭐</svg>
  </div>
  <span class="rating__value">4.5</span>
  <span class="rating__count">(123)</span>
</div>
```

**스타일**
```css
.rating {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  
  &__stars {
    display: flex;
    gap: var(--space-1);
    
    .star {
      width: 16px;
      height: 16px;
      
      &--filled {
        color: var(--warning-500);
      }
      
      &--empty {
        color: var(--gray-300);
      }
    }
  }
  
  &__value {
    font-size: var(--text-sm);
    font-weight: var(--font-semibold);
    color: var(--text-primary);
  }
  
  &__count {
    font-size: var(--text-sm);
    color: var(--text-tertiary);
  }
}
```

### 8.5 Before/After Comparison (비교)

```html
<div class="comparison">
  <div class="comparison__item comparison__item--before">
    <div class="comparison__label">Before</div>
    <div class="comparison__value">30분/개</div>
    <p class="comparison__description">수동 작업</p>
  </div>
  
  <div class="comparison__arrow">→</div>
  
  <div class="comparison__item comparison__item--after">
    <div class="comparison__label">After</div>
    <div class="comparison__value">9분/개</div>
    <p class="comparison__description">자동화</p>
  </div>
</div>
```

**스타일**
```css
.comparison {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  padding: var(--space-6);
  background: var(--bg-secondary);
  border-radius: 12px;
  
  &__item {
    flex: 1;
    text-align: center;
    
    &--before {
      .comparison__value {
        color: var(--error-500);
      }
    }
    
    &--after {
      .comparison__value {
        color: var(--success-500);
      }
    }
  }
  
  &__label {
    font-size: var(--text-sm);
    color: var(--text-tertiary);
    margin-bottom: var(--space-2);
  }
  
  &__value {
    font-size: var(--text-3xl);
    font-weight: var(--font-bold);
    margin-bottom: var(--space-2);
  }
  
  &__description {
    font-size: var(--text-sm);
    color: var(--text-secondary);
  }
  
  &__arrow {
    font-size: var(--text-3xl);
    color: var(--primary-500);
  }
}
```

### 8.6 Code Block (프롬프트 표시)

```html
<div class="code-block">
  <div class="code-block__header">
    <span class="code-block__label">프롬프트</span>
    <button class="code-block__copy">복사</button>
  </div>
  <pre class="code-block__content"><code>당신은 전문 콘텐츠 작가입니다...</code></pre>
</div>
```

**스타일**
```css
.code-block {
  background: var(--gray-800);
  border-radius: 8px;
  overflow: hidden;
  
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-3) var(--space-4);
    background: var(--gray-900);
    border-bottom: 1px solid var(--gray-700);
  }
  
  &__label {
    font-size: var(--text-sm);
    color: var(--text-inverse);
  }
  
  &__copy {
    padding: var(--space-2) var(--space-3);
    background: var(--primary-500);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: var(--text-sm);
    cursor: pointer;
    
    &:hover {
      background: var(--primary-600);
    }
  }
  
  &__content {
    padding: var(--space-4);
    color: var(--text-inverse);
    font-family: var(--font-family-mono);
    font-size: var(--text-sm);
    line-height: 1.6;
    overflow-x: auto;
    
    code {
      color: inherit;
    }
  }
}
```

---

## 9. 인터랙션 패턴

### 9.1 애니메이션 원칙

**Timing (타이밍)**
- Fast: 100-200ms (상태 변경, 호버)
- Medium: 200-300ms (전환, 슬라이드)
- Slow: 300-500ms (페이지 전환)

**Easing (이징)**
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### 9.2 Hover Effects (호버 효과)

**버튼**
```css
.btn {
  transition: all 0.2s var(--ease-out);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
}
```

**카드**
```css
.card {
  transition: all 0.3s var(--ease-out);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
}
```

**링크**
```css
a {
  position: relative;
  transition: color 0.2s;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-500);
    transition: width 0.3s var(--ease-out);
  }
  
  &:hover::after {
    width: 100%;
  }
}
```

### 9.3 Loading States (로딩 상태)

**Spinner**
```css
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--gray-200);
  border-top-color: var(--primary-500);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

**Skeleton**
```css
.skeleton {
  background: linear-gradient(
    90deg, 
    var(--gray-200) 25%, 
    var(--gray-100) 50%, 
    var(--gray-200) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

### 9.4 Focus States (포커스 상태)

```css
:focus-visible {
  outline: 2px solid var(--primary-500);
  outline-offset: 2px;
  border-radius: 4px;
}

/* 버튼 */
.btn:focus-visible {
  outline: 2px solid var(--primary-500);
  outline-offset: 2px;
}

/* Input */
input:focus-visible,
textarea:focus-visible {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}
```

### 9.5 Transitions (전환)

**페이지 전환 (Fade In)**
```css
.page-enter {
  opacity: 0;
}

.page-enter-active {
  opacity: 1;
  transition: opacity 0.3s var(--ease-out);
}

.page-exit {
  opacity: 1;
}

.page-exit-active {
  opacity: 0;
  transition: opacity 0.2s var(--ease-in);
}
```

**모달 (Scale + Fade)**
```css
.modal-enter {
  opacity: 0;
  transform: scale(0.9);
}

.modal-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: all 0.3s var(--ease-out);
}
```

**Slide In (좌→우)**
```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in {
  animation: slideIn 0.3s var(--ease-out);
}
```

### 9.6 Microinteractions (마이크로 인터랙션)

**좋아요 버튼**
```css
.like-btn {
  transition: all 0.2s;
  
  &.liked {
    animation: heartBeat 0.3s var(--ease-bounce);
  }
}

@keyframes heartBeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); }
}
```

**토스트 알림**
```css
.toast {
  animation: toastIn 0.3s var(--ease-out), 
             toastOut 0.3s 2.7s var(--ease-in) forwards;
}

@keyframes toastIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes toastOut {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
```

---

## 10. 변경 이력

| 버전 | 날짜 | 작성자 | 변경 내용 |
|------|------|--------|-----------|
| 1.0.0 | 2025-10-02 | 스쿼드 팀 | 초기 스타일 가이드 작성 |

---

## 부록

### A. CSS 변수 전체 목록

```css
:root {
  /* Colors - Primary */
  --primary-50: #EEF2FF;
  --primary-500: #6366F1;
  --primary-600: #4F46E5;
  /* ... */
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-4: 1rem;
  /* ... */
  
  /* Typography */
  --text-base: 1rem;
  --font-normal: 400;
  /* ... */
}
```

### B. Tailwind CSS 설정

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2FF',
          500: '#6366F1',
          // ...
        }
      },
      spacing: {
        '1': '0.25rem',
        '4': '1rem',
        // ...
      }
    }
  }
}
```

---

**END OF DOCUMENT**
