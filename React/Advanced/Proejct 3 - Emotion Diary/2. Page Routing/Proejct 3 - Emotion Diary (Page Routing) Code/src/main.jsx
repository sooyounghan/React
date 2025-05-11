import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// React Router - BrowserRouter
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  /*
  1. BroswerRouter
    - 브라우저의 현재 주소를 저장하고 감지하는 역할
    - 리액트 앱의 모든 컴포넌트들이 현재 브라우저 주소를 불러와서 쓸 수 있고, 주소의 변화도 감지 가능
    - BrowserRouter가 모든 컴포넌트의 Root Component로 등록
    - BroswerRouter에 보관되는 모든 데이터들은 Navigation.Provider, Location.Provider같은 Context 객체의 Provider 컴포넌트를 이용해서 자손 컴포넌트, 즉 우리가 만들 모든 React 컴포넌트들에게 Context를 통해 공급
    - 즉, 모든 컴포넌트들이 페이지 라우팅과 관련된 모든 데이터를 공급받아서 사용 가능
*/
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
