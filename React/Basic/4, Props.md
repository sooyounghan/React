-----
### Props - 컴포넌트에게 값 전달하기
-----
1. Props
  - React는 페이지를 컴포넌트 단위로 나누어서 개발
<div align="center">
<img src="https://github.com/user-attachments/assets/d2483a14-0bfd-410a-b74e-cf5c552426a0">
</div>

  - Naver를 React.js로 구현한다면?
<div align="center">
<img src="https://github.com/user-attachments/assets/4a62fbc9-ae50-41e4-9e00-bd6a02dbcac4">
</div>

  - 상단의 Search Bar는 SearchBar 컴포넌트 생성
<div align="center">
<img src="https://github.com/user-attachments/assets/76242bcf-a91b-4121-9c09-38a657b7ffad">
</div>

  - 메뉴 버튼의 경우에는, 생김새만 다르고 똑같은 UI를 하고 있으므로 하나의 버튼을 렌더링하는 버튼이라는 컴포넌트를 만들어 이미지랑 텍스트를 바꿔가며 여러번 반복해서 렌더링하도록 설정
<div align="center">
<img src="https://github.com/user-attachments/assets/8c1dfd52-a339-4411-b774-bdf27e117f84">
<img src="https://github.com/user-attachments/assets/65ab9cef-3dcb-4424-ae32-23ff9bcf6007">
</div>

  - 코드 표현 : App 컴포넌트에서 여러 개의 버튼 컴포넌트를 반복적으로 렌더링하고 각 컴포넌트에 대해 구조는 같지만 세부적 내용만 다르게 렌더링하기 위해서는 각 버튼 컴포넌트들의 어떤 버튼을 렌더링할 것인지 값을 전달해줘야 함
<div align="center">
<img src="https://github.com/user-attachments/assets/662c2b05-d999-4fd9-b55e-6f7cb44f321cd">
<img src="https://github.com/user-attachments/assets/b6ef9927-deff-4da5-9da3-73dbb749e0f5">
</div>

  - React에서는 부모 컴포넌트가 자식 컴프넌트에게 함수의 인수를 전달하듯이 원하는 값 전달 가능
    + 컴포넌트의 전달된 값 : Props (Properties의 줄임말)
    + 이를 이용하면, 컴포넌트를 함수를 호출하듯, 전달하는 값에 따라 각 다른 UI를 렌더링하도록 할 수 있음
<div align="center">
<img src="https://github.com/user-attachments/assets/6f646885-fe82-48a0-b88a-f06321c3c720">
</div>

2. 실습
  - components 폴더 아래 Button.jsx 파일 생성
```jsx
const Button = () => {
  return <button> 클릭 </button>;
};

export default Button;
```

  - Props 사용 (Button.jsx)
```jsx
/*
  1. Props
    - props라는 매개변수로 부모 컴포넌트로부터 전달받은 값들을 불러와 콘솔에 출력
    - 컴포넌트에게 props를 전달해주면, 이 값들은 객체로 묶여서 자식 컴포넌트의 매개변수로 제공
*/

const Button = (props) => {
  console.log(props); // {text: '메일', color: 'red'}, {text: 카페}, {text: '블로그'} 객체 형태로 저장되어 출력
  return (
    <button style={{ color: props.color }}>
      {/* 
            props.color.toUpperCase() 함수로 색상을 대문자로 출력하려고 하면 오류 발생
              - "메일"의 color는 red지만, "카페"와 "블로그"는 색상 지정을 하지 않았으므로 undefined
              - undefined.toUpperCae()가 되므로 오류 발생
              - 💡 따라서, props로 어떠한 값이 반드시 전달될 것이라고 예상하고 코드 작성은 위험
              - 따라서 없을 때, 기본값을 설정해서 오류 해결 가능 
                + React 18 버전 : Button.defaultProps = { color: "black", }; 같이 기본값 설정 가능
                + React 19 버전 (2025 ~ ) : defaultProps 기능 제공 제거되어, props를 구조 분해 할당 문법을 통해 받아와, 구조분해할당의 기본값을 이용하는 방식 사용
        */}
      {props.text} - {props.color}
    </button>
  );
};

// React 18 버전 이하
/*
Button.defaultProps = {
    color: "black",
};
*/

export default Button;
```

  - 객체 부조 분해 할당 방법을 통한 기본값 지정 방식 (Button.jsx)
```jsx
const Button = ({ text, color = "black" }) => {
  // 구조 분해 할당 방법으로 text, color를 받아오되, 구조 분해 할당 기본값 지정을 통해 color="black"으로 기본값 지정
  return (
    <button style={{ color: color }}>
      {/* 
            props.color.toUpperCase() 함수로 색상을 대문자로 출력하려고 하면 오류 발생
              - "메일"의 color는 red지만, "카페"와 "블로그"는 색상 지정을 하지 않았으므로 undefined
              - undefined.toUpperCae()가 되므로 오류 발생
              - 💡 따라서, props로 어떠한 값이 반드시 전달될 것이라고 예상하고 코드 작성은 위험
              - 따라서 없을 때, 기본값을 설정해서 오류 해결 가능 
                + React 18 버전 : Button.defaultProps = { color: "black", }; 같이 기본값 설정 가능
                + React 19 버전 (2025 ~ ) : defaultProps 기능 제공 제거되어, props를 구조 분해 할당 문법을 통해 받아와, 구조분해할당의 기본값을 이용하는 방식 사용
        */}
      {text} - {color.toUpperCase()}
    </button>
  );
};

// React 18 버전 이하
/*
Button.defaultProps = {
    color: "black",
};
*/

export default Button;
```

  - props를 전달하는 부모 컴포넌트 측에서 다양한 여러 개 전달 방법 : spread 연산자 활용 (App.jsx)
```jsx
import "./App.css";
import Button from "./components/Butoon";

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      {/* 세 개의 버튼에 text라는 Props 저장 (전달) */}
      {/* props를 전달하는 부모 컴포넌트 측에서도 text, color 외 다양한 여러 개 값을 props로 전달해야 되는 경우, 이 값들을 하나의 객체로 묶어 spread 연산자를 통해 한 번에 전달 가능 */}
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"} />
    </>
  );
}

export default App;
```

  - props를 전달 가능 : 숫자, 문자열같은 자바스크립트 값 뿐 아니라 HTML 요소 및 컴포넌트도 가능
  - App.jsx
```jsx
import "./App.css";
import Header from "./components/Header";
import Button from "./components/Butoon";

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      {/* 세 개의 버튼에 text라는 Props 저장 (전달) */}
      {/* props를 전달하는 부모 컴포넌트 측에서도 text, color 외 다양한 여러 개 값을 props로 전달해야 되는 경우, 이 값들을 하나의 객체로 묶어 spread 연산자를 통해 한 번에 전달 가능 */}
      {/* props는 문자열, 숫자 같은 일반적인 자바스크립트 값 뿐만아니라 HTML 요소 및 React 컴포넌트도 전달 가능 */}
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        {/* div 태그, 즉 HTML 요소가 Button 컴포넌트에게 children 이라는 props로 자동 전달 */}
        <div> 자식 요소 </div>
        {/* Header 컴포넌트도 props로 전달 가능 : 동일하게 Button 컴포넌트에게 children이라는 props로 전달 */}
        <Header />
      </Button>
    </>
  );
}

export default App;
```
  - Button.jsx
```jsx
const Button = ({ children, text, color = "black" }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
```
