// 생성형 AI 정보제공 서비스 - 공통 JavaScript

// 글로벌 상태 관리
const AppState = {
  user: null,
  currentStep: 'login',
  workSituation: {
    workType: [],
    industry: '',
    teamSize: null,
    budget: '',
    urgency: null,
    techLevel: null
  },
  recommendations: [],
  selectedTool: null,
  
  // 상태 업데이트 메서드
  setUser: function(user) {
    this.user = user;
    this.saveToStorage();
  },
  
  setWorkSituation: function(situation) {
    this.workSituation = { ...this.workSituation, ...situation };
    this.saveToStorage();
  },
  
  setRecommendations: function(recommendations) {
    this.recommendations = recommendations;
    this.saveToStorage();
  },
  
  setSelectedTool: function(tool) {
    this.selectedTool = tool;
    this.saveToStorage();
  },
  
  // 로컬 스토리지 저장
  saveToStorage: function() {
    localStorage.setItem('genai-app-state', JSON.stringify({
      user: this.user,
      workSituation: this.workSituation,
      recommendations: this.recommendations,
      selectedTool: this.selectedTool
    }));
  },
  
  // 로컬 스토리지에서 복원
  loadFromStorage: function() {
    try {
      const saved = JSON.parse(localStorage.getItem('genai-app-state') || '{}');
      this.user = saved.user || null;
      this.workSituation = saved.workSituation || this.workSituation;
      this.recommendations = saved.recommendations || [];
      this.selectedTool = saved.selectedTool || null;
    } catch (e) {
      console.warn('Failed to load from storage:', e);
    }
  }
};

// 예제 데이터
const SampleData = {
  // AI 도구 데이터
  aiTools: [
    {
      id: 1,
      name: 'ChatGPT',
      company: 'OpenAI',
      logo: 'C',
      category: 'text-generation',
      price: 'freemium',
      difficulty: 1,
      description: '대화형 AI 어시스턴트로 텍스트 생성, 질의응답, 번역 등 다양한 업무를 지원합니다.',
      features: ['텍스트 생성', '대화형 인터페이스', '다국어 지원', 'API 제공'],
      pricing: [
        { plan: 'Free', price: '$0', features: ['월 제한 있음', '기본 모델'] },
        { plan: 'Plus', price: '$20/월', features: ['무제한 사용', 'GPT-4 접근', '우선 지원'] }
      ],
      rating: 4.8,
      reviewCount: 1250,
      confidence: 92
    },
    {
      id: 2,
      name: 'Claude',
      company: 'Anthropic',
      logo: 'CL',
      category: 'text-generation',
      price: 'freemium',
      difficulty: 1,
      description: '안전하고 유용한 AI 어시스턴트로 긴 문서 처리와 복잡한 추론에 특화되었습니다.',
      features: ['긴 컨텍스트', '안전한 출력', '분석 능력', '코드 생성'],
      pricing: [
        { plan: 'Free', price: '$0', features: ['일일 제한 있음', 'Claude 3 Haiku'] },
        { plan: 'Pro', price: '$20/월', features: ['5배 더 많은 사용량', 'Claude 3 Opus 우선 접근'] }
      ],
      rating: 4.6,
      reviewCount: 890,
      confidence: 88
    },
    {
      id: 3,
      name: 'Midjourney',
      company: 'Midjourney Inc.',
      logo: 'MJ',
      category: 'image-generation',
      price: 'paid',
      difficulty: 2,
      description: '고품질 이미지 생성 AI로 창의적인 비주얼 콘텐츠 제작에 최적화되어 있습니다.',
      features: ['고품질 이미지', '다양한 스타일', '커뮤니티 기능', 'Discord 통합'],
      pricing: [
        { plan: 'Basic', price: '$10/월', features: ['200개 생성/월', '개인 작업실'] },
        { plan: 'Standard', price: '$30/월', features: ['무제한 생성', '상업적 이용'] }
      ],
      rating: 4.9,
      reviewCount: 2100,
      confidence: 95
    },
    {
      id: 4,
      name: 'GitHub Copilot',
      company: 'GitHub',
      logo: 'GH',
      category: 'code-generation',
      price: 'paid',
      difficulty: 3,
      description: '개발자를 위한 AI 페어 프로그래밍 도구로 코드 자동 완성과 생성을 지원합니다.',
      features: ['코드 자동완성', 'IDE 통합', '다양한 언어', '컨텍스트 인식'],
      pricing: [
        { plan: 'Individual', price: '$10/월', features: ['개인 사용', 'IDE 플러그인'] },
        { plan: 'Business', price: '$19/월', features: ['팀 관리', '보안 강화'] }
      ],
      rating: 4.4,
      reviewCount: 5600,
      confidence: 85
    },
    {
      id: 5,
      name: 'Notion AI',
      company: 'Notion',
      logo: 'N',
      category: 'productivity',
      price: 'freemium',
      difficulty: 1,
      description: '문서 작성과 정리에 특화된 AI로 노션 워크스페이스 내에서 사용할 수 있습니다.',
      features: ['문서 요약', '아이디어 생성', '번역', '워크스페이스 통합'],
      pricing: [
        { plan: 'Free', price: '$0', features: ['제한된 AI 크레딧'] },
        { plan: 'AI Add-on', price: '$10/월', features: ['무제한 AI 사용', '고급 기능'] }
      ],
      rating: 4.3,
      reviewCount: 780,
      confidence: 78
    }
  ],
  
  // 업무 유형
  workTypes: [
    '문서 작성', '데이터 분석', '이미지 생성', '코드 개발', '마케팅',
    '고객 서비스', '프레젠테이션', '번역', '요약', '아이디어 생성'
  ],
  
  // 산업 분야
  industries: [
    'IT/소프트웨어', '금융', '제조', '교육', '헬스케어',
    '마케팅/광고', '미디어/엔터테인먼트', '소매/유통', '컨설팅', '기타'
  ]
};

