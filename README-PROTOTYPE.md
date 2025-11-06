# 프로토타입 테스트 가이드

## 🌐 GitHub Pages로 프로토타입 보기 (권장)

### 1단계: GitHub Pages 활성화

1. GitHub 저장소 접속: https://github.com/agilepia/genai-info
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - Branch: `claude/test-prototype-011CUrrdbRnY7UYE2zT9QXV2` 선택
   - Folder: `/ (root)` 선택
   - **Save** 버튼 클릭

### 2단계: 프로토타입 접속

활성화 후 약 1-2분 뒤에 다음 URL로 접속 가능:
```
https://agilepia.github.io/genai-info/
```

## 📱 주요 화면 목록

- `01-스플래시.html` - 시작 화면
- `02-온보딩-직무선택.html` - 온보딩
- `03-로그인.html` - 로그인
- `05-홈.html` - 메인 홈
- `06-통합검색.html` - 검색
- `08-스타터킷-목록.html` - 스타터킷
- `20-ROI계산기.html` - ROI 계산
- `28-MY.html` - 마이페이지

그 외 20+ 개의 화면 포함

## 🔧 로컬 테스트 (대안)

로컬에서 직접 파일을 열어서 테스트:
```bash
# 브라우저로 HTML 파일 직접 열기
open design/uiux/prototype/01-스플래시.html
# 또는
file:///home/user/genai-info/design/uiux/prototype/01-스플래시.html
```

**주의**: 일부 기능은 웹 서버를 통해 열어야 정상 작동할 수 있습니다.
