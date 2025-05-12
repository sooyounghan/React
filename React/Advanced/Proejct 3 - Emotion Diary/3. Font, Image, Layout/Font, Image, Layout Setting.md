-----
### 폰트, 이미지, 레이아웃 설정
-----
1. 프로젝트에서 사용하는 폰트, 이미지
<div align="center">
<img src="https://github.com/user-attachments/assets/1c9ce0e1-2f76-494d-9da6-3fe7530f10d3">
<img src="https://github.com/user-attachments/assets/7a8cc47b-78e2-4e81-8668-2ff3de66dabd">
</div>

2. 폰트 설정 경로 : /public
   - /public
   - 폰트 설정 방법 : index.css
```css
@font-face {
  font-family: "NanumPenScript";
  src: url("/NanumPenScript-Regular.ttf"); /* public 경로 : / */
}

body * {
  font-family: "NanumPenScript";
}
```

4. 이미지 경로 : /src/assets (자바스크립트 코드 안에서 import를 통해 사용 가능)
  - /src/assets : Vite가 내부적으로 진행하는 이미지 최적화 설정 때문에 해당 경로에 저장
    + 이미지를 최적화할 것이 아니라면 이미지를 /public에 위치해도 상관 없음
    + 또한, 이미지를 /public에 넣으면 import를 통해 불러오지 못하고, URL로 불러올 수 있음
  - 이미지 설정 방법 (App.jsx)
```jsx
import emotion1 from "./assets/emotion1.png";
import emotion2 from "./assets/emotion2.png";
import emotion3 from "./assets/emotion3.png";
import emotion4 from "./assets/emotion4.png";
import emotion5 from "./assets/emotion5.png";

function App() {
  return (
    <>
      <div>
        {/* /src/assets : Vite의 이미지 최적화 설정 목적 위치 */}
        <img src={emotion1}></img>
        <img src={emotion2}></img>
        <img src={emotion3}></img>
        <img src={emotion4}></img>
        <img src={emotion5}></img>

        {/* /public 위치 시 이미지 불러오는 방법 */}
        <img src={"./emotion1.png"}></img>
        <img src={"./emotion2.png"}></img>
        <img src={"./emotion3.png"}></img>
        <img src={"./emotion4.png"}></img>
        <img src={"./emotion5.png"}></img>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
```

5. 이미지 최적화 확인 방법 : 리액트 앱을 빌드한 다음 빌드한 결과를 배포(Production) 모드로 실행하면 확인 가능
   - 프로젝트 : npm run build
   - 빌드가 완료되면 dist라는 폴더 생성 : 리액트 앱의 빌드 결과
     + /dist/assets에 작성한 모든 리액트 코드가 압축된 상태로 Bundling 되어있음
   - 빌드 결과 실행 : npm run preview (Port Number가 5173이 아닌 4173)
   - 개발자 도구에서 Elements에서 두 방식의 이미지 태그 방법 확인
    + /src/assets의 이미지 : Data URL 형식 (외부 데이터들을 문자열 형태로 브라우저의 메모리에 캐싱하기 위해 사용되는 포맷) 으로 설정 
      * 따라서, 불러온 이미지들은 자동으로 브라우저 메모리에 캐싱, 즉 저장되어서 새로고침을 하더라도 다시는 불러오지 않도록 최적화
    + /public의 이미지 : 새로고침할 때마다 새롭게 불러옴 (최적화적인 측면에서 불리)
    + Network 탭 확인 : Preserve Log 체크 (새로고침 할 때마다 브라우저에 어떤 이미지를 요청하는지 로그 축적)
      * Size Column을 보면 일반 주소로 불러온 이미지들은 불러올 때마다 새롭게 처음부터 불러와서 용량 출력되지만, Data URL 형태로 불러온 이미지는 memory cached라고 하여 메모리에 저장되어 다시는 불러오지 않고 있음
<div align="center">
<img src="https://github.com/user-attachments/assets/8189fa86-85ee-4059-a98d-71b7ad387e49">
</div>

   - 주의사항 : 불러와야 할 이미지가 많을 때에는 브라우저의 메모리에 캐싱해두면, 브라우저 메모리에도 용량 과부하가 발생할 수 있으므로, /public에 보관하는 것이 좋을 수 있음
   - 즉, 소수의 이미지에 대해서는 /src/assets에 보관하는 것이 좋음

6. 이미지를 불러오는 코드들을 별도 모듈화 (/util/get-emotion-images.js)
```js
import emotion1 from "./../assets/emotion1.png";
import emotion2 from "./../assets/emotion2.png";
import emotion3 from "./../assets/emotion3.png";
import emotion4 from "./../assets/emotion4.png";
import emotion5 from "./../assets/emotion5.png";

// 불러온 이미지를 이미지 번호 기준으로 반환해주는 함수
export function getFunctionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    default:
      return null;
  }
}
```

  - App.jsx
```jsx
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom"; // Routes, Route, Link, useNavigate Import
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

import { getFunctionImage } from "./util/get-emotion-images";

/*
  Page Routing
    1. "/" : 모든 일기를 조회하는 Home 페이지
    2. "/new" : 새로운 일기를 작성하는 New 페이지
    3. "/diary" : 일기를 상세히 조회하는 Diary 페이지지
    4. 리액트는 모든 요소가 컴포넌트로 나눠지므로, 페이지도 컴포넌트로 이루어짐 (src/pages 폴더에 보관관)
*/

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      <div>
        {/* /src/assets : Vite의 이미지 최적화 설정 목적 위치 */}
        <img src={getFunctionImage(1)}></img>
        <img src={getFunctionImage(2)}></img>
        <img src={getFunctionImage(3)}></img>
        <img src={getFunctionImage(4)}></img>
        <img src={getFunctionImage(5)}></img>
      </div>
      <div>
        <Link to={"/"}> Home </Link>
        <Link to={"/new"}> New </Link>
        <Link to={"/diary"}> Diary </Link>
      </div>

      <button onClick={onClickButton}> New 페이지로 이동 </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
```

7. 레이아웃 설정
   - index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

   - index.css
```css
@font-face {
  font-family: "NanumPenScript";
  src: url("/NanumPenScript-Regular.ttf"); /* public 경로 : / */
}

html,
body {
  margin: 0px;
  width: 100%;
  background-color: rgb(246, 246, 246);
}

/* 리액트 앱에서는 body 태그 안에 div의 id가 root인 요소 아래에 root 컴포넌트가 렌더링 되기 때문에, root라는 id를 갖는 요소의 스타일을 설정하면 메인 컴포넌트 스타일 설정 가능 */
#root {
  background-color: white;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh; /* vh : View-Port Height : 현재 브라우저 스크린의 크기로, 100vh로 설정하면 스크린 최대 높이만큼 늘어남*/
  height: 100%;
  box-shadow: rgb(100, 100, 100, 0.2) 0px 0px 29px 0px;
}

body * {
  font-family: "NanumPenScript";
}
```
