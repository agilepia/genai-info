# 생성형 AI 정보제공 서비스 - UI/UX 스타일가이드

## 개요

### 목적  
생성형 AI 정보제공 서비스의 일관된 디자인 언어와 사용자 경험을 위한 종합적인 스타일가이드

### 적용 범위
- 웹 애플리케이션 (Desktop, Tablet, Mobile)
- 반응형 디자인 시스템
- 컴포넌트 라이브러리 기반 구현

---

## 브랜드 아이덴티티

### 디자인 컨셉
**"Smart Compass"** - 복잡한 AI 도구의 세계에서 사용자를 올바른 방향으로 안내하는 똑똑한 나침반

#### 핵심 가치
- **전문성 (Professional)**: 업무용 도구로서의 신뢰성
- **직관성 (Intuitive)**: 복잡한 AI 개념을 쉽게 이해할 수 있도록
- **효율성 (Efficient)**: 빠른 발견과 의사결정 지원
- **개인화 (Personal)**: 각 사용자의 상황에 맞춤화

#### 비주얼 컨셉
- **미니멀한 정보 구조**: 불필요한 요소 제거, 핵심 정보 강조
- **가이드된 경험**: 사용자 여정의 명확한 시각적 안내
- **데이터 친화적**: 정보와 수치의 직관적 시각화
- **반응적 인터페이스**: 사용자 행동에 즉각적인 피드백

---

## 디자인 원칙

### 1. 명확성 우선 (Clarity First)
- 애매한 표현보다는 명확하고 구체적인 정보 전달
- 전문 용어 사용 시 반드시 부연 설명 제공
- 시각적 계층구조로 정보의 우선순위 명확화

### 2. 의사결정 지원 (Decision Support)
- 추천 근거와 판단 기준을 투명하게 제시
- 비교와 대조가 쉬운 정보 구조
- 다단계 의사결정 프로세스의 시각적 지원

### 3. 점진적 공개 (Progressive Disclosure)
- 필요한 정보를 적절한 시점에 단계적 제공
- 고급 기능은 숨겨두고 필요시에만 노출
- 사용자 숙련도에 따른 적응적 인터페이스

### 4. 즉각적 피드백 (Immediate Feedback)
- 모든 사용자 액션에 대한 명확한 반응
- 로딩과 처리 상태의 투명한 표시
- 에러와 성공 상황의 친근한 안내

---

## 컬러 시스템

### 기본 색상 팔레트

#### Primary Colors (주색상)
- **Deep Blue**: `#1E3A8A` - 신뢰, 전문성을 나타내는 메인 브랜드 색상
- **Bright Blue**: `#3B82F6` - 액션 버튼, 링크 등 상호작용 요소
- **Light Blue**: `#DBEAFE` - 배경, 하이라이트 영역

#### Secondary Colors (보조색상)  
- **Success Green**: `#10B981` - 성공 메시지, 추천 적중률 표시
- **Warning Amber**: `#F59E0B` - 주의 사항, 중간 단계 알림
- **Error Red**: `#EF4444` - 오류 메시지, 필수 입력 누락

#### Neutral Colors (중성색상)
- **Gray 900**: `#111827` - 제목, 주요 텍스트
- **Gray 700**: `#374151` - 본문 텍스트
- **Gray 500**: `#6B7280` - 보조 텍스트, 라벨
- **Gray 300**: `#D1D5DB` - 구분선, 테두리
- **Gray 100**: `#F3F4F6` - 배경, 카드 영역
- **Gray 50**: `#F9FAFB` - 전체 배경

### 색상 사용 규칙

#### 접근성 고려사항
- **텍스트 대비비**: 최소 4.5:1 (일반), 3:1 (대형 텍스트)
- **상태 표시**: 색상 외 아이콘, 패턴으로 추가 표현
- **색약자 고려**: 빨강-초록 조합 피하기

