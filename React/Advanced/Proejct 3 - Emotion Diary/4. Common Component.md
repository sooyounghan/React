-----
### 공통 컴포넌트 구현하기
-----
1. 일반적인 개발 순서 : 페이지 라우팅 - 글로벌 레이아웃 설정 - 공통 컴포넌트 구현 - 개별 페이지 및 복잡한 기능 구현
2. 공통 컴포넌트 : Button, Header 컴포넌트
<div align="center">
<img src="https://github.com/user-attachments/assets/8b68ea47-69da-4424-9c99-9b04e16e8e9e">
<img src="https://github.com/user-attachments/assets/8f1745ee-4760-4b02-b7b7-bba922acc2c6">
</div>

1. Button.jsx
```jsx
import "./Button.css";

/*
    1. 같은 버튼이더라도 긍정적인 초록색 버튼, 일반적인 회색 버튼, 부정적인 빨간색 버튼 구분
    2. type props의 값에 따라 렌더링 하려는 요소의 className을 동적으로 변경되도록 설정해야함
        - Button Button_${type} : 버튼 태그의 className은 전달한 type props에 따라 달라지게 됨
*/
const Button = ({ text, type, onClick }) => {
  return (
    <button className={`Button Button_${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
```

  - Button.css
```css
.Button {
  background-color: rgb(236, 236, 236);
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  white-space: no-wrap; /* 텍스트 화면이 줄어들더라도 줄바꿈 되지 않도록 설정 */
}

.Button_POSITIVE {
  background-color: rgb(100, 201, 100);
  color: white;
}

.Button_NEGATIVE {
  background-color: rgb(253, 86, 96);
  color: white;
}
```

2. Header.jsx
```jsx
import "./Header.css";

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <header className="Header">
      <div className="header_left"> {leftChild} </div>
      <div className="header_center">{title}</div>
      <div className="header_right"> {rightChild} </div>
    </header>
  );
};

export default Header;
```

  - Header.css
```css
.Header {
  display: flex;
  align-items: center;

  padding: 20px 0px;
  border-bottom: 1px solid rgb(226, 226, 226);
}

.Header > div {
  display: flex;
}

.Header .header_center {
  width: 50%;
  font-size: 25px;
  justify-content: center;
}

.Header .header_left {
  width: 25%;
  justify-content: flex-start;
}

.Header .header_right {
  width: 25%;
  justify-content: flex-end;
}
```

3. App.jsx
```jsx
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom"; // Routes, Route, Link, useNavigate Import
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import Button from "./components/Button";
import Header from "./components/Header";

/*
  Page Routing
    1. "/" : 모든 일기를 조회하는 Home 페이지
    2. "/new" : 새로운 일기를 작성하는 New 페이지
    3. "/diary" : 일기를 상세히 조회하는 Diary 페이지지
    4. 리액트는 모든 요소가 컴포넌트로 나눠지므로, 페이지도 컴포넌트로 이루어짐 (src/pages 폴더에 보관관)
*/

function App() {
  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text="Left"></Button>}
        rightChild={<Button text="Right"></Button>}
      />

      <Button
        text={"123"}
        // type={"DEFAULT"} : DEFAULT 타입은 생략해도 무방 : Button Button_undefined로 설정되는데, Button.css에서 설정한 적이 없으므로 기본 스타일로 렌더링
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
      />

      <Button
        text={"123"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
      />
      <Button
        text={"123"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
      />

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

4. index.css
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
  padding: 0px 20px;
}

body * {
  font-family: "NanumPenScript";
}
```
