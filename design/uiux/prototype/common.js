// 생성형 AI 정보제공 서비스 - 공통 JavaScript

// ========== 공통 데이터 ==========
const SAMPLE_DATA = {
  user: {
    email: 'user@example.com',
    name: '김철수',
    job: '마케터',
    experience: '3년 이상'
  },
  
  starterkits: [
    {
      id: 1,
      title: '마케터를 위한 ChatGPT 스타터킷',
      description: 'ChatGPT로 마케팅 업무 효율 3배 높이기',
      job: '마케터',
      level: '입문',
      downloads: 1234,
      rating: 4.8,
      resourceCount: 30,
      tools: ['ChatGPT', 'Claude', 'Midjourney']
    },
    {
      id: 2,
      title: '개발자를 위한 GitHub Copilot 가이드',
      description: 'AI 코드 어시스턴트로 생산성 향상하기',
      job: '개발자',
      level: '심화',
      downloads: 987,
      rating: 4.9,
      resourceCount: 25,
      tools: ['GitHub Copilot', 'ChatGPT']
    }
  ],
  
  prompts: [
    {
      id: 1,
      title: '블로그 포스트 아이디어 생성',
      description: '타겟 독자를 고려한 블로그 주제 10가지 추천',
      category: '콘텐츠 작성',
      job: '마케터',
      tool: 'ChatGPT',
      rating: 4.7,
      useCount: 523,
      content: '당신은 콘텐츠 전략가입니다. [주제]에 대해 [타겟 독자]를 위한 블로그 포스트 아이디어 10가지를 생성해주세요...'
    },
    {
      id: 2,
      title: 'SEO 최적화 메타 디스크립션 작성',
      description: '검색 엔진 최적화를 고려한 메타 설명 작성',
      category: 'SEO',
      job: '마케터',
      tool: 'ChatGPT',
      rating: 4.9,
      useCount: 891,
      content: '[키워드]를 포함하여 150자 이내의 매력적인 메타 디스크립션을 작성해주세요...'
    }
  ],
  
  cheatsheets: [
    {
      id: 1,
      title: 'ChatGPT 단축키 가이드',
      tool: 'ChatGPT',
      job: '전체',
      downloads: 2341,
      rating: 4.8,
      thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="225"%3E%3Crect width="400" height="225" fill="%234F46E5"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="white" text-anchor="middle" dy=".3em" font-family="Arial"%3EChatGPT%3C/text%3E%3C/svg%3E'
    },
    {
      id: 2,
      title: 'Midjourney 프롬프트 치트시트',
      tool: 'Midjourney',
      job: '디자이너',
      downloads: 1876,
      rating: 4.9,
      thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="225"%3E%3Crect width="400" height="225" fill="%2306B6D4"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="white" text-anchor="middle" dy=".3em" font-family="Arial"%3EMidjourney%3C/text%3E%3C/svg%3E'
    }
  ],
  
  cases: [
    {
      id: 1,
      title: '콘텐츠 작성 시간 70% 단축',
      company: '스타트업 A',
      industry: 'IT/테크',
      job: '마케터',
      tool: 'ChatGPT',
      beforeTime: '4시간',
      afterTime: '1.2시간',
      improvement: '70%',
      tags: ['콘텐츠 마케팅', '블로그']
    },
    {
      id: 2,
      title: '고객 문의 응답 시간 50% 감소',
      company: '이커머스 B',
      industry: '이커머스',
      job: 'CS',
      tool: 'Claude',
      beforeTime: '30분',
      afterTime: '15분',
      improvement: '50%',
      tags: ['고객지원', '챗봇']
    }
  ]
};

// ========== 유틸리티 함수 ==========

// 토스트 메시지 표시
function showToast(message, duration = 3000) {
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }
  
  const toast = document.createElement('div');
  toast.className = 'toast show';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// 모달 표시
function showModal(contentHtml) {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop show';
  
  const modal = document.createElement('div');
  modal.className = 'modal-content show';
  modal.innerHTML = contentHtml;
  
  backdrop.addEventListener('click', () => {
    backdrop.remove();
    modal.remove();
  });
  
  document.body.appendChild(backdrop);
  document.body.appendChild(modal);
  
  return { backdrop, modal };
}

// 바텀시트 표시
function showBottomSheet(contentHtml) {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop show';
  
  const sheet = document.createElement('div');
  sheet.className = 'bottom-sheet';
  sheet.innerHTML = `
    <div class="bottom-sheet-handle"></div>
    ${contentHtml}
  `;
  
  backdrop.addEventListener('click', () => {
    sheet.classList.remove('open');
    backdrop.remove();
    setTimeout(() => sheet.remove(), 300);
  });
  
  document.body.appendChild(backdrop);
  document.body.appendChild(sheet);
  
  setTimeout(() => sheet.classList.add('open'), 10);
  
  return { backdrop, sheet };
}

// 페이지 이동
function navigateTo(page) {
  const currentPage = window.location.pathname.split('/').pop();
  if (currentPage === page) return;

  // 상대 경로로 이동 (http와 file 프로토콜 모두 지원)
  window.location.href = page;
}

// 뒤로가기
function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    // 히스토리가 없으면 홈으로
    navigateTo('05-홈.html');
  }
}