#### 의미적 색상 사용
- **Primary Blue**: CTA 버튼, 활성 상태, 선택된 요소
- **Success Green**: 완료, 성공, 높은 만족도, 무료 서비스
- **Warning Amber**: 주의 필요, 중간 만족도, 제한된 기능
- **Error Red**: 오류, 실패, 낮은 만족도, 위험 요소

---

## 타이포그래피

### 폰트 패밀리
- **Primary**: `'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif`
- **Monospace**: `'JetBrains Mono', Consolas, 'Courier New', monospace`

### 타입 스케일

#### 제목 스타일
- **H1 (페이지 제목)**: 32px / 40px (line-height) / Bold (700)
- **H2 (섹션 제목)**: 24px / 32px / SemiBold (600)  
- **H3 (서브섹션)**: 20px / 28px / SemiBold (600)
- **H4 (카드 제목)**: 18px / 24px / Medium (500)

#### 본문 스타일
- **Body Large**: 16px / 24px / Regular (400) - 주요 본문
- **Body**: 14px / 20px / Regular (400) - 일반 본문
- **Body Small**: 12px / 16px / Regular (400) - 보조 정보

#### 특수 스타일  
- **Caption**: 11px / 16px / Medium (500) - 라벨, 캡션
- **Code**: 14px / 20px / JetBrains Mono - 코드, 기술 정보

### 타이포그래피 사용 규칙
- **제목**: 간결하고 명확한 표현, 동사 활용 최소화
- **본문**: 읽기 쉬운 문장 길이 (40-60자)
- **라벨**: 명사형 중심, 일관된 표현 방식
- **버튼 텍스트**: 동사형, 구체적 액션 표현

---

## 간격 시스템

### 기본 단위
**8px 그리드 시스템** - 모든 간격과 크기는 8의 배수로 설정

### 간격 토큰
- **XXS**: `4px` - 아이콘과 텍스트 사이
- **XS**: `8px` - 폼 요소 내부 패딩
- **SM**: `12px` - 밀접한 관련 요소 사이
- **MD**: `16px` - 일반적인 컴포넌트 간격
- **LG**: `24px` - 섹션 내 컴포넌트 그룹
- **XL**: `32px` - 주요 섹션 사이
- **XXL**: `48px` - 페이지 영역 구분
- **XXXL**: `64px` - 페이지 상하 여백

### 간격 적용 원칙
- **일관성**: 동일한 종류의 요소는 동일한 간격 사용
- **시각적 그룹핑**: 관련 있는 요소들을 가까이 배치
- **호흡감**: 충분한 여백으로 읽기 편한 레이아웃
- **반응형**: 화면 크기에 따라 간격도 조정

---

## 컴포넌트 스타일

### 기본 컴포넌트

#### 버튼 (Button)
```css
/* Primary Button */
.btn-primary {
  background: #3B82F6;
  color: white;
  border-radius: 6px;
  padding: 12px 24px;
  font-weight: 500;
  transition: all 0.2s ease;
}
.btn-primary:hover { background: #2563EB; }

/* Secondary Button */  
.btn-secondary {
  background: white;
  color: #374151;
  border: 1px solid #D1D5DB;
  border-radius: 6px;
  padding: 12px 24px;
}
```

#### 카드 (Card)
```css
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 24px;
  border: 1px solid #F3F4F6;
}
.card:hover {
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
```

#### 입력 필드 (Input)
```css
.input {
  border: 1px solid #D1D5DB;
  border-radius: 6px;
  padding: 12px 16px;
  font-size: 14px;
  transition: border-color 0.2s ease;
}
.input:focus {
  border-color: #3B82F6;
  box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
}
```

### 상태 표시
- **Default**: 기본 상태
- **Hover**: 마우스 오버 시 색상 진하게, 그림자 추가
- **Active**: 클릭 시 살짝 들어간 효과
- **Focus**: 파란색 아웃라인, 키보드 접근 시 명확히 표시
- **Disabled**: 50% 투명도, 커서 변경

