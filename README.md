# 데이터 사이언티스트 포트폴리오 (정적 사이트)

이 저장소는 데이터 사이언티스트 포트폴리오용 간단한 정적 웹사이트 템플릿입니다.

## 포함된 파일
- `index.html` : 메인 페이지
- `styles.css` : 스타일
- `script.js` : `projects.json`을 로드하여 프로젝트 카드를 렌더링
- `projects.json` : 샘플 프로젝트 메타데이터
- `assets/*.svg` : 프로젝트 플레이스홀더 이미지

## 로컬에서 미리보기
간단히 로컬에서 확인하려면 저장소 루트에서 아래 명령을 사용하세요 (Python 3 사용):

```bash
python3 -m http.server 8000
# 그런 다음 브라우저에서 http://localhost:8000 를 엽니다.
```

또는 VS Code의 Live Server 확장 등을 사용해도 됩니다.

## 사용자 설정
- `index.html`에서 이름, 연락처, 소개 등을 수정하세요.
- `projects.json`에 프로젝트 항목을 추가/수정하세요. 각 항목은 `title`, `description`, `tech`(배열), `link`, `image` 필드를 가집니다.
- `assets/`에 실제 스크린샷 이미지를 넣고 `projects.json`의 `image`를 업데이트하세요.

## 배포 제안
- GitHub Pages: 이 저장소를 퍼블릭으로 올리고 `Settings > Pages`에서 `main` 브랜치의 루트를 선택하세요.
- Netlify / Vercel: 정적 사이트로 간단 배포 가능

## 다음 작업 제안
- 이력서(이력서 PDF) 업로드 및 링크 교체
- 프로젝트별 상세 페이지 추가
- 연락처 폼(백엔드 또는 Formspree) 연결
- CI/CD 또는 간단한 빌드 파이프라인 추가

필요하시면 제가 이 저장소를 GitHub Pages로 배포하는 방법, 디자인 커스터마이즈, 혹은 React/Vite 기반으로 마이그레이션까지 도와드리겠습니다.