// 로컬 스토리지 헬퍼
const Storage = {
  get(key) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (e) {
      console.error('Storage get error:', e);
      return null;
    }
  },
  
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error('Storage set error:', e);
      return false;
    }
  },
  
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      console.error('Storage remove error:', e);
      return false;
    }
  }
};

// 별점 렌더링
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = '';
  
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars += '⭐';
    } else if (i === fullStars && hasHalfStar) {
      stars += '⭐';
    } else {
      stars += '☆';
    }
  }
  
  return stars;
}

// 숫자 포맷팅
function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

// 클립보드 복사
async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textarea);
      return success;
    }
  } catch (err) {
    console.error('Copy failed:', err);
    return false;
  }
}

// 폼 유효성 검사
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// 디바운스
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ========== 네비게이션 헬퍼 ==========
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const currentPage = window.location.pathname.split('/').pop();
  
  navItems.forEach(item => {
    const targetPage = item.dataset.page;
    if (currentPage.includes(targetPage)) {
      item.classList.add('active');
    }
    
    item.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(targetPage);
    });
  });
}

// ========== 검색 헬퍼 ==========
function initSearchBar() {
  const searchBar = document.querySelector('.search-bar');
  if (searchBar) {
    searchBar.addEventListener('click', () => {
      navigateTo('06-통합검색.html');
    });
  }
}

// ========== 뒤로가기 버튼 ==========
function initBackButton() {
  const backBtn = document.querySelector('.header-back');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.history.back();
    });
  }
}

// ========== 카드 렌더링 ==========
function renderPromptCard(prompt) {
  return `
    <div class="card card-clickable" onclick="navigateTo('12-프롬프트-상세.html?id=${prompt.id}')">
      <div class="flex justify-between items-center mb-sm">
        <span class="badge badge-primary">${prompt.tool}</span>
        <span class="text-caption">${formatNumber(prompt.useCount)}회 사용</span>
      </div>
      <h3 class="text-h4 mb-xs">${prompt.title}</h3>
      <p class="text-body-small text-neutral mb-md">${prompt.description}</p>
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-xs">
          <span>${renderStars(prompt.rating)}</span>
          <span class="text-caption">${prompt.rating}</span>
        </div>
        <span class="badge badge-neutral">${prompt.job}</span>
      </div>
    </div>
  `;
}

function renderCheatsheetCard(cheatsheet) {
  return `
    <div class="card card-clickable" onclick="navigateTo('15-치트시트-미리보기.html?id=${cheatsheet.id}')">
      <img src="${cheatsheet.thumbnail}" alt="${cheatsheet.title}" style="width: 100%; aspect-ratio: 16/9; object-fit: cover; border-radius: 8px; margin-bottom: 12px;">
      <h3 class="text-h4 mb-xs">${cheatsheet.title}</h3>
      <div class="flex justify-between items-center mt-sm">
        <span class="text-caption">${formatNumber(cheatsheet.downloads)} 다운로드</span>
        <div class="flex items-center gap-xs">
          <span>${renderStars(cheatsheet.rating)}</span>
          <span class="text-caption">${cheatsheet.rating}</span>
        </div>
      </div>
    </div>
  `;
}

function renderCaseCard(caseData) {
  return `
    <div class="card card-clickable" onclick="navigateTo('19-실무사례-상세.html?id=${caseData.id}')">
      <div class="flex gap-sm mb-sm">
        <span class="badge badge-neutral">${caseData.industry}</span>
        <span class="badge badge-neutral">${caseData.job}</span>
      </div>
      <h3 class="text-h4 mb-xs">${caseData.title}</h3>
      <p class="text-body-small text-neutral mb-md">${caseData.company}</p>
      <div class="flex justify-between items-center" style="padding: 12px; background-color: var(--neutral-100); border-radius: 8px;">
        <div class="text-center">
          <div class="text-h2 text-success">${caseData.improvement}</div>
          <div class="text-caption">효율 개선</div>
        </div>
        ${caseData.beforeTime && caseData.afterTime ? `
        <div class="text-center">
          <div class="text-body text-neutral">${caseData.beforeTime} → ${caseData.afterTime}</div>
          <div class="text-caption">소요 시간</div>
        </div>
        ` : ''}
      </div>
    </div>
  `;
}

// ========== 초기화 ==========
document.addEventListener('DOMContentLoaded', () => {
  // initNavigation(); // inline onclick 방식 사용으로 인해 주석 처리
  initSearchBar();
  // initBackButton(); // inline onclick 방식 사용으로 인해 주석 처리
  
  // 사용자 데이터 확인
  if (!Storage.get('user')) {
    // 첫 방문자인 경우 온보딩 데이터 저장
    Storage.set('user', SAMPLE_DATA.user);
  }
});

// ========== 내보내기 ==========
window.AppUtils = {
  showToast,
  showModal,
  showBottomSheet,
  navigateTo,
  goBack,
  Storage,
  renderStars,
  formatNumber,
  copyToClipboard,
  validateEmail,
  debounce,
  renderPromptCard,
  renderCheatsheetCard,
  renderCaseCard,
  SAMPLE_DATA
};