---

## 반응형 브레이크포인트

### 브레이크포인트 정의
```css
/* Mobile First 접근법 */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

/* Tablet */
@media (min-width: 768px) {
  .container { padding: 0 24px; }
}

/* Desktop */  
@media (min-width: 1200px) {
  .container { padding: 0 32px; }
}
```

### 반응형 컴포넌트 규칙
- **모바일**: 단일 컬럼, 풀 너비 버튼
- **태블릿**: 2컬럼 그리드, 적응형 사이드바
- **데스크톱**: 3컬럼 레이아웃, 고정 사이드바

---

## 대상 서비스 특화 컴포넌트

### AI 도구 카드 (AI Tool Card)
```css
.ai-tool-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #E5E7EB;
  transition: all 0.3s ease;
}

.ai-tool-card__header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.ai-tool-card__logo {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-right: 12px;
}

.ai-tool-card__badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.ai-tool-card__badge--free {
  background: #D1FAE5;
  color: #065F46;
}

.ai-tool-card__badge--paid {
  background: #FEF3C7;
  color: #92400E;
}
```

### 추천 이유 컴포넌트 (Recommendation Reason)
```css
.recommendation-reason {
  background: #EFF6FF;
  border-left: 4px solid #3B82F6;
  padding: 16px;
  border-radius: 0 6px 6px 0;
  margin: 16px 0;
}

.recommendation-reason__title {
  font-weight: 600;
  color: #1E40AF;
  margin-bottom: 8px;
}

.recommendation-reason__content {
  color: #374151;
  font-size: 14px;
  line-height: 1.5;
}
```

### 신뢰도 표시기 (Confidence Indicator)
```css
.confidence-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
}

.confidence-indicator__bar {
  width: 80px;
  height: 6px;
  background: #E5E7EB;
  border-radius: 3px;
  overflow: hidden;
}

.confidence-indicator__fill {
  height: 100%;
  background: linear-gradient(90deg, #F59E0B 0%, #10B981 100%);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.confidence-indicator__text {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}
```

### 단계 진행 표시기 (Step Progress)
```css
.step-progress {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}

.step-progress__item {
  display: flex;
  align-items: center;
  flex: 1;
}

.step-progress__circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
}

.step-progress__circle--active {
  background: #3B82F6;
  color: white;
}

.step-progress__circle--completed {
  background: #10B981;
  color: white;
}

.step-progress__circle--inactive {
  background: #E5E7EB;
  color: #9CA3AF;
}
```

---

## 인터랙션 패턴

### 애니메이션 원칙
- **목적성**: 모든 애니메이션은 사용자 이해도를 높이는 목적
- **일관성**: 유사한 요소들은 동일한 애니메이션 패턴 적용
- **성능**: 60fps 유지 가능한 경량 애니메이션
- **접근성**: 사용자 설정에 따른 애니메이션 감소 옵션

### 기본 전환 효과
```css
/* 페이지 전환 */
.page-transition {
  transition: opacity 0.3s ease-in-out;
}

/* 호버 효과 */
.interactive:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}

/* 로딩 상태 */
.loading {
  opacity: 0.6;
  pointer-events: none;
  transition: opacity 0.2s ease;
}

/* 포커스 표시 */
.focusable:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59,130,246,0.2);
  transition: box-shadow 0.2s ease;
}
```

### 마이크로인터랙션
- **버튼 클릭**: 0.1s 스케일 다운 → 원복
- **카드 호버**: 2px 상승 + 그림자 증가
- **로딩**: 펄스 효과 또는 스켈레톤 UI
- **성공 액션**: 체크마크 애니메이션 + 초록색 페이드
- **오류 표시**: 좌우 흔들림 + 빨간색 하이라이트

