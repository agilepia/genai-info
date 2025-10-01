/* 생성형 AI 정보제공 서비스 - 공통 JavaScript */
/* 버전: 1.0.0 */

// 전역 데이터 (예제 데이터)
const DATA = {
  user: {
    id: 1,
    nickname: '테크매니저',
    email: 'user@example.com',
    jobCategory: '마케터',
    experienceLevel: '심화',
    profileImage: 'https://ui-avatars.com/api/?name=Tech+Manager&background=6366F1&color=fff'
  },
  
  starterKits: [
    {
      id: 1,
      title: '마케터를 위한 ChatGPT 스타터킷',
      description: 'ChatGPT를 활용한 마케팅 업무 자동화를 위한 필수 리소스 패키지',
      thumbnail: 'https://via.placeholder.com/400x225/6366F1/ffffff?text=Marketer',
      rating: 4.8,
      reviewCount: 567,
      downloadCount: 12345,
      jobCategory: '마케터',
      tags: ['마케팅', 'ChatGPT', '자동화']
    },
    {
      id: 2,
      title: '개발자를 위한 GitHub Copilot 스타터킷',
      description: 'AI 코딩 도구를 활용한 생산성 향상 패키지',
      thumbnail: 'https://via.placeholder.com/400x225/10B981/ffffff?text=Developer',
      rating: 4.5,
      reviewCount: 234,
      downloadCount: 8901,
      jobCategory: '개발자',
      tags: ['개발', 'Copilot', '코딩']
    }
  ],
  
  prompts: [
    {
      id: 1,
      title: '블로그 글 작성 프롬프트',
      description: 'ChatGPT를 활용한 블로그 콘텐츠 자동 생성',
      aiTool: 'ChatGPT',
      rating: 4.7,
      reviewCount: 89,
      useCount: 1234,
      tags: ['마케팅', '콘텐츠제작']
    }
  ],
  
  cheatsheets: [
    {
      id: 1,
      title: 'ChatGPT 치트시트',
      description: '한 눈에 보는 ChatGPT 활용법',
      aiTool: 'ChatGPT',
      rating: 4.9,
      reviewCount: 456,
      downloadCount: 23456,
      thumbnail: 'https://via.placeholder.com/400x600/6366F1/ffffff?text=Cheatsheet'
    }
  ],
  
  cases: [
    {
      id: 1,
      title: '이커머스 상품 설명 자동화',
      description: 'ChatGPT로 상품 설명 작성 시간 70% 단축',
      thumbnail: 'https://via.placeholder.com/600x400/6366F1/ffffff?text=Case',
      beforeTime: '30분/개',
      afterTime: '9분/개',
      improvement: '70%',
      tags: ['상품설명', '자동화']
    }
  ]
};

// 유틸리티 함수들
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => toast.remove(), 3000);
}

function navigateTo(page) {
  window.location.href = page;
}

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function renderHeader(activePage = '') {
  return `
    <header class="header">
      <div class="header__container">
        <div class="header__logo" onclick="navigateTo('03-대시보드.html')">
          🤖 GenAI Info
        </div>
        <nav class="header__nav">
          <a href="03-대시보드.html" class="header__nav-link ${activePage === 'home' ? 'active' : ''}">홈</a>
          <a href="04-스타터킷목록.html" class="header__nav-link ${activePage === 'starterkit' ? 'active' : ''}">스타터킷</a>
          <a href="06-프롬프트검색.html" class="header__nav-link ${activePage === 'prompt' ? 'active' : ''}">프롬프트</a>
          <a href="08-치트시트목록.html" class="header__nav-link ${activePage === 'cheatsheet' ? 'active' : ''}">치트시트</a>
          <a href="10-실무사례검색.html" class="header__nav-link ${activePage === 'case' ? 'active' : ''}">실무사례</a>
        </nav>
        <div class="header__actions">
          <button class="header__search-btn" onclick="navigateTo('12-통합검색결과.html')">🔍</button>
          <button class="header__notification-btn">🔔</button>
          <button class="header__profile-btn">
            <img src="${DATA.user.profileImage}" alt="프로필">
          </button>
        </div>
      </div>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__links">
          <a href="#" class="footer__link">회사 소개</a>
          <a href="#" class="footer__link">이용약관</a>
          <a href="#" class="footer__link">개인정보처리방침</a>
        </div>
        <p class="footer__copyright">© 2025 GenAI Info. All rights reserved.</p>
      </div>
    </footer>
  `;
}

function getUrlParameter(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}