// 유틸리티 함수들
const Utils = {
  // DOM 요소 선택
  $: function(selector) {
    return document.querySelector(selector);
  },
  
  $$: function(selector) {
    return document.querySelectorAll(selector);
  },
  
  // 이벤트 리스너 추가
  on: function(element, event, handler) {
    element.addEventListener(event, handler);
  },
  
  // 클래스 토글
  toggleClass: function(element, className) {
    element.classList.toggle(className);
  },
  
  // HTML 생성
  createElement: function(tag, className, innerHTML) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
  },
  
  // 폼 데이터 수집
  getFormData: function(form) {
    const data = {};
    const formData = new FormData(form);
    for (let [key, value] of formData.entries()) {
      if (data[key]) {
        if (Array.isArray(data[key])) {
          data[key].push(value);
        } else {
          data[key] = [data[key], value];
        }
      } else {
        data[key] = value;
      }
    }
    return data;
  },
  
  // 딜레이 함수
  delay: function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
  
  // 로딩 표시
  showLoading: function(element, text = '처리 중...') {
    element.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
        <div class="loading-spinner"></div>
        <span>${text}</span>
      </div>
    `;
    element.disabled = true;
  },
  
  // 토스트 메시지
  showToast: function(message, type = 'success') {
    const toast = this.createElement('div', `toast toast--${type}`, message);
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.remove();
    }, 3000);
  },
  
  // 페이지 이동
  navigateTo: function(page) {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    
    // 상태 저장
    AppState.saveToStorage();
    
    // 실제 환경에서는 라우터 사용, 프로토타입에서는 페이지 이동
    if (page.includes('.html')) {
      window.location.href = page;
    } else {
      window.location.href = `${page}.html`;
    }
  },
  
  // 뒤로 가기
  goBack: function() {
    window.history.back();
  }
};

// 폼 검증
const Validator = {
  // 이메일 검증
  email: function(value) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value);
  },
  
  // 필수 입력 검증
  required: function(value) {
    return value && value.trim().length > 0;
  },
  
  // 최소 길이 검증
  minLength: function(value, min) {
    return value && value.length >= min;
  },
  
  // 비밀번호 강도 검증
  passwordStrength: function(value) {
    if (!value) return 0;
    let strength = 0;
    if (value.length >= 8) strength++;
    if (/[a-z]/.test(value)) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[^a-zA-Z0-9]/.test(value)) strength++;
    return strength;
  }
};

// AI 도구 추천 로직
const RecommendationEngine = {
  // 추천 점수 계산
  calculateScore: function(tool, situation) {
    let score = 0;
    
    // 업무 유형 매칭
    if (situation.workType && situation.workType.length > 0) {
      const toolCategories = this.getCategoryKeywords(tool.category);
      const matchedTypes = situation.workType.filter(type => 
        toolCategories.some(keyword => type.includes(keyword))
      );
      score += matchedTypes.length * 25;
    }
    
    // 기술 수준 매칭
    if (situation.techLevel) {
      const levelDiff = Math.abs(tool.difficulty - situation.techLevel);
      score += Math.max(0, 20 - levelDiff * 10);
    }
    
    // 예산 매칭
    if (situation.budget) {
      if (situation.budget === 'free' && tool.price === 'free') score += 30;
      else if (situation.budget === 'low' && ['free', 'freemium'].includes(tool.price)) score += 25;
      else if (situation.budget === 'medium' && tool.price !== 'enterprise') score += 20;
      else if (situation.budget === 'high') score += 15;
    }
    
    // 기본 도구 품질 점수
    score += tool.rating * 5;
    
    // 랜덤 노이즈 (실제 환경에서는 더 정교한 로직)
    score += Math.random() * 10;
    
    return Math.min(100, Math.max(0, Math.round(score)));
  },
  
  // 카테고리별 키워드 매핑
  getCategoryKeywords: function(category) {
    const mapping = {
      'text-generation': ['문서', '작성', '번역', '요약', '아이디어'],
      'image-generation': ['이미지', '디자인', '비주얼', '그래픽'],
      'code-generation': ['코드', '개발', '프로그래밍'],
      'productivity': ['문서', '정리', '노트', '협업'],
      'data-analysis': ['데이터', '분석', '차트', '통계']
    };
    return mapping[category] || [];
  },
  
  // 추천 결과 생성
  generateRecommendations: function(situation) {
    const scored = SampleData.aiTools.map(tool => ({
      ...tool,
      score: this.calculateScore(tool, situation),
      reason: this.generateReason(tool, situation)
    }));
    
    // 점수순 정렬 후 상위 5개 반환
    return scored
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  },
  
  // 추천 이유 생성
  generateReason: function(tool, situation) {
    const reasons = [];
    
    if (situation.workType) {
      const keywords = this.getCategoryKeywords(tool.category);
      const matched = situation.workType.filter(type => 
        keywords.some(keyword => type.includes(keyword))
      );
      if (matched.length > 0) {
        reasons.push(`${matched.join(', ')} 업무에 최적화`);
      }
    }
    
    if (situation.techLevel && tool.difficulty <= situation.techLevel) {
      reasons.push('사용하기 쉬운 인터페이스');
    }
    
    if (tool.rating >= 4.5) {
      reasons.push('높은 사용자 만족도');
    }
    
    if (situation.budget === 'free' && tool.price === 'free') {
      reasons.push('무료로 사용 가능');
    }
    
    return reasons.length > 0 ? reasons.join(' • ') : '다양한 기능 제공';
  }
};

// 앱 초기화
document.addEventListener('DOMContentLoaded', function() {
  // 상태 복원
  AppState.loadFromStorage();
  
  // 공통 이벤트 리스너
  
  // 로고 클릭 시 메인으로
  const logo = Utils.$('.header__logo');
  if (logo) {
    Utils.on(logo, 'click', function(e) {
      e.preventDefault();
      if (AppState.user) {
        Utils.navigateTo('03-메인대시보드');
      } else {
        Utils.navigateTo('01-로그인');
      }
    });
  }
  
  // 폼 자동 검증
  const forms = Utils.$$('form');
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      Utils.on(input, 'blur', function() {
        validateField(input);
      });
    });
  });
  
  // 버튼 클릭 효과
  const buttons = Utils.$$('.btn');
  buttons.forEach(button => {
    Utils.on(button, 'click', function() {
      button.style.transform = 'scale(0.98)';
      setTimeout(() => {
        button.style.transform = '';
      }, 100);
    });
  });
});

// 필드 검증 함수
function validateField(field) {
  const value = field.value.trim();
  const fieldName = field.name || field.id;
  let errorMessage = '';
  
  // 필수 입력 검증
  if (field.hasAttribute('required') && !Validator.required(value)) {
    errorMessage = '필수 입력 항목입니다.';
  }
  
  // 이메일 검증
  if (field.type === 'email' && value && !Validator.email(value)) {
    errorMessage = '올바른 이메일 형식이 아닙니다.';
  }
  
  // 비밀번호 검증
  if (field.type === 'password' && value && value.length < 8) {
    errorMessage = '비밀번호는 8자 이상이어야 합니다.';
  }
  
  // 에러 메시지 표시
  showFieldError(field, errorMessage);
  
  return errorMessage === '';
}

// 필드 에러 표시
function showFieldError(field, message) {
  // 기존 에러 메시지 제거
  const existingError = field.parentNode.querySelector('.form-error');
  if (existingError) {
    existingError.remove();
  }
  
  if (message) {
    const errorEl = Utils.createElement('div', 'form-error', message);
    field.parentNode.appendChild(errorEl);
    field.style.borderColor = 'var(--color-error)';
  } else {
    field.style.borderColor = '';
  }
}

// Mock API 함수들
const MockAPI = {
  // 로그인
  login: async function(email, password) {
    await Utils.delay(1000); // 네트워크 지연 시뮬레이션
    
    if (email === 'test@example.com' && password === 'password') {
      return {
        success: true,
        user: {
          id: 1,
          name: '김철수',
          email: email,
          company: '테크 컴퍼니',
          role: '프로덕트 매니저',
          avatar: '김'
        }
      };
    }
    
    return {
      success: false,
      message: '이메일 또는 비밀번호가 올바르지 않습니다.'
    };
  },
  
  // 회원가입
  register: async function(userData) {
    await Utils.delay(1500);
    
    // 이메일 중복 체크 시뮬레이션
    if (userData.email === 'existing@example.com') {
      return {
        success: false,
        message: '이미 가입된 이메일입니다.'
      };
    }
    
    return {
      success: true,
      user: {
        id: Date.now(),
        ...userData,
        avatar: userData.name.charAt(0)
      }
    };
  },
  
  // AI 도구 추천
  getRecommendations: async function(situation) {
    await Utils.delay(2000);
    
    const recommendations = RecommendationEngine.generateRecommendations(situation);
    
    return {
      success: true,
      recommendations: recommendations
    };
  },
  
  // 만족도 평가 저장
  saveFeedback: async function(feedback) {
    await Utils.delay(500);
    
    return {
      success: true,
      message: '피드백이 저장되었습니다.'
    };
  }
};

// 전역 노출
window.AppState = AppState;
window.SampleData = SampleData;
window.Utils = Utils;
window.Validator = Validator;
window.RecommendationEngine = RecommendationEngine;
window.MockAPI = MockAPI;