### 피드백 패턴
- **즉시 피드백**: 버튼 클릭, 폼 입력 등 즉각 반응
- **진행 표시**: 단계별 프로세스의 명확한 현재 위치
- **상태 변화**: 로딩 → 완료 → 성공/실패의 명확한 전환
- **에러 처리**: 친근한 언어로 해결 방법 제시

---

## 아이코노그래피

### 아이콘 스타일
- **스타일**: Outline 기반, 2px 스트로크
- **크기**: 16px, 20px, 24px (8px 배수)
- **컬러**: Gray-600 기본, 상황에 따라 Primary/Secondary 색상

### 주요 아이콘 정의
- **검색**: Magnifying glass
- **추천**: Target with arrow
- **설정**: Gear
- **정보**: Information circle
- **성공**: Check circle
- **경고**: Exclamation triangle
- **오류**: X circle
- **로딩**: Spinner/dots

---

## 일러스트레이션

### 스타일 가이드
- **스타일**: 미니멀 라인아트 + 포인트 컬러
- **컬러**: Primary Blue + Neutral Gray
- **용도**: 빈 상태, 오류 페이지, 온보딩

### 사용 상황별 일러스트
- **시작 화면**: 나침반과 경로를 나타내는 추상적 도형
- **추천 결과**: 연결된 노드들로 AI 도구 관계 표현
- **빈 상태**: 친근한 로봇이 도구를 들고 있는 모습
- **오류 상황**: 미로에서 길을 찾는 캐릭터

---

## 다크모드 (선택사항)

### 색상 매핑
- **배경**: Gray-900 → Gray-50
- **카드**: Gray-800 → White
- **텍스트**: Gray-100 → Gray-900
- **Primary**: Blue 계열 색상은 동일하게 유지
- **중성색**: 명도 반전하여 매핑

---

## 구현 가이드

### CSS 변수 활용
```css
:root {
  /* Colors */
  --color-primary: #3B82F6;
  --color-gray-900: #111827;
  --color-gray-50: #F9FAFB;
  
  /* Spacing */
  --space-xs: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  
  /* Typography */
  --font-family: 'Pretendard', sans-serif;
  --font-size-body: 14px;
  --line-height-body: 1.5;
}
```

### 컴포넌트 명명 규칙
- **BEM 방법론**: Block__Element--Modifier
- **예시**: `.ai-tool-card__title--featured`
- **접두사**: 서비스별 고유 접두사 사용 권장

---

## 품질 관리

### 디자인 리뷰 체크리스트
- [ ] 브랜드 가이드라인 준수 여부
- [ ] 접근성 기준(WCAG 2.1 AA) 충족 여부  
- [ ] 반응형 디자인 적절성
- [ ] 컴포넌트 재사용성 고려
- [ ] 개발 구현 가능성 검토

### 지속적 개선
- **사용자 피드백**: 실제 사용 패턴 분석 후 개선
- **성능 모니터링**: 로딩 시간, 인터랙션 반응 속도
- **트렌드 반영**: 업계 표준 및 트렌드 변화 대응
- **버전 관리**: 디자인 시스템 변경 이력 체계적 관리

---

## 변경 이력

| 버전 | 날짜 | 변경사항 | 작성자 |
|------|------|----------|--------|
| 1.0 | 2025-09-23 | 초기 스타일가이드 작성 | 세리 |

---

## 관련 도구 및 리소스

### 디자인 도구
- **Figma**: 디자인 시스템 및 프로토타입
- **Sketch**: 컴포넌트 라이브러리 관리  
- **Adobe XD**: 인터랙션 디자인

### 구현 도구
- **Storybook**: 컴포넌트 문서화
- **Tailwind CSS**: 유틸리티 클래스 기반 구현
- **Styled Components**: 컴포넌트 기반 스타일링

### 참고 자료
- **Material Design 3**: 기본 원칙 참고
- **Apple Human Interface Guidelines**: 인터랙션 패턴
- **Ant Design**: 비즈니스 서비스 UI 패턴